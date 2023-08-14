const express = require("express");

const server = express();
const PORT = process.env.PORT || 3007

server.get("/", (req, res)=>{
    res.status(200).json({message: "API UP!"});
});

server.listen(PORT, ()=>{
    console.log(`Server is listening at: ${PORT}`)
});

function isThisFibonacci(number) {
    let a = 0;
    let b = 1;

    while (b < number) {
        let momento = b;
        b = a + b;
        a = momento
    }
    return b === number;
};

//Route:Fibonacci portion

server.get('/fibonacci/:number', (req, res) => {
    const number = parseInt(req.params.number);

    if (isThisFibonacci(number)) {
       res.json({message: 'Very good. It is Fibonacci.'}); 
       
    } else {
        res.json({message: 'I can tell this is not a Fibonacci number.'});
    }
});