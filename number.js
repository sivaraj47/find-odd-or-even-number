function addevn(){
let numb = Number(document.getElementById("inP").value);

  if(numb % 2 == 0){
    document.getElementById("res").innerHTML = `The ${numb} is Even`;    
  } else{
    document.getElementById("res").innerHTML = `"The ${numb} is odd`;
  }

}
