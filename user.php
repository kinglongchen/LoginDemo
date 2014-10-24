<?php
include("conn.php");
include("util.php");
class Module{
	var $modulecode;
	var $modulename;
	var $modulevalue;
	var $linkurl;
	var $parentmodule;
	var $moduledescription;
	function Module($modulecode) {
		$sql = "select * from tb_module where ModuleCode='$modulecode'";
			$r = mysql_query($sql) or die("Invalid query: " . mysql_error());
			while($row = mysql_fetch_array($r)){
				$this->modulecode=$row['ModuleCode'];
				$this->modulename=$row['ModuleName'];
				$this->modulevalue=$row['ModuleValue'];
				$this->linkurl=$row['LinkUrl'];
				if($this->parentmodule!=null)$this->parentmodule=new Module($row['ParentModule']);
				$this->moduledescription=$row['ModuleDescription'];
				}
		}
	}
class Action{
	var $actioncode;
	var $actionname;
	var $actionvalue;
	function Action($actioncode) {
			$sql = "select * from tb_action where ActionCode='$actioncode'";
			$r = mysql_query($sql) or die("Invalid query: " . mysql_error());
			while($row = mysql_fetch_array($r)){
				$this->actioncode=$row['ActionCode'];
				$this->actionname=$row['ActionName'];
				$this->actionvalue=$row['ActionValue'];
				}
		}
	}
class Permit{
		var $permitcode;
		var $module;
		var $action;
		var $permitvalue;
		function Permit($permitcode) {
			$sql = "select * from tb_permit where PermitCode='$permitcode'";
			$r = mysql_query($sql) or die("Invalid query: " . mysql_error());
			while($row = mysql_fetch_array($r)){
				$this->permitcode=$row['PermitCode'];
				$this->module=new Module($row['ModuleCode']);
				$this->action=new Action($row['ActionCode']);
				$this->permitvalue=$row['PermitValue'];
				}
			}

		function check($module,$action) {
				return $this->module->modulecode==$module->modulecode&&$this->action->actioncode==$action->actioncode;
			}
	}
class Permit_Group {
	var $groupcode;
	var $groupname;
	var $permits=array();
	function Permit_Group($groupcode) {
		$sql = "select * from tb_permit_group where GroupCode='$groupcode'";
		$r = mysql_query($sql) or die("Invalid query: " . mysql_error());
		while($row = mysql_fetch_array($r)){
				$this->groupcode=$row['GroupCode'];
				$this->groupname=$row['GroupName'];
				$permitcodes = explode(';',$row['PermitCode']);
				foreach($permitcodes as $permitcode) array_push($this->permits,new Permit($permitcode));	
			}
		}
	}
class Role_Permit {
	var $rolecode;
	var $permitgroups=array();
	function Role_Permit($rolecode) {
		$sql = "select * from tb_role_permit where RoleCode='$rolecode'";
		$r = mysql_query($sql) or die("Invalid query: " . mysql_error());
		while($row = mysql_fetch_array($r)){
				$this->rolecode=$row['RoleCode'];
				$pgcodes = explode(";",$row['PermitCode']);
				foreach($pgcodes as $pgcode) array_push($this->permitgroups,new Permit_Group($pgcode));
			}
		
		}
	}
class Role{
	var $rolecode;
	var $rolename;
	var $roledescription;
	var $rolepermit;
	function Role($rolecode) {
		$sql = "select * from tb_role where RoleCode='$rolecode'";
		$r = mysql_query($sql) or die("Invalid query: " . mysql_error());
		if($row = mysql_fetch_array($r)){
			$this->rolecode=$row['RoleCode'];
			$this->rolename=$row['RoleName'];
			$this->roledescription=$row['RoleDescription'];
			$this->rolepermit=new Role_Permit($row['RoleCode']);
			}
		}
	}


class User_Permit{
		var $userid;
		var $roles=array();
		var $permits=array();
		function User_Permit($userid) {
			$sql = "select * from tb_user_permit where UserID='$userid'";
			$r = mysql_query($sql) or die("Invalid query: " . mysql_error());
			while($row = mysql_fetch_array($r)) {
				$this->userid=$userid;
				array_push($this->roles,new Role($row['RoleCode']));
				if($row['PermitCode']!=""){
					$permitcodes = explode(";",$row['PermitCode']);
					foreach($permitcodes as $permitcode) array_push($this->permits,new Permit($permitcode));
					}
				}
			}
	}
	
class User{
	var $userid;
	var $username;
	var $passwd;
	var $truename;
	var $user_permit=array();
	var $modules=array();
	function User($userid) {
		$sql = "select * from tb_user where UserID='$userid'";
		$r = mysql_query($sql) or die("Invalid query: " . mysql_error());
		if($row = mysql_fetch_array($r)) {
			$this->userid=$row['UserID'];
			$this->username=$row['UserName'];
			$this->passwd=$row['Password'];
			$this->truename=$row['TrueName']==""?"Default":$row['TrueName'];
			$this->user_permit=new User_Permit($row['UserID']);
			//$this->roles = $this->getRoles();
			}
		}
	function getRoles() {
		return $this->user_permit->roles;
		}
	function getRole_PermitGroups($role) {
		return $role->rolepermit->permitgroups;
		}
	function getPermitGroups() {
		$roles = $this->getRoles();
		$permitgroups=array();
		foreach($roles as $role) $permitgroups = array_merge($permitgroups,$this->getRole_PermitGroups($role));
		$permitgroups=a_array_unique($permitgroups);
		return $permitgroups;
		}
	function getPerimitGroup_Permits($permitgroup) {
		return $permitgroup->permits;
		}
	function getPermits() {
		$permitgroups = $this->getPermitGroups();
		$permits=array();
		foreach($permitgroups as $permitgroup) $permits = array_merge($permits,$this->getPerimitGroup_Permits($permitgroup));
		$permits = a_array_unique($permits);
		return $permits;
		}
	function getPermit_Modules($permit) {
		return $permit->module;
		}
	function getModules() {
		$permits = $this->getPermits();
		$modules = array();
		foreach($permits as $permit) array_push($modules,$this->getPermit_Modules($permit));
		return a_array_unique($modules);
		}
	function getCateLog() {
		$modules = $this->getModules();
		$catelog=array();
		foreach($modules as $module) {
			$catelog[$module->modulename]=$module->linkurl;
			}
		return $catelog;
		}
	
	function check($module,$action) {
			$permits = $this->getPermits();
			foreach($permits as $permit) {
				if ($permit->check($module,$action))return true;
				}
			return false;
		}
	
	
	}
	
function check($user,$modulecode,$actioncode) {
	$module=new Module($modulecode);
	$action=new Action($actioncode);
	
		return $user->check($module,$action);
	}

?>