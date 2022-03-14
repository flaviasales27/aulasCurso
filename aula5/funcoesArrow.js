//function digaOla() {
//    return 'olá'
//}

//const digaOla = function() {
 //   return 'olá'
//}

const digaOla = () => console.log ('olá')

let horaAtual = () => {
    let data = new Date();
    return data.getHours() + ':' + data.getMinutes();
}
console.log(horaAtual())
 

//digaOla()