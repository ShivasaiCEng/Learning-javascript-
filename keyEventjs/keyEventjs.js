let username=document.querySelector("#name");
let password=document.querySelector("#password");
let form=document.querySelector("form");
form.addEventListener("submit", function(event){
event.preventDefault();
// console.log(username.value);
// console.log(password.value);
alert(`hi ${username.value} your password is ${password.value}`);
});

