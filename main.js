import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

console.log('Hello world');



const loginArea = document.getElementById('login-area');
const registerArea = document.getElementById('register-area');
const goRegister = document.getElementById('go-register');
const goLogin = document.getElementById('go-login');
const loginSubmitBtn = document.getElementById('login-submit-btn');
const regSubmitBtn = document.getElementById('reg-submit-btn');
const userIcon = document.getElementById('user-icon');
const loginIcon = document.getElementById('login-icon');


goRegister.addEventListener("click", function(e){
    console.log('前往註冊頁')
    loginArea.classList.add("d-none")
    loginArea.classList.remove("d-block")
    registerArea.classList.add("d-block")
    registerArea.classList.remove("d-none")
})

goLogin.addEventListener("click", function(e){
    console.log('前往登入頁')
    loginArea.classList.add("d-block")
    loginArea.classList.remove("d-none")
    registerArea.classList.add("d-none")
    registerArea.classList.remove("d-block")
})


// window.addEventListener("DOMContentLoaded", function() {
//     if (localStorage.getItem("loggedIn") === "true") {
//         userIcon.classList.remove("d-none");
//         userIcon.classList.add("d-block");
//         loginIcon.classList.remove("d-block");
//         loginIcon.classList.add("d-none");
//     }
// });


const closeBtn = document.querySelector('[data-bs-dismiss="modal"]');

loginSubmitBtn.addEventListener("click", function(e){
    e.preventDefault(); 
    console.log('送出中...');
    
    if (closeBtn) {
        closeBtn.click();
    }

    userIcon.classList.remove('d-none')
    userIcon.classList.add('d-block')
    loginIcon.classList.add('d-none')
    loginIcon.classList.remove('d-block')

    // localStorage.setItem("loggedIn", "true");
});

regSubmitBtn.addEventListener("click", function(e){
    e.preventDefault(); 
    console.log('送出中...');
    
    if (closeBtn) {
        closeBtn.click();
    }

    userIcon.classList.remove('d-none')
    userIcon.classList.add('d-block')
    loginIcon.classList.add('d-none')
    loginIcon.classList.remove('d-block')

    // localStorage.setItem("loggedIn", "true");
});

