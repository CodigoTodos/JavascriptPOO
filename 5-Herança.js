class Veiculo 
{
    constructor(marca, modelo,ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        
      }
    
    mostrar() { 
        console.log(`Marca: ${this.marca}`);
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Ano: ${this.ano}`);
     }; 

}

class Carro extends Veiculo {
    
  constructor(marca, modelo,ano,nportas) {
    super(marca,modelo,ano);
    this.nportas = nportas;
      }
  mostrar() 
  { 
    console.log(`Dados Carro`);
    super.mostrar();
    console.log(`Portas: ${this.nportas}`);
  }; 
    
 } 

 class Camiao extends Veiculo {
    
  constructor(marca, modelo,ano,peso) {
    super(marca,modelo,ano);
    this.peso = peso;
      }
  mostrar() 
  { 
    console.log(`Dados Camiao`);
    super.mostrar();
    console.log(`Peso: ${this.peso}`);
  }; 
    
 }

 let carro = new Carro("Toyota","Yaris", 2012,5);
 carro.mostrar();
 let camiao = new Camiao("Mercedes","Actros", 2008,26);
 camiao.mostrar();

 /* 
Exercicio

Criar a classe JFutebol que é uma 
sub classe da classe Jogador.
A classe JFutebol acrescenta o atributo 
modeloChuteiras.
O metodo mostrar deve ser atualizado 
para mostrar toda a informação 
da classe Jogador.     
*/