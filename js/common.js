/**
 * 功能：公共JS文件
 * 日期：2017-11-17
 **/
window.$ = require("jquery");
require("../styles/less/entry.less");

$("header").append("<nav>" +
	"<ul>" +
		"<li class='active'>网站首页</li>" +
		"<li>产品介绍</li>" +
		"<li>服务支持</li>" +
		"<li>关于我们</li>" +
	"</ul>" +
"</nav>");

/**
 * 功能：相册操作
 **/
function Album() {
	/* 全屏显示 */
	this.fullScreen = function (ident) {
		var url = $(ident).attr("src");
		$("body").append("<div class='photoShow'></div>");
		var $photoShow = $(".photoShow");
		$photoShow.css("backgroundImage", "url(" + url +")");
		$photoShow.off("click").on("click", function () {
			$(this).fadeOut(300, function () {
				$(this).remove();
			})
		})
	}
}

// 输出到主模块
module.exports = new Album();
