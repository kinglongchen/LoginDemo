<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
	<link rel="stylesheet" type="text/css" href="css/styles.css">
	<script src="http://trip.elong.com/trip/default/common/js/jquery-1.6.2.js" type="text/javascript"></script>
    
    <script type="text/javascript" src="js/require.2.1.4.min.js" data-main="js/app"></script>
    <script type="text/javascript">
        var pageEditor = false;
        var useJiraCollector = false;
        //document.write(_bdhmScript);
		function fun(value) {
			Ana_iframe.src = value;
			}
    </script>
</head>


<?php
//header("Content-Type: text/html; charset=gbk");
include('user.php');

islogin();

$userid=$_SESSION['userid'];
	
$user = new User($userid);
	
$modules = $user->getCateLog();



?>


<body style="margin:0; overflow-y:hidden;">
    <div style="width:280px;height:100%;position:absolute;left:0;" >
        <!--<iframe   style="width:280px;height:100%;border:0;" src="sidemenubar.php"></iframe>-->
        <form method="post" action="/zh-cn/cn/business" id="ctl17"  >

        <div class="container">
            
<!--<div style="position: absolute;">
	<div id="ctl18_aspVersion" style="position: fixed; z-index: 30000; color: #FFF; font-size: 15pt;href="/zh-cn/cn/business"">		
	</div>   
</div>-->
<nav id="navigation-main" class="navigation-main show-discover minimised" data-folded="true" >
	<ul class="primary">
		<li class="discover">
			<a class="business selected hassub high" >
				<span class='icon'>
					网站导航
                </span>
				
			</a>
			<div class="business sub">                    				
					<ul class="scrollable-content">
						
                        <li style="text-align:center;background:#39F;height:40px; line-height:40px;">
							<span style="font-size:18px;color:#fff;" >当前用户：<?php echo $user->getUsername();?></span>
                        </li>
                        
                        <?php
							foreach($modules as $key=>$value) {
								//$value = "http://www.baidu.com";
							//echo "<div class='nav-first' onClick='fun($value)'>$key</div>";
							echo "<a href='#' title='$value' class='nav-first' onClick='fun(\"$value\")'>$key</a>";
							/*echo "<li data-gtm='{'event': 'click', 'widget': 'Left Navigation', 'state': ' ', 'action': 'Product'}'><a onClick='fun(\"$value\") title='$value' target='anaframe'><span>$key</span></a></li>";*/
							
							}
						?>
                        
					</ul>

                    <li class="discover" >
                        <a class="flip" href="/LoginDemo/login.php?action=logout" style="height:60px;">
                            <span class="icon" style="width:40px; top:18px">
                                退出
                            </span>
                        </a>
                    </li>

			</div>
		</li>

	</ul>
</nav>
            


        </div>
    </form>
	
    </div>
   
    
     <div style="width:100%;height:100%;">
    <!--<iframe  style="width:100%;height:100%;border:0;overflow:hidden;" src="http://www.fhdgw.gov.cn"  name="anaframe">
	

    </iframe>-->
	<iframe id="Ana_iframe" class="7" name="anaframe" width= "100%" height="100%" style="border:0;margin:0 0 0 0;"></iframe>
     </div>
</body>
</html>
