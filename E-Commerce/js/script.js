let products =document.querySelector('.products');
    let productItems =[
        {
            title: "head phone" ,
            url: "images/headphone.jpg",
            id: 1 ,
            size: "large",
            qnt: 0,
            isMe: 'N',

        },
        {
            title: "chair" ,
            url: "images/chair.webp",
            id: 2 ,
            size: "small",
            qnt: 0,
            isMe: 'N',
        },
        {
            title: "labtop" ,
            url: "images/lab.jpg",
            id: 3 ,
            size: "large",
            qnt: 0,
            isMe: 'N',
        },
        {
            title: "iphone" ,
            url: "images/iphone.jpg",
            id: 4 ,
            size: "large",
            qnt: 0,
            isMe: 'N',
        }
    ];
    
    if (localStorage.getItem('products')){
        productItems = JSON.parse(localStorage.getItem('products'));
    }else {
        localStorage.setItem('products' ,JSON.stringify(productItems));
    }
    function drawItems(productItems){
        let productIt = productItems.map((item)=>{
            return `
            <div class="product-item" style="border: ${item.isMe =='Y' ? "2px solid green" : ""}">
                <div class="item-img">
                    <img src=${item.url} alt=${item.title} />
                </div>
                <div class="info">
                    <h2 onclick=details(${item.id})>${item.title}</h2>
                    <p>Content delivery at its finest.  cdnjs is a free and open-source CDN service trusted by over </p>
                    <span>Size:${item.size} </span>
                </div>
                ${item.isMe =='Y' ? '<button class="edit" onclick="edi(' + item.id + ')">Edit</button>' :''}
                <div class="actions">
                    <button class="add-to-cart" onclick="checkUserfound(${item.id})">Add to Cart</button>

                    <i class="far fa-heart" onclick="checkUserFound(${item.id})" style="color:${item.liked == true ? "red" : ""}"></i>
                </div>
            </div>
            `
        });
        products.innerHTML = productIt.join("")  ;

    };

    function checkUserFound(id){
        if (localStorage.getItem('user')){
            AddToFavourite(id)
        }else {
            window.location = 'login.html';
        }
    }

    

   drawItems(productItems);
   
  
function details(id){
    let it = productItems.find(item => item.id === id) ;
    localStorage.setItem('details' ,JSON.stringify(it));
    window.location = 'details.html';
}

let input = document.querySelector('.container > input');
input.addEventListener('keyup',(e)=>{
        drawItems(search(input.value.trim() ,productItems));
})

function search(title,arr){
    if (title ==''){
        return productItems ;
    }
    let newarr = arr.filter(item => item.title.indexOf(title) != -1);
    return newarr ;
}



let favourite = document.querySelector('.actions i') ;

function AddToFavourite(id){
    let chosenItem ;
    if (localStorage.getItem('ItemsInFavourite'))
    {
        let  chosenItems = JSON.parse(localStorage.getItem('ItemsInFavourite')) ;
        chosenItem = chosenItems.find((item)=> item.id == id) ;
    }   
   if (chosenItem){
       return;
   }else {
    chosenItem = productItems.find((item)=> item.id == id);
    chosenItem.liked = true ;
    
    localStorage.setItem('products' ,JSON.stringify(productItems));
    let favouriteItems = JSON.parse(localStorage.getItem('ItemsInFavourite'));
    let added =[];
    if (favouriteItems){
         added = [...favouriteItems ,chosenItem] ;
    }
    else {
       added.push(chosenItem);
    }
    localStorage.setItem('ItemsInFavourite' ,JSON.stringify(added)) ;
    drawItems(productItems);
   }
}

    


let plus = document.querySelector('.newProduct') ;
plus.addEventListener('click',getCreateProductPage);

function getCreateProductPage(){
    window.location = "createProduct.html" ;
}


/* ******* filter ******/

let filtering = document.querySelector('.content select');
filtering.addEventListener('change',filterProductsBySize);

function filterProductsBySize(){
    if (filtering.value == 'all'){
        drawItems(productItems);
    }
    else {
        let prods = productItems.filter(item => item.size == filtering.value);
        drawItems(prods) ;
    }
}
function edi(id){
    localStorage.setItem('edit-id' , id);
    setTimeout(()=>{
        window.location ='edit.html';
    },500);
}



