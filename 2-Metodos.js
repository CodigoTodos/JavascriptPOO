let estudante ={
    nome: "Rui",
    idade: 29,
    curso: "Informatica",
    Ano: 2,
    mostrar() 
    {
        return "Nome: " + this.nome + 
        " Idade: "+ this.idade;
    },

    mostrarCurso()
    {
        return "Curso: " + this.curso;
    },

    PassarAno()
    {
        this.Ano=this.Ano+1;
    }

};

console.log (estudante.mostrar());
console.log (estudante.mostrarCurso());
estudante.PassarAno();
console.log (estudante.Ano);

/*
Exercicio

Adicionar ao objecto Jogador os seguintes 
metodos:

mostrar()-onde são mostrados os dados do Jogador
aumento()-Este metodo deve incrementar o salário 
do jogador em 10%
transferencia(equipa) - Deve actualizar a nova 
equipa para o qual o jogador foi transferido.

*/