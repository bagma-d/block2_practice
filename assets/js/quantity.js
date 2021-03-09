window.onload = function () {       

    function inputMatrix(){

             this.value = (this.value == "") ? 1 : this.value;
             let regex = (this.value > 0) ? (/[^0-9]/g) : (/[^1-9]/g);
             this.value = this.value.replace(regex, '');
                 
     }

    function minusClick(){

        let price = this.parentNode.querySelector('.quantity__value');
        price.value = (price.value <= 1) ? 1 : (price.value - 1);

    }

    function plusClick(){
        
        let price = this.parentNode.querySelector('.quantity__value');
        price.value++;
      
    }
    
    let price = document.querySelectorAll('.quantity__value');

    for (i of price) {
        i.addEventListener("input", inputMatrix);
    }

    let minusBtn = document.querySelectorAll('.quantity__minus');

    for (m of minusBtn) {
        m.addEventListener("click", minusClick);
    }

    let plusBtn = document.querySelectorAll('.quantity__plus');

    for (p of plusBtn) {
        p.addEventListener("click", plusClick);
    }    
    } 