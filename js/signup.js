$(".text-box input").on("focus", function () {
    $(this).addClass("focus");
});

$(".text-box input").on("blur", function () {
    if ($(this).val() == "")
        $(this).removeClass("focus");
});


function control(formId) {
    let invalids = document.getElementById(formId).querySelectorAll(':invalid').length,
        button = document.getElementById(formId).querySelector('button[type="submit"]');

    if(invalids == 0){
        button.removeAttribute('disabled');
    }else{
        button.setAttribute('disabled', 'disabled');
    }
}
conrtol(form);