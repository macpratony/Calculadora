
const operation = (com) => {
  let teclaId = com.id;
  let salidaPantalla = document.getElementById('result');
  let valorBoton = document.getElementById(teclaId).value;
  let aux1 = 0;
  let aux2 = 0;
  let resultado = 0;
  salidaPantalla.value = teclaId;
/*  if(teclaId.equals("suma")|| teclaId.equals("resta")){
     salidaPantalla.value = teclaId;
  }else{
    salidaPantalla.value += valorBoton;
  }
  
 /* switch (tecla) {
    
    case "suma":
      resultado = total.value;
      total.value += valor;
      
      break;
      
    case "resta":
      
      break;
      
    case "multiplicacion":
      
      break;
      
    case "division":
      
      break;
      
    case "clearAll":
      
      break;
      
    case "clear":
      
      break;
      
    case "porcentaje":
      
      break;
      
    default:
      total.value += valor;
    break;
  }*/
  
}