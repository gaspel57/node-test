/*
process.on('Signal', function(code) {

    // 以下代码永远不会执行
    setTimeout(function() {
        console.log("该代码不会执行");
    }, 0);

    console.log('退出码为:', code);
});
console.log("程序执行结束");

setInterval(function(){
    process.exit();
},5000);*/
/*
* 表准输入输出流
* */
//开启输入输出流
// process.stdin.resume();
var a;
var b;

process.stdout.write("请输入A的值：")
process.stdin.on("data",function(click){
    if(!a){
        a = Number(click);
        process.stdout.write("请输入B的值：")

    }else {
        b = Number(click);
        process.stdout.write('结果是：'+(a + b));

    }
    // console.log("用户输入了"+click)
})


