var counter = 0;

/*
exports.PrintNextCount = function () {
	counter += 1;
	console.log(`结果是 ${counter}`);
}
    

/**/

module.exports = function () {
    counter += 1;
    this.printNextCount =  function() {
        console.log(`结果是 ${counter}`);
    }
}


var isEq = (exports === module.exports)

console.log(isEq);