/**
 * 功能：首页功能
 * 日期：2017/11/17
 **/
var common = require("./common");
// 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/bar');
// 引入提示框和标题组件
require('echarts/lib/component/grid');
require('echarts/lib/component/legend');
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
require('echarts/theme/dark');

$("figure > div > img").on("click", function () {
	common.fullScreen(this);
});


// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('charts'),'dark');
// 绘制图表
myChart.setOption({
	title: {
		text: 'ECharts 入门示例'
	},
	tooltip: {},
	xAxis: {
		data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
	},
	yAxis: {},
	series: [{
		name: '销量',
		type: 'bar',
		data: [5, 20, 36, 10, 10, 20]
	}]
});
