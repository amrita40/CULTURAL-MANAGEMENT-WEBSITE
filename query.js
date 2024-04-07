// var x = document.getElementById("username");

let users = {
    username:"ashwani@nift", password:"12345"
};

function queryDisplay(){

var username = document.forms['query_form']['user'].value;
var query = document.forms['query_form']['query'].value;

if(username != users.username)
{
alert("Invalid Username!")
return false;
}
if(query.length == 0)
{
alert("Enter Query")
return false;
}

else
{
console.log();
alert("Query Submitted Successfully")
}

return false;
}