'use strict'
function fCheck(){
  let fruit = document.getElementById("fruit").value;
  if(fruit==""){
    alert("과일을 선택하세요")
    return false;
  }
    let fruits = '';
    for(let i=0; i<myform.fruit.length; i++){
      // console.log(myform.fruit.options[i].value,myform.fruit.options[i].selected);
      if(myform.fruit.options[i].selected) fruits += myform.fruit[i].value+'/';
    }
    fruits= fruits.substring(0,fruits.length-1);
    demo.innerHTML ="선택한 과일은 <font color='red'<b>"+fruits+"</b></font>"
  
}
function fClear(){
  document.getElementById("fruit").selected=false;
  demo.innerHTML='';
}