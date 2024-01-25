const formOpenBtn = document.querySelector("#form-open"),
togglebtn = document.getElementById("nav-toggle"),
navlinks = document.getElementById("nav_links"),
home = document.querySelector(".home"),
formContainer = document.querySelector(".form_container"),
formCloseBtn = document.querySelector(".form_close"),
signupBtn = document.querySelector("#signup"),
loginBtn = document.querySelector("#login"),
pwShowHide = document.querySelectorAll(".pw_hide");

togglebtn.addEventListener("click", () => {
    navlinks.classList.toggle("active");
})

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

pwShowHide.forEach(icon =>{
   icon.addEventListener("click", () =>{
    let getPwInput = icon.parentElement.querySelector("input");
    if(getPwInput.type==="password"){
        getPwInput.type="text";
        icon.classList.replace("uil-eye-slash","uil-eye");
    }else{
        getPwInput.type="password";
        icon.classList.replace("uil-eye","uil-eye-slash");
    }
   }) 
})
function func(){
    var email=document.getElementById('username').value;
    var password=document.getElementById('password').value;

    if(email=='abc@gmail.com'&& password=='12345'){
        window.location.assign('index.html');
        alert("Successful Login!");
    }
    else{
        alert("Wrong entry Invalid");
    }
}
function functi(){
    alert("SignUp Successfully");
}

signupBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    formContainer.classList.add("active");
})
loginBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    formContainer.classList.remove("active");
})