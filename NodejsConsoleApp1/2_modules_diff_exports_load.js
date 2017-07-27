/*
var Counter = require("./modules_diff_export.js");
Counter.PrintNextCount();
*/

/**
 *  exports => {} <=module.exports，[ if(module.exports === null ? exports : module.exports) ]， ===> module
 *  同時指向一個内存，如果修改exports的值，并且module是没有值的，那麽module的值也會改變，如果module.exports指向了另外一个内存，那么无论怎么改exports都不改变
 *  exports 可以用来做变量和方法， module.exports可以用来做对象
 */

var Counter = require("./modules_diff_export.js");
module.loaded;
console.log(module.id);
console.log(module.filename);
console.log(module.parent);
console.log(module.children);