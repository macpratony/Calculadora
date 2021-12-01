let salidaPantalla = document.getElementById('result');

const operation = (com) => {
  let teclaId = com.id;
  
  let valorBoton = document.getElementById(teclaId).value;
  
    if(teclaId === '='){
      if(salidaPantalla.value.length > 0){ 
        salidaPantalla.value = eval(salidaPantalla.value);
        if (salidaPantalla.value == 0) {
          salidaPantalla.value = '';
        }
      if(salidaPantalla.length > 12){
          salidaPantalla.value = eval(salidaPantalla.value).toFixed(12);
      }
    }
  }else if(teclaId === 'clearAll'){
    salidaPantalla.value = '';
  }else if(teclaId === 'clear'){
    let aux = '';
    for(let i =0; i< salidaPantalla.value.length-1 ; i++){
       aux += salidaPantalla.value[i];
    }
    salidaPantalla.value = aux;
  }else{
    if(salidaPantalla.value.length > 0){
     salidaPantalla.value += valorBoton;
    }else if(isNaN(valorBoton)){
     salidaPantalla.value = '';
    }else{
      salidaPantalla.value += valorBoton;
    }
  }
  
}