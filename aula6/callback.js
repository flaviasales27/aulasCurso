//setTimeout ( () => { //callback function anonima
//    console.log('opa, a callback sendo testada')

//},9000


//) 

//let meuCallback = () => {
 //   console.log ('executando a função meuCallback')
//}

//setTimeout(meuCallback, 6000);
//setTimeout(() => {
    
//}, timeout);

const somar = (num1,num2) => num1 + num2;

const subtrair = (num1,num2) => num1 - num2;

let calculadora = (num1, num2, operacao) => operacao(num1, num2);


console.log(calculadora(10,5,somar))
console.log(calculadora(5,10,subtrair))
console.log(calculadora(5,10, () => 5 + 10))
console.log(calculadora (5,10, (numeroA,nummeroB) => numeroA + nummeroB))