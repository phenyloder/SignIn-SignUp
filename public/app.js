const sign_in_btn = document.querySelector('#sign-in-btn');
const sign_up_btn = document.querySelector('#sign-up-btn');
const container = document.querySelector('.container');
const regUsername = document.querySelector('.register-username');
const regMail = document.querySelector('.register-email');
const regPassword = document.querySelector('.register-password');
const subBtn = document.querySelector('.submit-btn');
const title = document.querySelector('title');

sign_up_btn.addEventListener('click', ()=>{
    title.innerHTML = "Sign Up";
    container.classList.add("sign-up-mode");
})

sign_in_btn.addEventListener('click', ()=>{
    title.innerHTML = "Sign In";
    container.classList.remove("sign-up-mode");
})

subBtn.addEventListener('click', ()=>{
    if(regUsername.value<5)
    {

    }
})