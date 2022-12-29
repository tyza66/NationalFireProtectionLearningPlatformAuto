auto.waitFor();
setScreenMetrics(1080, 2340);

toast("打开支付宝(2000)");
launchApp("支付宝");
sleep(2000);

toast("搜索全民消防学习平台(7500)")
click(380,156)
sleep(1500);
click(860,166)
sleep(1000);
click(451,1796)
sleep(400)
click(88,1477)
sleep(1000);
input(" 全民消防学习平台")
sleep(500);
click("搜索")
sleep(3000);

//alert("如果没能自动打开", "如果没能自动打开，请手动打开全民消防学习平台")
sleep(1000)

toast("进入全民消防学习平台(2500)")
click(392,554)
click("全民消防学习平台")
sleep(2500);

toast("开始学习第一篇文章（18500）")
click(386,1765)
sleep(4500)
swipe(585,1964,483,588,1000);
sleep(15000)

click(62,147)
sleep(2500);
swipe(585,1964,583,1665,1000);
toast("开始学习第二篇文章（18500）")
click(466,1828)
sleep(4500)
swipe(585,1964,483,588,1000);
sleep(15000)

click(62,147)
sleep(2500);
swipe(585,1964,583,1665,1000);
toast("开始学习第三篇文章（18500）")
click(466,1828)
sleep(4500)
swipe(585,1964,483,588,1000);
sleep(15000)


alert("执行完成~", "脚本作者：洮羱芝闇(https://github.com/tyza66)")
