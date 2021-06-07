// Uma factory retorna um novo obajeto
module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
}