
class Veiculo 
{
    static nVeiculos = 0;
    constructor(marca, modelo,ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        Veiculo.nVeiculos++;
      }
    
      static mostraNVeiculo()
      {
          console.log(`Existem ${Veiculo.nVeiculos} veiculos.`);
      }
      

}

let carro1 = new Veiculo("Toyota","Yaris", 2012);
let carro2 = new Veiculo("Honda","Civic", 2001);
let carro3 = new Veiculo("Ford","Focus", 2007);
Veiculo.mostraNVeiculo();

/* 
Exercicio

Incluir um atributo static para 
ter um controlo do numeros de 
Jogadores foram criados pela classe.
Incluir um metodos static que
 mostra quantos jogadores foram criados.
*/

