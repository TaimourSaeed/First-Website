//alert("welcome to the login form!");

var u_name = document.myform.u_name;
var u_pass = document.myform.u_pass;
var message = document.getElementById('message');

var userName = "taimour";
var passWord = "123456";

function runMe ()
{
    if( u_name.value == userName && u_pass.value == passWord)
    {
        console.log( "login Successful");
        alert ('Login Successful');
    }else{
       console.log( "login Failed, get the f out");
        alert ("login Failed, get the f out");
    }
}

function u_namevalidation ()
{
    if( u_name.value.length <= 3)
    {
        message.innerHTML = "need more characters";
        message.style.color = "red";
        u_name.style.color = "red";
    
    }else if(u_name.value.length <= 10)
        {
            message.innerHTML = "well done mofo";
            message.style.color = "Green";
            u_name.style.color = "green";  
        
        }else if( u_name.value.length > 10)
            {
                message.innerHTML = "computer says no";
                message.style.color = "orange";
                u_name.style.color = "orange"     
            }
    }
