let links = document.querySelector('.links') ,
    profile = document.querySelector('.profile') ,
    info = document.querySelector('.profile a')  ,
    user = localStorage.getItem('user') ,
    logout = document.querySelector('.logout'),
    remove = document.querySelector('.actions button');
if (user){
    links.style.display = 'none' ;
    profile.style.display='flex' ;
    info.innerHTML = user ;
}
logout.addEventListener('click' ,logOut);

function logOut(e){
    e.preventDefault();
    setTimeout(()=>{
        window.location = "register.html";
        localStorage.clear();
    },1500);
}