


let productName = document.querySelector('#product-name'),
    productSize = document.querySelector('.product-size'),
    productSubmit = document.querySelector('#product-create'),
    productImage = document.querySelector('#product-img'),
    selectvalue ,
    imageURL,
    selectedSize = document.querySelector('.product-size');

productSize.addEventListener('change',getSizeValue);

function getSizeValue(e){
    selectvalue = e.target.value ;
}

productSubmit.addEventListener('click' , createNewProduct);
productImage.addEventListener('change',uploadPhoto);

function createNewProduct(e){
    let data1 = JSON.parse(localStorage.getItem('products')) ;
    e.preventDefault();
    if (productName.value == "" || selectedSize.value ==""){
        alert('Please, Enter product data') ;
        return ;
    }
    let added=[];
    let obj ={
            title: productName.value ,
            url: imageURL,
            id:  data1.length + 1 || 1,
            size: productSize.value,
            qnt: 0,
            isMe: 'Y',
    }
    added=[...data1,obj] ;
    localStorage.setItem('products' ,JSON.stringify(added)) ;
    productName.value= "" ;
    productImage.value ="";
    selectedSize.firstElementChild.setAttribute('selected',true) ;
    setTimeout(()=>{
        window.location ="index.html";
    },1500);
    
}

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
        console.log(imageURL);
    }
    reader.error =()=>{
     alert('Error !!!');
    }
}
    