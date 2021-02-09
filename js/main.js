

/*------------------------about section tabs-------------------*/

(() =>{
        const aboutSection = document.querySelector(".about-section"),
        tabsContainer = document.querySelector(".about-tabs");

        tabsContainer.addEventListener("click", (event)=>{
            /*if event.target contains 'tab-item' class and not contains
            'active' class*/
            if(event.target.classList.contains("tab-item") &&
                !event.target.classList.contains("active")){
                const target = event.target.getAttribute("data-target");
                // deactivate existing active 'tab-item'
                tabsContainer.querySelector(".active").classList.remove("outer-shadow","active");
                //activate new 'tab-item'
                event.target.classList.add("active","outer-shadow");
                //deactivate existing active 'tab-content'
                aboutSection.querySelector(".tab-content.active").classList.remove("active");
                //activate new 'tab-content'
                aboutSection.querySelector(target).classList.add("active");
            }
        })
})();

/*------------------------Grab Button, click and show modal-------------------*/ 
document.getElementById('button').addEventListener('click',
function() {
    document.querySelector('.bg-modal').style.display = 'flex';
});

/*------------------------Grab Button, click and show modal-------------------*/
document.getElementById('close').addEventListener('click',
function() {
    document.querySelector('.bg-modal').style.display = 'none';
});


/*------------------------Send Email-------------------*/
function sendEmail(){
    var name = $("#name");
    var email = $("#email");
    var subject= $("#subject");
    var body= $("#body");

    if(isNotEmpty(name) && isNotEmpty(email) && isNotEmpty(subject) && isNotEmpty(body)){
        $.ajax({
            url: 'sendEmail.php',
            method: 'POST',
            dataType: 'json',
            data:{
                name: name.val(),
                email: email.val(),
                subject: subject.val(),
                body: body.val()
            }, success: function(response){
                $('#myForm')[0].reset();
                $('.sent-notification').text("Message sent successfully.");            
            }
        });
    }    
}
function isNotEmpty(caller){
    if(caller.val() == ""){
        caller.css('border','1px solid red');
        return false;
    }
    else{
        caller.css('border', '');
        return true;
    }
}