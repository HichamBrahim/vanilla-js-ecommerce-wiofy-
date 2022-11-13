const menu = document.querySelector('.menu');
const navContainer = document.querySelector('.header-nav');
const iconOne = document.getElementById('toggle-icon-one')
const productLink = document.getElementById('product-link');
const iconTwo = document.getElementById('toggle-icon-two')
const contactLink = document.getElementById('contact-link');

// add action to menu
function Navbar() {
    menu.onclick = function() {
        navContainer.classList.toggle('active');
    }
    // add action to links
    iconOne.onclick = function() {
        productLink.classList.toggle('active');
        contactLink.classList.remove('active');
    
    }
    iconTwo.onclick = function() {
        contactLink.classList.toggle('active');
        productLink.classList.remove('active');
    }
}
export default Navbar;