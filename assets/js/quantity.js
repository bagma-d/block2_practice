window.onload = function () {       

    function inputMatrix(){
                        
            let regex = /[^0-9]/g;
            this.value = this.value.replace(regex, '');
            this.value = ((this.value == "") || (this.value == 0)) ? 1 : this.value;
                 
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

    for (let item of price) {
        item.addEventListener("input", inputMatrix);
    }

    let minusBtn = document.querySelectorAll('.quantity__minus');

    for (let item of minusBtn) {
        item.addEventListener("click", minusClick);
    }

    let plusBtn = document.querySelectorAll('.quantity__plus');

    for (let item of plusBtn) {
        item.addEventListener("click", plusClick);
    }    
    } 