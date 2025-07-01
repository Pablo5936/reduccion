const NUMERO = document.getElementById('numero')
const RESULTADO = document.getElementById('resultado')

function reducirNumero() {
  let numeroReducido = parseInt(NUMERO.value)
  while (numeroReducido > 9) {
    let suma = 0
    let digitos = numeroReducido.toString().split('')
    for (let i = 0; i < digitos.length; i++) {
      suma += parseInt(digitos[i])
    }
    numeroReducido = suma
  }
  RESULTADO.textContent = `El resultado es: ${numeroReducido}`
}
