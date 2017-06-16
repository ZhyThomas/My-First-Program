document.querySelector('#form1').addEventListener('submit',function(e){
    e.preventDefault();
},false);
var xmlHttp;
function createXMLHttpRequest(){
    //Mozilla 浏览器（将XMLHttpRequest对象作为本地浏览器对象来创建）
    if(window.XMLHttpRequest){ //Mozilla 浏览器
        xmlHttp = new XMLHttpRequest();
    }else if(window.ActiveXObject) { //IE浏览器
    //IE浏览器（将XMLHttpRequest对象作为ActiveX对象来创建）
        try{
            xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
        }catch(e){
            try {
                xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
            }catch(e){}
        }
    }
    if(xmlHttp == null){
        alert("不能创建XMLHttpRequest对象");
        return false;
    }
}
//用于发出异步请求的方法
function sendAsynchronRequest(url,parameter,callback){
    createXMLHttpRequest();
    if(parameter == null){
        //设置一个事件处理器，当XMLHttp状态发生变化，就会出发该事件处理器，由他调用
        //callback指定的javascript函数
        xmlHttp.onreadystatechange = callback;
        //设置对拂去其调用的参数（提交的方式，请求的的url，请求的类型（异步请求））
        xmlHttp.open("GET",url,true);//true表示发出一个异步的请求。
        xmlHttp.send(null);
    }else{
        xmlHttp.onreadystatechange = callback;
        xmlHttp.open("POST",url,true);
        xmlHttp.setRequestHeader("Content-Type","application/json;");
        xmlHttp.send(parameter);
    }
}
//以上代码是通用的方法，接下来是调用以上的方法
function loadPros(){
    // 调用异步请求方法
    url = "http://bimqh.ecidi.com:6530/accounts/api/user/login2/";
    var username = myform.username.value; 
    var password = myform.password.value; 
    var param = {
    'username': username,
    'password': password
};
    var form2 = JSON.stringify(param);
    sendAsynchronRequest(url,form2,loadCallBack);
}
// 指定回调方法
function loadCallBack(){
  try
 {
    if (xmlHttp.readyState == 4) {
    	
        if (xmlHttp.status == 200) {
        	alert("登录成功");
            if(xmlHttp.responseText != null && xmlHttp.responseText != ""){
            	eval("var json= " + xmlHttp.responseText) ;  
                alert(json.account.person_name+"您好");

           }
        }
     }
     if (xmlHttp.readyState == 1)
     {
        //alert("正在加载连接对象......");
     }
     if (xmlHttp.readyState == 2)
     {
        //alert("连接对象加载完毕。");
     }
     if (xmlHttp.readyState == 3)
     {
        //alert("数据获取中......");
     }
  }
  catch (e)
  {
      alert(e);
  }
}
function login()
{
	

loadPros();

}
function register()
{
alert("注册成功");
}