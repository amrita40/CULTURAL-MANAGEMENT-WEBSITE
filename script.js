let users = {
   username:"taloxy@nitkkr", password:"12345",
};

function validate(){
var username = document.forms['login_form']['user'].value;
var pass = document.forms['login_form']['password'].value;

if(username.length < 5)
{
alert("username invalid!")
return false;
}
if(username != users.username)
{
alert("Not a valid user")
return false;
}
if(pass != users.password)
{
alert("Invalid password!")
return false;
}
else if(username == users.username && pass == users.password)
{
 alert("Login Successful");
 location.href = '../contentLogin/content.html';

}
// console.log(username);
// console.log(pass);
return false;
}