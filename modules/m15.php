<?php
	include('../user.php');
	islogin();
	$modulecode=15;
	$action=0;
	$userid = $_SESSION['userid'];
	$user = new User($userid);
	if(check($user,$modulecode,$action))
		header("Location:http://www.sina.com.cn/");
	else 
		header("Location:/LoginDemo/index.php");
?>