function soma (numero1, numero2){
    const total = numero1 + numero2;
    console.log(total);
    return total;
}; 

function podeTirarCarteiraDeMotorista (idade){

    if (idade < 18) {
        return 'Pessoa menor de idade infelizmente não é possivel tirar CNH'

    }else{
        return 'Pode tirar CNH'
    }

}

console.log (podeTirarCarteiraDeMotorista(20))
//soma(333,111);

//NaN = not a number = não é um número