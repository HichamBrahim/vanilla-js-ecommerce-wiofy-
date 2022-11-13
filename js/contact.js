import { removeAllClasses } from "./categories.js";

const buttons = [...document.querySelectorAll('li .btn')];
const contactList = [...document.querySelectorAll('.contact-list a')];

const contactOptions = [...document.querySelectorAll('#contact-option')];
export const contactUs = () => {
    buttons.forEach(btn => {
        btn.onclick = function() {
            removeAllClasses(buttons);
            btn.classList.add('active');
            contactOptions.forEach(contact => {
                if(contact.dataset.id == btn.dataset.id) {
                    removeAllClasses(contactOptions);
                    contact.classList.add('active');
                }
            })
        }
    })
    contactList.forEach(link => {
        link.onclick = function() {
            buttons.forEach(btn => {
                if(link.dataset.id == btn.dataset.id) {
                    btn.onclick();
                }
            })
        }
    })

}
