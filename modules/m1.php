<?php
	include('../user.php');
	islogin();
	$modulecode=1;
	$actioncode=0;
	$userid = $_SESSION['userid'];
	$user = new User($userid);
	
	if(check($user,$modulecode,$actioncode))
		header("Location:http://www.baidu.com");
	else 
		header("Location:/LoginDemo/index.html");
?>