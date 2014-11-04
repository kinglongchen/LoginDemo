<?php
	include('../user.php');
	islogin();
	$modulecode=14;
	$action=0;
	$userid = $_SESSION['userid'];
	$user = new User($userid);
	if(check($user,$modulecode,$action))
		header("Location:http://www.baidu.com");
	else 
		header("Location:/LoginDemo/index.php");
?>