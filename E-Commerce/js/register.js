let user = document.getElementById('user') ,
    password = document.getElementById('password') ,
    email = document.getElementById('email') ,
    signup = document.getElementById('signup') ;

signup.addEventListener('click' , register);

function register(e){
    e.preventDefault();
    if (password.value =="" || email.value =="" || user.value ==""){
        alert('Please,Enter your data');
    }else {
        localStorage.setItem('user' , user.value);
        localStorage.setItem('password' , password.value);
        localStorage.setItem('email' , email.value);
        setTimeout(()=>{
            window.location = "login.html" ;
        },1500)
    }
}