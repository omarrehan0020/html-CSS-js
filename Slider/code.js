var ArrayItems = Array.from(document.querySelectorAll('.container .images img')),
    slide      = document.getElementById('slide1') ,
    prev = document.getElementById('prev1')
    next = document.getElementById('next1'),
    CurrentImage = 1,
    ItemsNumbers = document.getElementById('Items-number'),
    ArrayLi =[];

function SetNumsChanges(){
    ArrayLi.forEach(function(item){
        item.onclick = function(){
            CurrentImage = parseInt(item.textContent)
            SetChanges();
        }
    })
}
function SetChanges(){

    RemoveActive();

    //add text to slide
    slide.textContent = `Slide # ${CurrentImage} of ${ArrayItems.length}` ;

    //add class active to image
    ArrayItems[CurrentImage-1].classList.add('active');

    //add class active to li
    ArrayLi[CurrentImage-1].classList.add('active');

    if (CurrentImage === 5){
        next.classList.add('disabled');
    }else {
        next.classList.remove('disabled');
    }

    if (CurrentImage === 1){
        prev.classList.add('disabled');
    }else {
        prev.classList.remove('disabled');
    }


}


function RemoveActive(){
    ArrayItems.forEach(function(item){
        item.classList.remove('active');
    });
    ArrayLi.forEach(function(item){
        item.classList.remove('active');
    });
   
}

function ClickNext(){
    if (CurrentImage !== 5)
    {
        CurrentImage++ ;
         SetChanges();
    }
}
function ClickPrev(){
    if (CurrentImage !== 1)
    {
        CurrentImage-- ;
        SetChanges();
    }
}



prev.onclick = ClickPrev ;
next.onclick = ClickNext;
for (var i = 1 ;i <= ArrayItems.length ;i++){
    var listcontent = document.createElement('li');
    listcontent.setAttribute('data-item',i);
    listcontent.appendChild(document.createTextNode(i));
    ItemsNumbers.appendChild(listcontent);
    ArrayLi.push(listcontent);
}
SetNumsChanges();
SetChanges();