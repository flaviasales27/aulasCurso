const filmes = require('./filmes')
const series = require('./series')

filmes.push("Forest Gump","Ilha do Medo")
series.splice(0,1)

console.log(filmes)
console.log(series)