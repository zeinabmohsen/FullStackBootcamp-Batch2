// Create a JS function that act as a calculator, where it take 2 numbers based on the user input, with the operator and produce the output in an alert format
function calculator(input1,input2,operator){
    switch (operator) {
        case '+': return input1 + input2 ;
            break;
        case '-': return input1 - input2 ;
            break;
        case '*': return input1 * input2 ;
            break;
        case '/': return input1 / input2 ;
            break;
        
        default: 'invalid operator'
            break;
    }
}
// bank account object 
let output = calculator(3,4,'+');
console.log(output);

let bankaccount ={
    owner:"zeinab",
    balance: 1000,
    type:"saving",
    phone:"777-777-777",
    deposit: function(a){
        this.deposit += a;
        return deposit ;
    },
    withdraw: function(b){
        this.deposit -= b ;
    }
}
console.log(bankaccount.owner);
bankaccount.deposit(500);

// console.log(bankaccount.balance);