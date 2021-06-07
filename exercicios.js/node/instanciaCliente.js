const contadorA = required('./instanciaUnica')
const contadorB = required('./instanciaUnica')

const contadorC = required('./instanciaNova')()
const contadorD = required('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor)