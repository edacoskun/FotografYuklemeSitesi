$(".textBox input").on("focus", function () {
    $(this).addClass("focus");
});

$(".textBox input").on("blur", function () {
    if ($(this).val() == "")
        $(this).removeClass("focus");
});



//form kontolü
const control = form => {
    let invalids = form.querySelectorAll(':invalid'),length,
          button = form.querySelector('button[type="submit');
    
        if(invalids == 0){
            button.removeAttribute('disabled');
        }else{
            button.setAttribute('disabled', 'disabled');
        }
}


/*
var username = document.forms['form']['username'];
var uname_error = document.getElementById['uname_error'];

var password = document.forms['form']['password'];
var passw_error = document.getElementById['passw_error'];

function validate(){
    if(username.value.length < 6){
        username.style.border = "1px solid red";
        uname_error.style.display = "block";
        username.focus();
        return false;
    }
    if(password.value.length < 8){
        password.style.border = "1px solid red";
        passw_error.style.display = "block";
        password.focus();
        return false;
    }
}
*/

