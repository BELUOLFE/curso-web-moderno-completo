const ferrari = {
    modelo: 'F40',
    veloMax: 324
}

const volvo = {
    modelo: 'V40',
    veloMax: 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__=== Object.prototype)
console.log(volvo.__proto__=== Object.prototype)
console.log(Object.prototype._proto_=== null)

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)