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

/*------------------------Close Modal Clicking on X-------------------*/
document.getElementById('close').addEventListener('click',
function() {
document.querySelector('.bg-modal').style.display = 'none';
});

/*------------------------Close Modal clicking outside-------------------*/ 
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}