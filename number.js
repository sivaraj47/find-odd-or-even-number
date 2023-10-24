function addevn(){
let numb = Number(document.getElementById("inP").value);

  if(numb % 2 == 0){
    document.getElementById("res").innerHTML = "Even";    
  } else{
    document.getElementById("res").innerHTML = "odd";
  }

}
