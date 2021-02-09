let products = document.querySelector('.products'),
    noproduct = document.querySelector('.noproducts');
if (localStorage.getItem('ItemsInFavourite')){
    let items = JSON.parse(localStorage.getItem('ItemsInFavourite'));
    drawItems(items);
}


function drawItems(productItems){
    if(productItems.length == 0 ){
        noproduct.innerHTML = 'No Favourites To Show' ;
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
                <button class="remove-from-favourite" onclick="removee(${item.id})">Remove</button>
                
            </div>
        </div>
        `
    });
    products.innerHTML = productIt.join("") ;

};

function removee(id){
    let items = localStorage.getItem('ItemsInFavourite');
    let products = JSON.parse(items);
    let it = products.find(itt => itt.id == id);
    it.liked = false ;
    let all = JSON.parse( localStorage.getItem('products'));
    itr = all.find(item => item.id == id);
    itr.liked = false ;
    localStorage.setItem('products' ,JSON.stringify(all)) ;
    

    items = products.filter(item => item.id !=id) ;
    localStorage.setItem('ItemsInFavourite',JSON.stringify(items));
    drawItems(items);
}