function validate(){
    
    function validate()
{
    var firstname=document.getElementById("firstname").value;
    var middleName=document.getElementById("middleName").value;
    var lastName=document.getElementById("lastName").value;
    var mobile=document.getElementById("mobile").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var confirmpassword=document.getElementById("confirmpassword").value;

    

    var mobileRegex=/^[6-9]\d{9}/;
    var applymobile=mobileRegex.test(mobile);

    var emailRegex=/^[a-z0-9][^A-Z]{5,10}/;
    var applytoemail=emailRegex.test(email);
    
    var passwordRegex=/[0-9]/
    var applytopassword=passwordRegex.test(password);

   if(firstname=="")
   {
       document.getElementById("validatename").innerHTML="Enter valid name";
       return false;
   }
   if(lastName=="")
   {
       document.getElementById("validatelastname").innerHTML="Enter valid lastname";
       return false;
   }

   if(mobile!="")
   {
        if(applymobile==false)
        {
            document.getElementById("validatemobile").innerHTML="Enter valid mobile";
            return false;
        }
    }
   if(email==""|applytoemail==false)
   {
    document.getElementById("validateEmail").innerHTML="Enter valid email address";
    return false;
   }
   if(password==""|applytopassword==false)
   {
    document.getElementById("validatePassword").innerHTML="Enter vaild password";
    return false;
   }
  if(confirmpassword!=password|confirmpassword=="")
    {
        document.getElementById("validateConfirmPassword").innerHTML="Password Mismatch";
        return false;
    }

   let person=new Person();

   person.firstName=firstname;
   person.middleName=middleName;
   person.lastName=lastName;
   person.mobile=mobile;
   person.email=email;

   console.log(JSON.stringify(person));
   window.location="index.html"


}



class Person{
    constructor()
    {
        this.firstName="";
        this.middleName="";
        this.lastName="";
        this.mobile="";
        this.email="";
    }
}
}