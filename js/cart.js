import {alert} from "./alerts.js";
import { filterProducts } from "./categories.js";
import Product from "./products.js";
import { getProducts } from "./request.js";
import { getStorage, setStorage } from "./storage.js";

const shoppingCart = document.querySelector('.shopping-cart');
const cartContainer = document.querySelector('.cart-container');
const closeCart = document.querySelector('.close');
const cartDom = document.querySelector('.cart');
const numberProducts = document.querySelector('.number-products');

let Cart = [];


export const showCart = () => {
    shoppingCart.onclick = function() {
        cartContainer.classList.add('active');
    }
    closeCart.onclick = function() {
        cartContainer.classList.remove('active');
    }
}

export const handleCart =  async(id) => {
    let products = await getProducts();
    let Cart = getStorage();
    let item = products.find(product => product.id == id);
    Cart.push({...item , qty:1 , update: true});
    setStorage(Cart);
     addtoCart();
}
export const addtoCart =  () => {
    let Cart = getStorage();
    cartDom.innerHTML = Cart.length === 0 ? `<div class="message">There is nothing added in your cart.</div>` :
    `<main class="cart-items"> ${Cart.map(item => {
        const {desc , id , img , price , qty , title} = item;
        return `
        <div class="item">
            <div class="cart-infos">
                <img src="${img}" alt="${title}">
                <div class="cart-content">
                    <h4>${title}</h4>
                    <p>${desc}</p>
                    <div class="cart-update">
                        <button class="decrease" onclick='decrement(${id})'><i class="fa-solid fa-minus"></i></button>
                        <span class="qty-number">${qty}</span>
                        <button class="increase" onclick='increment(${id})'><i class="fa-solid fa-plus"></i></button>
                    </div>
                </div>
            </div>
        <span class="price">$${price}</span>
    </div>
        `;
    }).join('')}</main>
                        <footer class="cart-details">
                            <div class="total-price">
                                <span class="ft-tx">Total Price:</span>
                                <span class="total">$${Cart.reduce((acc , cur) => acc + cur.price * cur.qty , 0)}</span>
                            </div>
                            <div class="total-products">
                                <span class="ft-tx">Product Quantity:</span>
                                <span class="number">${Cart.reduce((acc , cur) => acc + cur.qty , 0)} products</span>
                            </div>
                        </footer>
    `
    numberProducts.innerHTML = `Cart(${Cart.length})`;
}

 const increment =  async(id) => {
        let products = await getProducts();
        let Cart = getStorage();
        let message = 'Added to your cart!';
        let classeName = 'fa-solid fa-check';
        alert(message , 'plus' , classeName);
        let item = Cart.find(x => x.id == id);
        item.qty++;
        window.localStorage.setItem('cart' , JSON.stringify(Cart));
        addtoCart();
        filterProducts ?  Product.renderProducts(filterProducts) :  Product.renderProducts(products);
        Product.after_render();
        }

     const decrement =  async(id) => {
        let products = await getProducts();
        let Cart = getStorage();
        let item = Cart.find(x => x.id == id);
        if(item.qty > 1) {
            item.qty--;
            let message = 'Number of products has been decreased!';
            let classeName = 'fa-solid fa-circle-exclamation';
            alert(message , 'minus' , classeName);
        }
        else {
            Cart = Cart.filter(cartItem => cartItem.id != id);
            let message = 'Removed from your cart!';
            let classeName = 'fa-regular fa-trash-can';
            alert(message , 'remove' , classeName);
        }
        window.localStorage.setItem('cart' , JSON.stringify(Cart));
        addtoCart();
        filterProducts ?  Product.renderProducts(filterProducts) :  Product.renderProducts(products);
        Product.after_render();
    }

window.increment = increment;
window.decrement = decrement;



