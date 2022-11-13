import Product from "./products.js";
import { getCategories, getProducts } from "./request.js";

const cateContainer = document.querySelector('.cate-btns');
const categoryList = document.querySelector('.category-list');
export let filterProducts;
export function removeAllClasses(elements) {
    elements.forEach(ele => {
        ele.classList.remove('active');
    })
}
const Category = {
    render : async () => {
            let categories = await getCategories();
            cateContainer.innerHTML = categories.map(category => {
                if(category === "all") return `<li id='category' class="active" data-type='${category}'>${category}</li>`
                else return `<li id='category' data-type='${category}'>${category}</li>`
            }).join('');
            categoryList.innerHTML = categories.map(category => {
                if(category !== "all") return `<li id='category' data-type='${category}'><a href="#products">${category}</a></li>`
            }).join('');
        }
    ,
    after_render : async () => {
        const cateButtons = document.querySelectorAll('.cate-btns li');
        const listCategory = document.querySelectorAll('#category');
        let products = await getProducts();
        listCategory.forEach(category => {
            category.onclick = function() {
                cateButtons.forEach( btn => {
                    if(category.dataset.type === btn.dataset.type) {
                        removeAllClasses(cateButtons);
                        btn.classList.add('active');
                    }
                })
                if(category.dataset.type === 'all') {
                    Product.renderProducts(products);
                    filterProducts = undefined;
                }
                else {
                     filterProducts = products.filter(product => product.category === category.dataset.type);
                    Product.renderProducts(filterProducts);
                }
                Product.after_render();
            }
        })
    
     }
}
export default Category;