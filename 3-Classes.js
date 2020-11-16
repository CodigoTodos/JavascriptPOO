/*
class NomeClasse {
  construtor() { ... }
  metodo1() { ... }
  metodo2() { ... }
  metodo3() { ... }
  }
}
*/
class Veiculo 
{
    constructor(marca, modelo,ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
      }
      
    get Marca()
    {
      console.log("Dentro Get")
      return this.marca;
    }

    set Marca(m)
    {
      console.log("Dentro Set")

      this.marca=m;
    }

}

let carro1 = new Veiculo("Toyota","Yaris", 2012);
let carro2 = new Veiculo("Honda","Civic", 2001);
let carro3 = new Veiculo("Ford","Focus", 2007);
carro1.Marca="BMW";
console.log(carro1.Marca)

/* 
Exercicio

Criar uma classe chamada Jogador 
com atributos e metodos anteriormente 
criados para que possa servir
de modelo para a criação de 
objectos do tipo Jogador. 

Utilizar o set e o get para 
não permitir manupular directamente 
o salario. O set deve garantir 
que o salario não é superior a 1000
e o get deve mostrar a seguinte 
frase na consola ´O ${this.nome} 
tem um salário de ${this.salario}´
*/