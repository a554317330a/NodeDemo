/*
var EventEmitter =  require('events').EventEmitter;
var ee = new EventEmitter();
*/



/*

返回结果 

ee.on('some_events', function (first, second) {
    console.log("第一個監聽事件,參數:" + first + "------" + second);
});
ee.on('some_events', function (first, second) {
    console.log("第二個監聽事件,參數:" + first + "------" + second);
});


var isSuccess1 = ee.emit("some_events", "1", "1");

var isSuccess2 = ee.emit("other_events", "2", "2");

console.log(isSuccess1);

console.log(isSuccess2);

*/

/*
事件注册一次 once

ee.once('some_event', function (first,second) {
    console.log("監聽事件");
});

var isSuccess1 = ee.emit("some_event", 1, 1);
var isSuccess2 = ee.emit("some_event", 2, 2);

console.log(isSuccess1);
console.log(isSuccess2);

*/


/*移除监听
var listener1 = function () {
    console.log("第1个监听事件");
};

var listener2 = function () {
    console.log("第2个监听事件");
};
var  listener3 = function() {
    console.log("第3个监听事件");
};

var listener4 = function (first) {
    console.log(`第4个监听事件${first}`);//取值用法
};

ee.on("some_event", listener1);//绑定第一个
ee.on("some_event", listener2);//绑定第二个
ee.on("some_event", listener3);//绑定第三个

console.log("第一次触发");
ee.emit("some_event");//這裏應該一次性觸發三個

//移除監聽
ee.removeListener("some_event", listener2);
ee.removeListener("some_event", listener3);

console.log("第二次觸發")
ee.emit("some_event");

ee.removeAllListeners("some_event");//移除这个事件的所有监听

console.log("第三次触发")
ee.emit("some_event");


//重新添加监听
ee.on("some_event", listener1);//绑定第一个
ee.on("some_event", listener2);//绑定第二个
ee.on("some_event", listener3);//绑定第三个
ee.on("other_event", listener4);//绑定第四个

console.log("第四次触发")
ee.emit("some_event");
ee.emit("other_event", 123123);

//开始删除监听
ee.removeAllListeners("some_event");

console.log("第五次触发")
ee.emit("some_event");
ee.emit("other_event", "---------这是第四个事件");





//重新添加监听
ee.on("some_event", listener1);//绑定第一个
ee.on("some_event", listener2);//绑定第二个
ee.on("some_event", listener3);//绑定第三个
ee.on("other_event", listener4);//绑定第四个

console.log("第六次触发")
ee.emit("some_event");
ee.emit("other_event", "---------这是第四个事件，并且我是一個參數");

//开始删除监听
ee.removeAllListeners();//不输入移除的事件名称，就会所有都移除

console.log("第七次触发")
ee.emit("some_event");
ee.emit("other_event", "---------这是第四个事件，并且我是一個參數");

 */


/*最大监听数量

//这里你会发现只能监听10个


//然后我就去设置最大监听数量为16个

ee.setMaxListeners(16);

var listener1 = function (times) { console.log("`listener ---- i `") };
for (var i = 0; i < 15; i++) {
    ee.on("some_event", listener1, i);
}

console.log(EventEmitter.defaultMaxListeners);//这里可以查看默认最大监听数量
console.log(ee.listenerCount("some_event"));//这里就知道数量有15个了

*/
