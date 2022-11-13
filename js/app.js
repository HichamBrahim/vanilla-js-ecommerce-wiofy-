import Product from "./products.js";
import Navbar from "./navbar.js";
import Slider from "./slider.js";
import Timer from "./timer.js";
import Category from "./categories.js";
import { addtoCart, showCart } from "./cart.js";
import { actionFaq } from "./faq.js";
import { contactUs } from "./contact.js";
import { scrolltoTop } from "./scroll.js";
// toggle navbar
Navbar();

// toggle Cart
showCart();

// handle slider
Slider()
// timer
Timer()
// add Items to cart
addtoCart();    

// Products
await Category.render();
await Product.render();
await Category.after_render();
await Product.after_render();

//faq's
actionFaq();

//contact us
contactUs();

// scroll to the top
scrolltoTop();

// set the footer
(function setFooter() {
    const year = document.querySelector('footer .year');
    let date = new Date();
    year.innerText = date.getFullYear();
})();