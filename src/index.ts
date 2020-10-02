import {menuPral} from '../view/menuPral'
const main = async () => {
    let n: number
    do {
        n = await menuPral()
        switch(n){
            case 1:
                console.log("Estoy en opción 1")
                break
            case 2:
                console.log("Estoy en opción 2")
                break
            case 0:
                console.log('\nAdios')
                break
            default:
                console.log("Opción incorrecta")
                break
        }
    }while (n != 0)
}
main()
/*
import { leerTeclado } from '../view/entradaTeclado'
const lee = async () => {
    let n: string
    n = await leerTeclado('nombre: ')
    return n
}

let nombre: string 
nombre = lee()
*/