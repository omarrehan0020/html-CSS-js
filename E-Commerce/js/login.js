let user = document.getElementById('user') ,
    password = document.getElementById('password') ,
    signin = document.getElementById('signin') ,
    storeduser = localStorage.getItem('user').trim(),
    storedpassword = localStorage.getItem('password');

signin.addEventListener('click' , login);

function login(e){
    e.preventDefault();
    if (password.value =="" || user.value ==""){
        alert('Please,Enter your data');
    }else {
        if (storedpassword == password.value && storeduser == user.value.trim()){
            setTimeout(()=>{
                window.location ="index.html" ;
            },1500)
        }else {
            alert('your username or password is wrong');
        }
    }
}