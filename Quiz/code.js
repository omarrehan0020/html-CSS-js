let bullut = document.querySelector('.list') ,
    queAns = document.querySelector('.quiz')  ,
    que = document.querySelector('.question'),
    ans = document.querySelector('.answer')  ,
    submit = document.querySelector('.submit'),
    bu = document.querySelector('.bulluts'),
    time1 = document.querySelector('.time') ;
    current = 0 ,
    rigthAnswers=0,
    t =5 ,
    countdowninterval ='';


function getData(){
    var myRequest = new XMLHttpRequest();

    myRequest.onreadystatechange = function(){
        if (this.status === 200 && this.readyState === 4){
             let questionData = JSON.parse(this.responseText);
             let questioncount = questionData.length ;
           createBulluts(questioncount) ;
           
            setquestion(questionData[current],questioncount);
            submit.onclick = () =>{
                let right = questionData[current++].answer ;
                checkAnswer(right,questioncount);
                if (current < questioncount){
                    setquestion(questionData[current],questioncount);
                handlebulluts();
                }else{
                    submit.remove();
                    bu.remove();
                    que.remove();
                    ans.remove();
                    theEnd(questioncount);
                }
                       
            }
            
        }
    };
    myRequest.open("Get" ,"quiz.json" ,true) ;
    myRequest.send();
}

getData();


function createBulluts(questioncount){
    document.querySelector('.count span').innerHTML = questioncount ;
    for (var i=0 ;i<questioncount ;i++){
        var sp = document.createElement('span') ;
        if (i==0){
            sp.className = 'done' ;
        }
        bullut.appendChild(sp) ;
        
    }
}

function setquestion(obj,n){
    time1.innerHTML='';
    clearInterval(countdowninterval);
    countdown(t,n);
   var h3 = document.createElement('h3') ;
   h3.appendChild(document.createTextNode(obj.question));
   que.appendChild(h3);

   for (var i=1 ;i<=4 ;i++){
       var maindiv = document.createElement('div');
       maindiv.className = 'model' ;

       var input = document.createElement('input');
       input.type = 'radio';
       input.name = 'answerr';
       input.id = `option${i}` ;
       input.dataset.answer = obj[`option${i}`] ;
       if (i==1){
           input.checked = true ;
       }
       var lab = document.createElement('label');
       lab.htmlFor =`option${i}` ;
       lab.innerText = obj[`option${i}`] ;

       maindiv.appendChild(input);
       maindiv.appendChild(lab) ;
       ans.appendChild(maindiv);
   }

}

function checkAnswer(rigth,count){
    let options = document.getElementsByName('answerr') ;
    let chosenAnswer ;
    for (var i=0 ;i<options.length ;i++){
        if (options[i].checked){
           chosenAnswer = options[i].dataset.answer ;
           console.log(rigth);
           console.log(chosenAnswer);
           if (chosenAnswer  === rigth){
               rigthAnswers++ ;
           }
           que.innerHTML ='';
           ans.innerHTML = '';
        }
    }
}
function handlebulluts(){
    let spans = document.querySelectorAll('.list span');
    let arrayspan = Array.from(spans) ;
    arrayspan[current].classList.add('done') ;
}
function theEnd(n){
    let maindiv = document.createElement('div') ,
        sp = document.createElement('span'),
        sp2 = document.createElement('span');
        sp2.appendChild(document.createTextNode(` : you answer ${rigthAnswers} from ${n}`)) ;
        if (rigthAnswers >= n-2){
            sp.className = 'perfect';
            sp.appendChild(document.createTextNode('Perfect'));
        }
        else if (rigthAnswers >= n-4){
            sp.className = 'Good';
            sp.appendChild(document.createTextNode('Good'));
        }
        else {
            sp.className = 'Bad';
            sp.appendChild(document.createTextNode('Bad'));
        }
        maindiv.appendChild(sp);
        maindiv.appendChild(sp2) ;
       queAns.appendChild(maindiv) ;
}
function countdown(duration,n){
    console.log(current);
    console.log(n);

    if (current < n){
         countdowninterval  = setInterval(()=>{
            let min = parseInt(duration/60);
            let sec = parseInt(duration%60);
            if(min < 10) {
                min = `0${min}`;
            }
            if(sec < 10) {
                sec = `0${sec}`;
            }
            time1.innerHTML = `${min} : ${sec}` ;
            if (--duration < 0)
            {
                clearInterval(countdowninterval);
                submit.click();
            }
    
        },1000);
    }
   
}
