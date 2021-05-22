
var typed = new  Typed(".typing", {
    strings:["Web Designer", "Web Developer","UI / UX Designer", "Video Editor"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
$(document).ready(function(){
    $('#signupform').validate({
        rules: {
            name: "required",
            subject: "required",
            email: {
                required: true,
                email: true
            },
            message: {
                required: true,
                minlength: 5
            }
        },
        messages: {
            name: "Please enter your name",
            subject: "Please enter your subject",
            email: "Please enter a valid email address",
            message: "Please enter a message"
        }, 
    })
    
})
/* submit via ajax */

$("#signupform").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbzkLUpIRORcDXBieTFN2YbfIJ7zQAJuKGd1BW-j/exec",
        data:$("#signupform").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})

