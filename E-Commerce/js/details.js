

if (user){
    links.style.display = 'none' ;
    profile.style.display='flex' ;
    info.innerHTML = user ;
}
logout.addEventListener('click' ,logOut);

let ut = JSON.parse(localStorage.getItem('details'));
console.log(ut);
(function setDetails(ut){
    let ux = `<div class="details">
    <img src=${ut.url} />
    <p>${ut.title}</p>
    <p>Content delivery at its finest. cdnjs is a free and open-source CDN service trusted by over </p>
    <p>${ut.size}</p>
    </div>`
    products.innerHTML = ux ;
})(ut);

