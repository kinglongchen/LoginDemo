<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>无标题文档</title>
</head>
<link rel="shortcut icon" href="http://trip.elong.com/trip/default/favicon.ico" type="image/x-icon">
<link href="http://trip.elong.com/trip/default/common/style/share.css" type="text/css" rel="stylesheet">
<script src="http://trip.elong.com/trip/default/common/js/jquery-1.6.2.js" type="text/javascript"></script>
<?php
//header("Content-Type: text/html; charset=gbk");
include('user.php');

islogin();
?>
<body>
<?php
	
	$userid=$_SESSION['userid'];
	
	$user = new User($userid);
	
	$modules = $user->getCateLog();
?>
<div id="header-nav">
<div class="c-nav">
<div class="nav">
	
	<?php
	foreach($modules as $key=>$value) {
			echo "<a href='$value' title='$value' target='anaframe' class='nav-first'>$key</a>";
		}
	?>
    <a href='/LoginDemo/login.php?action=logout' title='logout' target="_blank" class='nav-first'>退出</a>
</div>
</div>
</div>
<iframe id="Ana_iframe" class="7" name="anaframe" width= "100%" height="810" style="border:0;margin:0 0 0 0;"></iframe>


</body>
</html>



