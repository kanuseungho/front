'use strict'
function fCheck(){
  let goUrl = document.getElementById("goUrl").value;
  if(goUrl==""){
    alert("가고싶은 사이트를 선택하세요")
  }else{
    alert("이동한 주소는"+goUrl)
    location.href=goUrl;
  }
}
