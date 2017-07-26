var counter = 0;

exports.PrintNextCount = function () {
	counter += 2;
	console.log(`结果是 ${counter}`);
}

var isEq = (exports === module.exports)

console.log(isEq);