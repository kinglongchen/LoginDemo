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
		echo '&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp无此权限！可点击此处 <a href="/LoginDemo/login.html" target="_blank">重新登录</a>';
?>