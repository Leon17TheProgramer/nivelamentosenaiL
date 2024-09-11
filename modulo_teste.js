/*const modulo_somar = require('./modulo_somar')

const somar = modulo_somar.soma
somar(2,5)

const modulo_subtrair = require('./modulo_subtrair')

const subtrair = modulo_subtrair.subtrair
subtrair(2,5)

const modulo_multiplicar = require('./modulo_multiplicar')

const multiplicar = modulo_multiplicar.multiplicar
multiplicar(2,5)

const modulo_dividir = require('./modulo_dividir')

const dividir = modulo_dividir.dividir
dividir(2,5)

const modulo_potencia = require('./modulo_potencia')

const potencia = modulo_potencia.potencia
potencia(2,5)*/

const fs = require('fs')
const chalk = require('chalk')

fs.appendFile('arquivo.txt','',(err)=>{
    if(err){throw err}
    console.log(chalk.green.bold('Arquivo Criado'))
})

fs.writeFile('arquivo.txt','bom dia :)',(err)=>{
    if(err){throw err}
    console.log(chalk.yellow.bold('Arquivo Modificado'))
})

fs.readFile('arquivo.txt','utf8',(err,data)=>{
    if(err){throw err}
    console.log(chalk.italic(`"${data}"`))
})
