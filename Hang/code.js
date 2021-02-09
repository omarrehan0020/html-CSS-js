var charContent = document.querySelector('.chars') ,
    letters ='abcdefghijklmnopqrstuvwxyz',
    letterArray = Array.from(letters) ,
    flag = false ,
    wrong = 0 ,
    drawing = document.querySelector('.draw');


letterArray.forEach(letter =>
    {
        var sp = document.createElement('span');
        sp.className ="letter-box";
        sp.appendChild(document.createTextNode(letter));
        charContent.appendChild(sp);
    });


let words = {
    people: ["James","John","Richard","Anthony","Steven","Benjamin Katherine","Dennis","Tyler","Christian"],
    movies:["inception","focus","preson break" ,"breaking bad" ,"silence"],
    programming:["java script","php","python" ,"machine learning"],
    teams:["zamalek" ,"real madrid" ,"man united","spurs"],
}

var props = Object.keys(words) ,
    randompropindex = Math.floor(Math.random() * props.length),
    randompropvalue = props[randompropindex] ,
    values = words[randompropvalue] ,
    randomvalueindex = Math.floor(Math.random() * values.length),
    randomvaluevalue = values[randomvalueindex].toLowerCase() ,
    word = Array.from(randomvaluevalue);


    document.querySelector('.from span').appendChild(document.createTextNode(randompropvalue));

    var guess = document.querySelector('.guess') ;

    //create spans for word
    word.forEach(letter =>{
        sp = document.createElement('span') ;
        if (letter == ' ') {
            sp.className = "space";
        }
        guess.appendChild(sp) ;
    })
   
let chosenletter ;
let Allspans = document.querySelectorAll('.guess span');

document.addEventListener('click' ,(e) =>{
    flag  = false ;
    if (e.target.classList == "letter-box"){
        e.target.classList.add('clicked');
        chosenletter =e.target.innerHTML.toLowerCase();
        //console.log(chosenletter);
        //console.log(word);
        word.forEach((wordletter,index) =>{
            if (wordletter == chosenletter){
                flag = true ;
               Allspans.forEach((sp,spIndex) =>{
                   if (spIndex === index){
                       sp.innerHTML = wordletter.toUpperCase();
                   }
               })
            }
        })
        if (flag !== true){
            wrong++ ;
            drawing.classList.add(`wrong${wrong}`);
            console.log(wrong);
            if (wrong === 8){
                let over = document.createElement('div');
                over.className = 'gameover';
                let pover =document.createElement('span') ;
                pover.appendChild(document.createTextNode(`Game Over the Word is ${randomvaluevalue}`));
                over.appendChild(pover);
                document.querySelector('.container').appendChild(over);
            }
        }
    }

   

})




   
