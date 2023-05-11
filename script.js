const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.loginLink');
const registerLink = document.querySelector('.registerLink');
const btnPopUp = document.querySelector('.btnLoginPopup');
const iconClose = document.querySelector('.iconClose')

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active')
} )

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active')
} )

btnPopUp.addEventListener('click', () =>{
    wrapper.classList.add('activePopUp')
});

iconClose.addEventListener('click', () =>{
    wrapper.classList.remove('activePopUp')
});



