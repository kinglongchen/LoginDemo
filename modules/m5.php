<?php
	include('../user.php');
	islogin();
	$modulecode=5;
	$action=0;
	$userid = $_SESSION['userid'];
	$user = new User($userid);
	if(check($user,$modulecode,$action))
		header("Location:http://www.qq.com/");
	else 
		header("Location:/LoginDemo/index.php");
?>