<?php
    $mysql_server_name = "localhost";
    $mysql_username = "root";
    #$mysql_password = "Max6and7";
	$mysql_password = "";
    $mysql_database = "nb_db";
    //$conn=mysql_connect($mysql_server_name,$mysql_username,$mysql_password);
	$conn=mysql_connect($mysql_server_name,$mysql_username,$mysql_password);
	
    mysql_select_db($mysql_database, $conn);
    mysql_query("set names 'UTF8'");
    ?>
