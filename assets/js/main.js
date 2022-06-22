// ---------------------------------------------------------------- Mobile menu toggle -------------------------------- //

const sidebar = document.querySelector('.navbar-burger');
sidebar.querySelector('.blocker').onclick = hide;

function show() { // swipe right
    sidebar.classList.add('visible');
    document.body.style.overflow = 'hidden';
}

function hide() { // by blocker click, swipe left, or url change
    sidebar.classList.remove('visible');
    document.body.style.overflow = '';
}

function toggle() {
    sidebar.classList.contains('visible') ? hide() : show();
}

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// ---------------------------------------------------------------- Reusing email HTML -------------------------------- //

/* Reusing email HTML in the #highlight div */
function getEmailHTML() {
    const emailForm = document.getElementById("contact-me");
    
}


// ---------------------------------------------------------------- Header follow scrolll -------------------------------- //

// When the user scrolls the page, execute headerScroll()
window.onscroll = function() {headerScroll()}

//Get the header 
const header = document.getElementById("header")

//Get the offset position of the navbar
const sticky = header.offsetTop;

//Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function headerScroll() {
    if(window.pageYOffset > sticky){
        header.classList.add("sticky")
    } else {
        header.classList.remove("sticky")
    }
}

/**
   * Skills animation
   */
 let skillsContent = select('.skills-content');
 if (skillsContent) {
   new Waypoint({
     element: skillsContent,
     offset: '80%',
     handler: function(direction) {
       let progress = select('.progress .progress-bar', true);
       progress.forEach((el) => {
         el.style.width = el.getAttribute('aria-valuenow') + '%'
       });
     }
   })
 }