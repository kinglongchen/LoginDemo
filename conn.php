<?php
    $mysql_server_name = "192.168.0.104";
    $mysql_username = "yxb";
    #$mysql_password = "Max6and7";
	$mysql_password = "12345";
    $mysql_database = "nb_db";
    //$conn=mysql_connect($mysql_server_name,$mysql_username,$mysql_password);
	$conn=mysql_connect($mysql_server_name,$mysql_username,$mysql_password);
	
    mysql_select_db($mysql_database, $conn);
    mysql_query("set names 'UTF8'");
    ?>
