let catalogo = require('./database/catalogo')

//Adicionar um novo elemento na array

let adicionarFilme = filme => catalogo.push(filme)

adicionarFilme(
    {
        codigo: 3,
        titulo: 'Eternos',
        duracao: 3,
        atores: ['Starfox','Thena'],
        anoDeLancamento: 2021,
        emCartaz:true 
    }
)

//buscar um filme na array
let buscarFilme = codigo => {
    for(let i = 0; i < buscarFilme.length; i++) {
        if(catalogo[i].codigo === codigo){
            return catalogo[i]
        }
    }
}

//console.log(buscarFilme(2))

let alterarStatusEmCartaz = (codigo) => {
    return buscarFilme(codigo).emCartaz ? buscarFilme(codigo).emCartaz = false : buscarFilme(codigo).emCartaz = true 
}

//  console.log(alterarStatusEmCartaz(1))
//  console.log(catalogo[0])

//listar filmes em cartaz na array

let listarTodosOsFilmes = () => {
    // for(let i = 0; i < catalogo.length; i++){
    //     console.log(catalogo[i].titulo)
    // }
    return catalogo.forEach(filme => console.log(filme))
}
listarTodosOsFilmes()

//listar apenas filmes em cartaz na array
let listarFilmesEmCartaz = () => {
    for(let i = 0; i < catalogo.length; i++){
        if(catalogo[i].emCartaz){
            console.log(catalogo[i].titulo)
        }
    }
}

//listarFilmesEmCartaz()

//listar filmes maiores de duas horas
let listarFilmesDeLongaDuracao = () => {
    return catalogo.filter(filme => filme.duracao > 2)
}

//console.log(listarFilmesDeLongaDuracao())