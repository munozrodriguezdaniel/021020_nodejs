import { leerTeclado } from '../view/entradaTeclado'
const suma = async () => {
    let n = parseInt( await leerTeclado('Dime un número'))
    let m = parseInt( await leerTeclado('Dime otro número'))
    console.log(`El resultado de la suma de los dos número introducido es : ${n + m} `)
}
suma()
const 