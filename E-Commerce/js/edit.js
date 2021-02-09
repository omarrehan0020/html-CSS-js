let products = JSON.parse(localStorage.getItem('products'));
let id = localStorage.getItem('edit-id');

productToEdit = products.find(item => item.id == id);

let productName = document.querySelector('#product-name'),
    productSize = document.querySelector('.product-size'),
    productSubmit = document.querySelector('#product-create'),
    productImage = document.querySelector('#product-img'),
    selectvalue ,
    imageURL,
    selectedSize = document.querySelector('.product-size');

    productName.value = productToEdit.title;
    productSize.value = productToEdit.size ;


productSize.addEventListener('change',getSizeValue);

function getSizeValue(e){
    selectvalue = e.target.value ;
}

productSubmit.addEventListener('click' , updateProduct);
productImage.addEventListener('change',uploadPhoto);

function updateProduct(e){
    e.preventDefault();
    if (productName.value == "" || selectedSize.value ==""){
        alert('Please, Enter product data') ;
        return ;
    }
    let added=[];
   productToEdit.title = productName.value;
   productToEdit.size = selectedSize.value ;
   productToEdit.url = imageURL ;

    localStorage.setItem('products' ,JSON.stringify(products)) ;
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
    
    