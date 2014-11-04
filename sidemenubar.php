<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <!--<meta http-equiv="X-UA-Compatible" content="IE=11; IE=10; IE=9; IE=8; IE=7; IE=EDGE">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <meta name="format-detection" content="telephone=no">-->
    <title>
	宁波综合登录平台
	</title>

    <!-- commented out the fonts.com CSS file. throwing 403 errors -->
    <!-- uncommented per Katie's request -->
    <link rel="stylesheet" type="text/css" href="css/styles.css">
    <script type="text/javascript">
        var pageEditor = false;
        var useJiraCollector = false;
        //document.write(_bdhmScript);

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


<body id="Body" class="language-zh region-zh" style="overflow-y:hidden;">


    <form method="post" action="/zh-cn/cn/business" id="ctl17"  >

        <div class="container">
            
<div style="position: absolute;">
	<div id="ctl18_aspVersion" style="position: fixed; z-index: 30000; color: #FFF; font-size: 15pt;">		
	</div>   
</div>
<nav id="navigation-main" class="navigation-main show-discover minimised" data-folded="true" >
	<ul class="primary">
		<li class="discover" data-gtm='{"event": "click", "widget": "Left Navigation", "state": "primary", "action": ""}'>
			<a class="business selected hassub high" href="/zh-cn/cn/business">
				<span class='icon'>
					网站导航
                </span>
				
			</a>
			<div class="business sub">                    				
					<ul class="scrollable-content">
						
                        
                        <?php
							foreach($modules as $key=>$value) {
								$value = "http://www.baidu.com";
							echo "<li data-gtm='{'event': 'click', 'widget': 'Left Navigation', 'state': ' ', 'action': 'Product'}'><a href='$value' target='anaframe'><span>$key</span></a></li>";
							}
						?>
                        
                        
                        
                        
                        
                        
                        
                        
						<!--<li data-gtm='{"event": "click", "widget": "Left Navigation", "state": " ", "action": "Product"}'>
							<a href="HtmlPage2.html" target="anaframe">
								<span>
									数字公路综合信息服务平台
								</span>
							</a>
						</li>



						<li data-gtm='{"event": "click", "widget": "Left Navigation", "state": " ", "action": "Product"}'>
							<a href="HtmlPage4.html" target="view_frame">
								<span>
									鄞州公交车动态视频监控系统
								</span>
							</a>
						</li>



						<li data-gtm='{"event": "click", "widget": "Left Navigation", "state": " WILL", "action": "Product"}'>
							<a href='http://www.baidu.com' target = "anaframe">
								<span>
									车辆GPS-3G视频综合监控系统
								</span>
							</a>
						</li>
                        
                        <li data-gtm='{"event": "click", "widget": "Left Navigation", "state": " WILL", "action": "Product"}'>
							<a href='http://www.baidu.com' target="view_frame">
								<span>
									浙江省道路运输信息系统
								</span>
							</a>
						</li>
                        
                        <li data-gtm='{"event": "click", "widget": "Left Navigation", "state": " WILL", "action": "Product"}'>
							<a href='http://www.baidu.com' target="view_frame">
								<span>
									浙江省道路运输行业综合培训
								</span>
							</a>
						</li>

                        <li data-gtm='{"event": "click", "widget": "Left Navigation", "state": " WILL", "action": "Product"}'>
							<a href='http://www.baidu.com' target="view_frame">
								<span>
									浙江省道路运输考试管理系统
								</span>
							</a>
						</li>

                        <li data-gtm='{"event": "click", "widget": "Left Navigation", "state": " WILL", "action": "Product"}'>
							<a href='http://www.baidu.com' target="view_frame">
								<span>
									宁波市出租车管理平台
								</span>
							</a>
						</li>
                        <li data-gtm='{"event": "click", "widget": "Left Navigation", "state": " WILL", "action": "Product"}'>
							<a href='http://www.baidu.com' target="view_frame">
								<span>
									浙江省船舶检验信息管理系统
								</span>
							</a>
						</li><li data-gtm='{"event": "click", "widget": "Left Navigation", "state": " WILL", "action": "Product"}'>
							<a href='http://www.baidu.com' target="view_frame">
								<span>
									浙江省水路交通行政许可管理系统
								</span>
							</a>
						</li><li data-gtm='{"event": "click", "widget": "Left Navigation", "state": " WILL", "action": "Product"}'>
							<a href='http://www.baidu.com' target="view_frame">
								<span>
									交通行业综合统计信息管理平台
								</span>
							</a>
						</li><li data-gtm='{"event": "click", "widget": "Left Navigation", "state": " WILL", "action": "Product"}'>
							<a href='http://www.baidu.com' target="view_frame">
								<span>
									水路运输抽样调查信息管理系统
								</span>
							</a>
						</li><li data-gtm='{"event": "click", "widget": "Left Navigation", "state": " WILL", "action": "Product"}'>
							<a href='http://www.baidu.com' target="view_frame">
								<span>
									船询网
								</span>
							</a>
						</li>-->
					</ul>

			</div>
		</li>
        

        

	</ul>
</nav>
            


        </div>
    </form>

    <!--<script type="text/javascript" src="js/require.2.1.4.min.js" data-main="js/app"></script>-->
    

    
</body>
</html>
