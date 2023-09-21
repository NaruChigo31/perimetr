const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdouy,
});

readline.question("weight:", weight => {
    readline.question("length:", leng =>{
        let pe = (parseFloat(leng)+parseFloat(weight))*2 
        console.log(`Perimetr ${pe}`)
    } )
})