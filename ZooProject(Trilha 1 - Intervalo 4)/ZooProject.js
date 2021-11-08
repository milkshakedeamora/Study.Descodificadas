class AnimalClass{
    constructor(especie, idade){
    this.idade = idade;
    this.especie = especie;
    }
    
    
    emitirSom(){
         
    }
    
    movimentar(){
        
    }

   
}
class CrocodiloClass extends AnimalClass{
    
         
    constructor(newIdade){
        
        if(newIdade >= 0 && newIdade <=40)
            super("Crocodilo", newIdade)            
        else
          super("Crocodilo", 0)
        
    }
    
    emitirSom(){
     console.log("CRKRK... Eu sou um crocodilo de " +this.idade+ " anos.");    
    }
    
    movimentar(){
     console.log("Rastejando feito um crocodilo");   
    }   
    
   setIdade (newIdade){
        if(newIdade >= this.idade && newIdade <=40){
            this.idade = newIdade;
        }
    }
    
    getIdade(){
     return this.idade;   
    }
    
}
class PapagaioClass extends AnimalClass{
    
        
    constructor(newIdade){
        if(newIdade >= 0 && newIdade <=60)
            super("Papagaio",newIdade)
        else 
           super("Papagaio",0)
    }
    
    emitirSom(){
     console.log("Loro, loro... Eu sou um papagaio de " +this.idade+ " anos.");    
    }
    
    movimentar(){
     console.log("Voando feito um papagaio");   
    }   
    
    setIdade (newIdade){
        if(newIdade >= this.idade && newIdade <=60){
            this.idade = newIdade;
        }
    }
    getIdade(){
        return this.idade;   
       }
}
class TigreClass extends AnimalClass{
    
         
    constructor(newIdade){
        if(newIdade >= 0 && newIdade <=10){
            super("Tigre",newIdade)
        }else 
            super("Tigre",0)
    }
    
    emitirSom(){
     console.log("ROARR... Eu sou um tigre de " +this.idade+ " anos.");    
    }
    
    movimentar(){
     console.log("Caminhando feito um tigre");   
    }   
    
    setIdade (newIdade){
        if(newIdade >= this.idade && newIdade <=10){
            this.idade = newIdade;
        }
    }
    getIdade(){
        return this.idade;   
       }
}

class ZoologicoClass{
    numJaulas = 1;
    meusAnimais = [];
    
    constructor(newNumJaulas){
     if(newNumJaulas>1 && newNumJaulas<100){
         this.numJaulas = newNumJaulas;                
        }else        
    this.meusAnimais = new AnimalClass()[this.numJaulas];   
    }
}



meuZoologico = new ZoologicoClass(6);
      
      meuZoologico.meusAnimais[0] = new TigreClass(6);
      meuZoologico.meusAnimais[1] = new CrocodiloClass(12);
      meuZoologico.meusAnimais[2] = new CrocodiloClass(21);
      meuZoologico.meusAnimais[3] = new PapagaioClass(67);
      meuZoologico.meusAnimais[4] = new PapagaioClass(34);
      meuZoologico.meusAnimais[5] = new TigreClass(8);
      
      for(let i=0; i<6; i++){
          meuZoologico.meusAnimais[i].emitirSom();
          meuZoologico.meusAnimais[i].movimentar();
      }