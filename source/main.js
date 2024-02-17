const contador = {
    valor: 0,
    
    aumentar: function(){
        this.valor++;
        this.atualizar();
    },
    diminuir: function(){
      this.valor--;
      this.atualizar();
    },
     atualizar: function(){
        document.getElementById(`counter`).textContent = this.valor;
    },
    };
    function aumentarHandler(){
       contador.aumentar();
    };
    function diminuirHandler(){
        contador.diminuir();
    };
    document.getElementById(`increaseBtn`).addEventListener(`click`, aumentarHandler);
    document.getElementById(`decreaseBtn`).addEventListener(`click`, diminuirHandler);
    
    atualizar();
    
    
    
    