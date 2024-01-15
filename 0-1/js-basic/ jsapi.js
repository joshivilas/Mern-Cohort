function call(){
    const inFunctionDate = new Date();
    console.log("Set Timeout function: ");
    console.log( inFunctionDate.getSeconds() + "s: "+ inFunctionDate.getMilliseconds() + "ms");
}


console.log("Before Calling the setTimeInterval");

const date = (new Date());
console.log( date.getSeconds() + "s: "+ date.getMilliseconds() + "ms");
setInterval(call, 2000)