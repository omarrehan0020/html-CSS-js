document.querySelector('.container span').onclick = function getName(){
    var name = prompt('What is your Name') ;
    if (name == null || name =="")   name = "UnKnown";
    document.querySelector('.name span').innerHTML = name ;
    document.querySelector('.container ').remove();
}
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

function stopClick(){
    document.querySelector('.Blocks').classList.add('no-click');
    setTimeout(()=>{
        document.querySelector('.Blocks').classList.remove('no-click');
    },1000)
}
function match(first , second){
    var tr = document.querySelector('.tries span') ;
    if(first.getAttribute('play') == second.getAttribute('play')){
        first.classList.remove('face');
        second.classList.remove('face');
        first.classList.add('match');
        second.classList.add('match');
    }else {

        setTimeout(()=>{
            tr.innerHTML = parseInt(tr.textContent) + 1 ;
            first.classList.remove('face');
            second.classList.remove('face');
        },1000)
        
    }

}

let images = Array.from(document.querySelectorAll('.block'))

let orderArray = Array.from(images.keys());
  shuffle(orderArray);
  images.forEach((block,index)=>{
      block.style.order = orderArray[index];
      block.addEventListener('click' , () => flipBlock(block) );
  })

function flipBlock(block){
      block.classList.add('face');
      var selectedblocks = images.filter(select => select.classList.contains('face'));
      if (selectedblocks.length === 2)
      {
          //stop click
          stopClick();
          //check if two blocks are equal
          match(selectedblocks[0],selectedblocks[1]);
      }
      
}


 