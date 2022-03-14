//condição ? primeira expressão : segunda expressão

//console.log(0 > 10 ? 'sim' : 'não')

//if ternário

//const ehMaiorIdade = (idade ) => {
    //return idade > 17 ? 'sim, é maior de idade.' : 'não, é menor de idade.'

//}
//console.log(ehMaiorIdade(19))


const  fruta  =  'laranja' ;

switch (fruta) {
    case 'laranjas':
        console.log('30 laranjas por 10 reais');
        console.log('10 tangerinas por 10 reais');
        console.log('10 laranja cravo por 10 reais');
        break;
    case 'mangas':
        console.log('5 mangas por 5 reais');    
        break;
    case 'mamão':
        console.log('mamões e papaya por 2.80 reais');
        break;
        default:
            console.log('não temos a fruta desejada: ' + fruta + '.');
}  