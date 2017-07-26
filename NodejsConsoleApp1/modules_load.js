
/*调用私有模块modules_counter*/

var content1 = require('./modules_counter.js')
console.log("第一次调用私有模块：[modules_counter]"); 

content1.seOutputVal(10);
content1.setIncrement(1)

content1.printNextCount();
content1.printNextCount();
content1.printNextCount();
content1.printNextCount();
content1.printNextCount();

//第二次不会重新加载（new）
var content2 = require('./modules_counter.js')
console.log("第二次调用私有模块：[modules_counter]"); 
content2.printNextCount();
