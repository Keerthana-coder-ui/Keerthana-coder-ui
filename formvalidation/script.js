const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");


String.prototype.isEmail = function() {
    return !!this.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
}


String.prototype.isAlpha = function() {
    return !!this.match(/^[a-zA-Z]+$/);
}

function checkRequired(inputs){   // step2 create what checkrequired function should do
    inputs.forEach((input) => {
        if(input.value.trim()=== "") {
          //error
          errorInput(input, `${getName(input)} is Required`);  //step4
        }else{
            //success
            successInput(input);
        }
    });
}

function getName(input){
    return input.id;
}
 function errorInput(input,message){// step 3
 const formGroup= input.parentElement;
 formGroup.className = "form-group error";
 const p = formGroup.querySelector("p");
 p.innerHTML = message ; 
 }


 function successInput(input){
  const formGroup= input.parentElement;
  formGroup.className = "form-group success";
  const p=formGroup.querySelector("p");
  p.innerHTML ="";
 } 

 //step 1 create event
function checkLength(input, min, max){
    const data= input.value.trim().length;
    if(data < min){
        errorInput(input, `${getName(input)} must be atleast greater than ${min} characters`)

    }else if(data > max){
        errorInput(input, `${getName(input)} must be atleast greater than ${max} characters`)

    }else{
        successInput(input);
    }
}
function checkConfirmPassword(password, password2)
{
   if(password.value != password2.value) {
    errorInput(password2, `Confim password Does not match`);
   }
}

function checkEmail(input){
    if(!input.value.trim().isEmail()) {
        errorInput(input, `This is not an valid email`);
    }
}

function checkAlpha(input){
    if(!input.value.trim().isAlpha()) {
        errorInput(input, `${getName(input)} Must be in Alphabets`);
    }
}



form.addEventListener("submit", function(e)
{e.preventDefault(); // must call this function
    checkRequired([username, email, password, password2]); // create function for after subbiting form i want error message which i didnt fill the boxes
    checkLength(username, 5, 10);
    checkLength(password, 5, 10 );
    checkConfirmPassword(password, password2); // write func for this seperatly
    checkEmail(email);
    checkAlpha(username);

});


















