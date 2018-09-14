(function () {
   var ie = !!(window.attachEvent && !window.opera);
   var wk = /webkit\/(\d+)/i.test(navigator.userAgent) && (RegExp.$1 < 525);
   var fn = [];
   var run = function () { for (var i = 0; i < fn.length; i++) fn[i](); };
   var d = document;
   d.ready = function (f) {
      if (!ie && !wk && d.addEventListener)
      return d.addEventListener('DOMContentLoaded', f, false);
      if (fn.push(f) > 1) return;
      if (ie)
         (function () {
            try { d.documentElement.doScroll('left'); run(); }
            catch (err) { setTimeout(arguments.callee, 0); }
         })();
      else if (wk)
      var t = setInterval(function () {
         if (/^(loaded|complete)$/.test(d.readyState))
         clearInterval(t), run();
      }, 0);
   };
})();

function enumsetarg(nm, par) {
    arr = document.getElementsByTagName(nm)
    for (var k = 0, length = arr.length; k < length; k++) {
        arr[k].style.display=par;    }
    arr = document.getElementsByName(nm)
    for (var k = 0, length = arr.length; k < length; k++) {
        arr[k].style.display=par;    }
}

function IEVersion() {
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
    var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器
    var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
    if (isIE) {
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp["$1"]);
        if (fIEVersion == 7) {
            return 7;
        } else if (fIEVersion == 8) {
            return 8;
        } else if (fIEVersion == 9) {
            return 9;
        } else if (fIEVersion == 10) {
            return 10;
        } else {
            return 6;//IE版本<=7
        }
    } else if (isEdge) {
        return 'edge';//edge
    } else if (isIE11) {
        return 11; //IE11
    } else {
        return -1;//不是ie浏览器
    }
}

function ismobileagent() {
                var sUserAgent = navigator.userAgent.toLowerCase();
                var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
                var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
                var bIsMidp = sUserAgent.match(/midp/i) == "midp";
                var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
                var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
                var bIsAndroid = sUserAgent.match(/android/i) == "android";
                var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
                var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
                if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
                    return true;
                } else {
                    return false;
                }
}

function getFileName(o) {
    var pos = o.lastIndexOf("/");
    return o.substring(pos+1);
}

document.ready(function() {
    var isie = (IEVersion()!=-1);
	document.getElementsByTagName('head')[0].innerHTML = document.getElementsByTagName('head')[0].innerHTML + (isie ? "<style>\
			.navelem {\
				display: inline-block;\
				width: 100px;\
				text-align: center;\
				color:black;\
				text-decoration: none;\
				font-size: 15px;\
				font-weight: bold;\
				font-family: 黑体,sans-serif;\
				cursor:pointer;\
			}\
		</style>" : "<style>\
			.navelem {\
				display: inline-block;\
				width: 100px;\
				height: 2em;\
				text-align: center;\
				color:black;\
				text-decoration: none;\
				font-size: 15px;\
				font-weight: bold;\
				position: relative;\
				margin-left: -20px;\
				margin-right: -20px;\
				font-family: 黑体,sans-serif;\
				line-height:17px;\
				cursor:pointer;\
				z-index:1;\
			}\
			.navelem:nth-of-type(odd) {\
				top: -8.5px;\
			}\
			.navelem:nth-of-type(even) {\
				top: 8.5px;\
			}\
			.navelem:nth-of-type(odd):after {\
				content: '\\a●';\
				white-space: pre;\
				color:yellow;\
				text-decoration:none;\
				-webkit-text-stroke:3px red;\
			}\
			.navelem:nth-of-type(even):before {\
				content: '●\\a';\
				white-space: pre;\
				color:yellow;\
				text-decoration:none;\
				-webkit-text-stroke:3px red;\
			}\
		</style>")
	document.getElementById("maindiv").innerHTML = "\
		<div style='width:970px;background-color:blanchedalmond;margin:auto;position:fixed;'>" + (ismobileagent() ? "<h1 style='margin:0;padding:0;' align='center'>请使用电脑端访问来获得最佳体验！！！</h1>" : "<h1 style='margin:0;padding:0;' align='center'>OpenBVE/Hmmsim 线路开发入门教程</h1>") + "<h4 style='margin:0;padding:0;margin-bottom: 15px' align='center'>By Zbx1425</h4>\
		<div style='width:700px;width:fit-content;width:-webkit-fit-content;width:-moz-fit-content;margin:auto;padding-bottom:10px;'>\
		<a class='navelem' href='l1-beforestart.html'>写在前面</a>\
		<a class='navelem' href='l2-setupdev.html'>开发环境准备</a>\
		<a class='navelem' href='l3-firstroute.html'>第一条线路</a>\
		<a class='navelem' href='l4-slightmodify.html'>添油加醋</a>\
		<a class='navelem'>几何变换</a>\
		<a class='navelem'>外景物体</a>\
		<a class='navelem'>转弯和高架</a>\
		<a class='navelem'>复线和道岔</a>\
		<a class='navelem'>地下岛式站台</a>\
		<a class='navelem'>时刻和AI列车</a>\
		<a class='navelem'>信号系统</a>\
		<a class='navelem'>细节</a>\
		<a class='navelem'>发布与移植</a>\
		<a class='navelem'>最后的总结</a><br>" + (isie ? "<p align='center'>不建议使用 Internet Explorer 访问本网站。建议您改用FireFox或Google Chrome!</p>" : "<div style='margin-left:30px;margin-right:30px;border-top:thick solid;border-color:red;position:relative;top:-20px;z-index: 0;'></div>") + "</div><hr></div><br>" + document.getElementById("maindiv").innerHTML + "<br><br><hr><p>编写： Zbx1425 (zbx1425@126.com)</p><br><br>";
    document.getElementsByTagName("a")[getFileName(location.toString())[1]-1].style.color="red";
	//document.getElementById("maindiv").style.marginLeft = document.body.clientWidth / 2 - 500 + "px";
});