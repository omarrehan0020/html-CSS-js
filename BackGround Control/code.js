var el = document.querySelectorAll('.container .switch li')
var list=[] ;
document.body.classList.add(localStorage.getItem('page-color') || red)
for (var i=0 ;i < el.length ;i++){
    list.push(el[i].getAttribute('data-color')) ;
    el[i].addEventListener('click' ,function(){
        document.body.classList.remove(...list) ;
        document.body.classList.add(this.getAttribute('data-color'));
        localStorage.setItem('page-color' , this.getAttribute('data-color'))
    },false)
}