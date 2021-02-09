let 
    numberofitems = document.querySelector('.cart span'),
    
    view = document.querySelector('.chosen-items span'),
    shoppingicon = document.querySelector('.shop');

    let 
    chosenItems = document.querySelector('.titles'),
    chosen = document.querySelector('.chosen-items');


function checkUserfound(id){
    if (localStorage.getItem('user')){
        AddToCart(id)
    }else {
        window.location = 'login.html';
    }
}
 let added = JSON.parse(localStorage.getItem('ItemsInCart')) || [];
function AddToCart(id){
    let chosenItem ;
    if (localStorage.getItem('ItemsInCart'))
     {chosenItem = JSON.parse(localStorage.getItem('ItemsInCart')).find((item)=> item.id == id) ||productItems.find((item)=> item.id == id);}
   else {
       chosenItem = productItems.find((item)=> item.id == id);
   }
     chosenItem.qnt++ ;
    
    added = added.filter(item => item.id != id) ;
    added.push(chosenItem);
    let t = document.querySelectorAll(`.item${id}`);
    let sp = document.querySelector(`.item${id} span`);
    if (t.length > 0){
        sp.innerHTML = chosenItem.qnt ;

    }else {
        chosenItems.innerHTML += `<div class="item${id}">
                                <p> ${chosenItem.title}</p>
                                 <span></span>
                                </div>` ;
        let sp = document.querySelector(`.item${id} span`);
        sp.innerHTML = chosenItem.qnt ;
    }
   
    let n = document.querySelectorAll('.titles p').length ;
    numberofitems.innerHTML = n ;
    localStorage.setItem('ItemsInCart',JSON.stringify(added));
}
shoppingicon.addEventListener('click',()=>{
    let n = document.querySelectorAll('.titles p').length ;
    if (chosen.style.display =='none' && n != 0){
        chosen.style.display = 'block' ;
    }else {
        chosen.style.display = 'none' ;
    }
});
view.addEventListener('click',()=>{
    window.location = 'shoping.html';
});

if (localStorage.getItem('ItemsInCart')){
    let items = JSON.parse(localStorage.getItem('ItemsInCart'));
    items = Array.from(items);
    
    items.forEach(element => {
        SetToCart(element);
    });

}

function SetToCart(chosenItem){

    let t = document.querySelectorAll(`.item${chosenItem.id}`);
    let sp = document.querySelector(`.item${chosenItem.id} span`);
    if (t.length > 0){
        sp.innerHTML = chosenItem.qnt ;
    }else {
        chosenItems.innerHTML += `<div class="item${chosenItem.id}">
                                <p> ${chosenItem.title}</p>
                                 <span></span>
                                </div>` ;
        let sp = document.querySelector(`.item${chosenItem.id} span`);
        sp.innerHTML = chosenItem.qnt ;
    }
    chosenItem.qnt++ ;
    let n = document.querySelectorAll('.titles p').length ;
    numberofitems.innerHTML = n ;
}