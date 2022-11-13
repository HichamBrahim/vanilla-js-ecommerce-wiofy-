
export const setStorage = (Cart) => {
    window.localStorage.setItem('cart' , JSON.stringify(Cart));
}
export const getStorage = () => {
    let Cart = window.localStorage.getItem('cart') ? JSON.parse(window.localStorage.getItem('cart')) : [] ;
    return Cart;
}