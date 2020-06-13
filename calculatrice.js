var pre = ' ', nombre, virgule, egale, option, allowSR = true;
var textview = document.forms['calculatrice']['textview'];

function insertNom(nom){
    if (egale){
        pre = nom;
        textview.value = pre;
        nombre = true;
        egale = false;
    }
    else{
        pre = textview.value + nom;
        textview.value = pre;
        nombre = true;
    }
    if (option) virgule = false;
    //SR('a');
}
 function insertOp(op){
     textview.value = pre + op;
     option = true;
     egale = false;
     allowSR = false;
     //SR('a');
 }

 function insertDec(){
     if(nombre && !virgule){
         textview.value = pre + '.';
         virgule = true;
         option = false;
     }
 }

 function equalTo(){
     if(pre){
         pre = eval(exp)
         textview.value = pre;
         egale = false;
         virgule = false;
         nombre = false;
         allowSR = true;
         //SR('a');
     }
 }

 function clean(){
     pre = '';
     textview.value = pre;
     virgule = false;
 }

 function back(){
     pre = textview.value
     pre = pre.substring(0, pre.length - 1);
     textview.value = pre;
 }