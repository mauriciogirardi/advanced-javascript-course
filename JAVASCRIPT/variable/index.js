const name = 'Mauricio'
const lastName = 'Girardi'
const age = 35
const weight = 96
const height = 1.73

let imc
let bornYear

imc = weight / (height * height)
bornYear = 2023 - age

console.log(
  `${name} ${lastName} tem ${age} anos, pesa ${weight} kg te, ${height} de altura e seu IMC é de ${imc}, e nasceu em  ${bornYear}`
)
