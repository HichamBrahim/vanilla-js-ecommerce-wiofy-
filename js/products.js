import { getProducts } from "./request.js";
import { handleCart} from "./cart.js";
import { getStorage } from "./storage.js";
import {alert} from "./alerts.js";


const productList = document.querySelector('.products-list');
const Product = {
    render : async () => {
            let products = await getProducts();
            Product.renderProducts(products);     
        }
        ,
        renderProducts : async(products) => {
            let Cart = getStorage();
            productList.innerHTML =  products.map(product => {
                let check = Cart.find(x=> x.id == product.id);
                
                return `
                        <div class="product" data-type='${product.category}'>
                            <img src="${product.img}" alt="${product.title}">
                            <div class="product-infos">
                                <h4 id="name">${product.title}</h4>
                                <span id="desc">${product.desc}</span>
                                <strong id="price">$${product.price}</strong>
                            </div>
                            <div class='product-action'>
                                ${check ? (`${check.update ? `
                                <div class="cart-update">
                                    <button class="decrease" onclick='decrement(${check.id})' ><i class="fa-solid fa-minus"></i></button>
                                    <span class="qty-number">${check.qty}</span>
                                    <button class="increase" onclick='increment(${check.id})' ><i class="fa-solid fa-plus"></i></button>
                                </div> 
                                ` : `<button class="add-to-cart" data-id='${product.id}'><h4>Add to Cart</h4></button>`}`) : `<button class="add-to-cart" data-id='${product.id}'><h4>Add to Cart</h4></button>`}
                            </div>
                        </div>
                `
            }).join('');   
        }
        ,
        after_render : async () => {
            const addtoCart = document.querySelectorAll('.add-to-cart');
            addtoCart.forEach(addBtn => {
                addBtn.onclick = function() {
                    let id = addBtn.dataset.id;
                    addBtn.parentElement.innerHTML = `
                    <div class="cart-update">
                        <button class="decrease" onclick='decrement(${id})'><i class="fa-solid fa-minus"></i></button>
                        <span class="qty-number">1</span>
                        <button class="increase" onclick='increment(${id})'><i class="fa-solid fa-plus"></i></button>
                    </div>
                    `
                    handleCart(id);
                    let message = 'Your shopping cart updated!';
                    let classeName = 'fa-regular fa-pen-to-square';
                    alert(message , 'add' , classeName);
                }
            })
            
        }

}

export default Product;
