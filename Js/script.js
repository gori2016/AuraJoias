function sep(){
   let var1 = window.document.getElementById("valor1").value
   let var2 = window.document.getElementById("valor2").value


   if(var1 == ""){
    alert("escreva o seu email")
   }

   if(var2 == ""){
    alert("escreva sua senha")
   }
}

function sep2(){
   let var1 = window.document.getElementById("nome").value
   let var2 = window.document.getElementById("email").value
   let var3 = window.document.getElementById("senha").value
   let var4 = window.document.getElementById("repetirSenha").value

   if(var1 == ""){
      alert("Digite seu nome")
   } else if( var2 == ""){
      alert("Digite Seu Email")
   } else if(var3 == ""){
      alert("Digite sua Senha")
   }else if(var4 != var3){
      alert("As senhas não coincidem")
   }else{
      alert("Você está cadastrado!")
   }
}