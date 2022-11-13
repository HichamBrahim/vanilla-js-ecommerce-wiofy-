export const scrolltoTop = () => {
    const popUp = document.querySelector('.scroll-to-top');
    window.addEventListener('scroll' , ()=> {
        if(window.scrollY > 510) {
            popUp.classList.add('show');
        }
        else { popUp.classList.remove('show'); }
    })
    popUp.onclick = function() {
        window.scrollTo({
            top : 0 ,
            behavior : "smooth"})
    }
    
}