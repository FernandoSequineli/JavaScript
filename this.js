const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        //sem o this = is not defined 
        console.log(this.saudacao)
    }
}
//pessoa.falar()
const falar2 = pessoa.falar
falar2()
// a funcao BIND "resolve" o this do obj -pessoa-
const falar = pessoa.falar.bind(pessoa) 
falar()
