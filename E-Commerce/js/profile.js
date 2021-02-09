let user_name = document.querySelector('.user-name span'),
    email = document.querySelector('.email span'),
    pro = document.querySelector('.productadded span');

    let AllItems = JSON.parse(localStorage.getItem('products'));
    let my = AllItems.filter(it => it.isME == 'Y') ;

    user_name.innerHTML =localStorage.getItem('user') ;
    email.innerHTML = localStorage.getItem('email');
    pro.innerHTML = my.length ;
    


   let im = document.querySelector('.avatar img') ;
   im.setAttribute('src' ,localStorage.getItem('profile-url'));