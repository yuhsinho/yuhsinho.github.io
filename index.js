// Show or hide the backToTop button based on scroll position.
window.onscroll = function() { onScroll() };

/** Get the header. */
const header = document.getElementById('header');
const sticky = header.offsetTop;

/** Get the back to top button. */
const backToTopBtn = document.getElementById("backToTop");

/** When the user scrolls the page, update header and button styles. */
function onScroll() {  
    setSticky();
    showTopButton();
}

/** Set sticky header on scroll. */
function setSticky() {
    window.pageYOffset > sticky ? header.classList.add('sticky') : header.classList.remove('sticky');
}

/** When the user scrolls down 20px from the top of the document, show the button. */
function showTopButton() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        // backToTopBtn.classList.add('show');
        backToTopBtn.style.display = "block";
    } else {
        // backToTopBtn.classList.remove('show');
        backToTopBtn.style.display = "none";
    }
}

/** When the user clicks on the button, scroll to the top of the document. */
function backToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}