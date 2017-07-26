
/*调用私有模块modules_counter
*/
var content = require('./modules_counter.js')
console.log("第一次调用私有模块：[modules_counter]"); 

content.seOutputVal(10);
content.setIncrement(1)

content.printNextCount();
content.printNextCount();
content.printNextCount();
content.printNextCount();
content.printNextCount();