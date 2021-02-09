let products = document.querySelector('.products'),
    noproduct = document.querySelector('.noproducts');

let AllItems = JSON.parse(localStorage.getItem('products')) ;
let myItems = AllItems.filter(it => it.isMe =='Y') ;



function drawItems(productItems){
    if(productItems.length == 0 ){
        noproduct.innerHTML = 'No Products To Show' ;
        products.innerHTML='';
        return ;
    }
    let productIt = productItems.map((item)=>{
        return `
        <div class="product-item">
            <div class="item-img">
                <img src=${item.url} alt=${item.title} />
            </div>
            <div class="info">
                <h2 onclick=details(${item.id})>${item.title}</h2>
                <p>Content delivery at its finest.  cdnjs is a free and open-source CDN service trusted by over </p>
                <span>Size:${item.size} </span><br>
                <span>Quantity:${item.qnt} </span>
                
            </div>
            <div class="actions">
                <button class="edit" onclick="Edit(${item.id})">Edit</button>
            </div>
            <div class="actions">
                <button class="remove" onclick="removee(${item.id})">Remove</button>
            </div>
        </div>
        `
    });
    products.innerHTML = productIt.join("")  ;

};
drawItems(myItems);

function Edit(id){
    localStorage.setItem('edit-id' , id);
    setTimeout(()=>{
        window.location ='edit.html';
    },500);
}

function removee(id){
    let products = AllItems.filter(item => item.id !== id);
    localStorage.setItem('products' ,JSON.stringify(products)) ;
    let myItems = products.filter(it => it.isMe =='Y') ;
    drawItems(myItems);
}