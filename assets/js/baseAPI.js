//1.开发环境服务器地址
var baseURL = "http://api-breakingnews-web.itheima.net"
//2.测试环境服务器地址
// var baseURL = "http://ajax.frontend.itheima.net"

//3.生产环境服务器地址
// var baseURL = "http://ajax.frontend.itheima.net"


//拦截所有ajax请求 ：get/post/ajax
//处理参数
$.ajaxPrefilter (function (options) {
    options.url = baseURL + options.url;
  })