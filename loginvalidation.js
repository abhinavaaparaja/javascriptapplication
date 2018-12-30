function loginValidate()
{
    
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;

    if(email==""|email!="user@gmail.com")
    {
        document.getElementById("loginEmail").innerHTML="Incorrect email";
        return false;
    }
    if(password==""|password!="123456")
    {
        document.getElementById("loginPassword").innerHTML="Incorrect password";
        return false;
    }

}