//async




//promises
const fs = require("fs")
function readFileAsync()
{
    return new Promise(function(resolve) {
        console.log("Inside Promise...")
        fs.readFile("a.txt", "utf-8", function(err, data){
            console.log("Inside readFile...");
            resolve(data);
        })
    });
}

//callback function to call 
function onDone(data) {
    console.log(data);
}

readFileAsync().then(onDone);



// async await

async function main()
{
    console.log("Inside the Main()");
    const res = await readFileAsync();
    console.log(res);
}
console.log("------------")
main();