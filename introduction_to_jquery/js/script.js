function mascara(i){
   
    var v = i.value;
    
    if(isNaN(v[v.length-1])){ // impede de entrar outro caractere que não seja número
       i.value = v.substring(0, v.length-1);
       return;
    }
    
    i.setAttribute("maxlength", "14");
    if (v.length == 3 || v.length == 7) i.value += ".";
    if (v.length == 11) i.value += "-";
 
 }


 function lettersOnly(i) {
      var regex = /[^a-z\s]/gi;
      i.value = i.value.replace(regex, "");
 }
 
 
