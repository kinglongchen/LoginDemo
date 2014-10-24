<?php
include 'conn.php';
function a_array_unique(&$array) {
	$t_array=array();
	
	foreach($array as $key=>$val) {
		$t_array[md5(print_r($val,true))]=$val;
		}
	return $t_array;
	}

function islogin() {
	session_start();
	if(!isset($_SESSION['userid'])) {
		header("Location:/LoginDemo/login.html");
		exit();
		}
		
	}
function auth($username,$password) {
	$sql = "select UserId from tb_user where UserName='$username' and Password='$password'";
	$r=mysql_query($sql) or die("Invalid query: " . mysql_error());
	if($row = mysql_fetch_array($r)) {
		session_start();
		$_SESSION['username']=$username;
		$_SESSION['userid']=$row['UserId'];
		return true;
		};
	return false;
	
	}	
function setSqlFileds_Con(&$array,$fileds_name) {
	foreach($array as &$val) {
		$val=$fileds_name."='".$val."'";
		}
		
	}

function getUserModule($userid) {
	
	$modules = Array();
	$sql = "select tb_role_permit.PermitCode permitcode from tb_role_permit,tb_role,tb_user_permit where tb_user_permit.UserId='$userid' and tb_user_permit.RoleCode=tb_role.RoleCode and tb_role.RoleCode=tb_role_permit.RoleCode";
	$r = mysql_query($sql) or die("Invalid query".mysql_error());
	if($rs = mysql_fetch_array($r)) {
		$groupCodes = explode(';',$rs['permitcode']);
		setSqlFileds_Con($groupCodes,"GroupCode");
		$groupCode_sql = join(" or ",$groupCodes);
		$sql="select PermitCode from tb_permit_group where ".$groupCode_sql;
		$r=mysql_query($sql) or die("Invalid query: " . mysql_error());
		$permitcodes = array();
		while($gcrs = mysql_fetch_array($r))$permitcodes=array_merge($permitcodes,explode(';',$gcrs['PermitCode']));
		$permitcodes = array_unique($permitcodes);
		setSqlFileds_Con($permitcodes,"tb_permit.PermitCode");
		$permitcode_sql = count($permitcodes)==0?"":" and (".join(" or ",$permitcodes).")";
		$sql = "select ModuleName,LinkUrl from tb_permit,tb_module where ActionCode='0' and tb_permit.ModuleCode=tb_module.ModuleCode".$permitcode_sql;
		$r=mysql_query($sql) or die("Invalid query: " . mysql_error());
		while($modulers=mysql_fetch_array($r)) {
			$modules[$modulers['ModuleName']]=$modulers['LinkUrl'];
			}
		return $modules;
		}
	}
?>