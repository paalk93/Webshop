
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "hei123" && password == "lol456"){
alert ("Welcome " + username);
  window.location ="user.html";
}
 else{
   alert("Wrong login")
 }
}
