<?php
header("Content-Type: text/html; charset=utf-8");
include 'util.php';

//注销登录 
session_start(); 
if($_GET['action'] == "logout"){  
    unset($_SESSION['userid']);  
    unset($_SESSION['username']);  
	echo '<br>';
	echo '<br>';
	echo '<br>';
    echo '注销登录成功！点击此处 <a href="/LoginDemo/login.html" target="_blank">登录</a>';  
    exit;  
}  

if(!isset($_POST['submit'])){  
    exit('非法访问!');  
}  

$username = $_POST['username'];
$passwd = $_POST['password'];
if(auth($username,$passwd)){
	header("location: index.php");
	}
else {
	header("location: loginerr.html");
	}


?>