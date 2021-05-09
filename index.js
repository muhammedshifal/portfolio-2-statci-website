
var typed = new  Typed(".typing", {
    strings:["Web Designer", "Web Developer","UI / UX Designer", "Video Editor"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});


$(document).ready(function(){
    $('#contactme-section').validate({
        rules:{
            fname:{
                required:true,
                minlength:4
            },
            emailaddress:{
                required:true,
                type:true
            },
            contactnumber:{
                required:true,
                minlength:10
                
            },
            textarea:{
                required:true,
                type:true
            }        
        },
        messages:{
            fname:{
                required: "Please specify your name",
                minlength:"Enter atleast 4 character",
            },
            submit:{
                required:true,
                type:true
            }

        }    
    })
    
})