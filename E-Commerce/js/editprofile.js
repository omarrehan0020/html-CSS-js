


let usernameField = document.querySelector('.pro-user'),
    emailField = document.querySelector('.pro-email'),
     myPicture = document.querySelector('#product-img') ,
     imageURL ;


    usernameField.value  = localStorage.getItem('user') ;
    emailField.value = localStorage.getItem('email') ;

    myPicture.addEventListener('change' ,uploadPhoto);

    function uploadPhoto(){
        let file = this.files[0] ;
        let types =["image/jpeg","image/png"];
        if (types.indexOf(file.type) == -1){
            alert('You should upload an image');
            return
        }
        getImageBase64(file);
    
    }
    function getImageBase64(file){
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = ()=>{
            imageURL = reader.result ;
            
        }
        reader.error =()=>{
         alert('Error !!!');
        }
    }

    let sub = document.querySelector('#edit') ;
    sub.addEventListener('click' ,editprofile);

    function editprofile(e){
        e.preventDefault();
        localStorage.setItem('user',usernameField.value);
        localStorage.setItem('email',emailField.value);
        localStorage.setItem('profile-url' ,imageURL);
        setTimeout(()=>{
           window.location = 'profile.html' ;
        },500);
    }



    