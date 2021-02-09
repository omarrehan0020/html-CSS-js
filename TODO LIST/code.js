let inputTask = document.querySelector('.new-task input'),
    plus = document.querySelector('.plus'),
    deletebutton = document.querySelector('.delete') ,
    taskcount = document.querySelector('.task') ,
    completedcount = document.querySelector('.completed') ,
    notask = document.querySelector('.no-tasks') ,
    allTasks = document.querySelector('.tasks'),
    tasksContent =[];
    
window.onload = function(){
    inputTask.focus() ;
}


plus.onclick = function(){
    if (inputTask.value ==''){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Task is Empty',
          })
    }
    else{
       notask.remove();
      if (tasksContent.includes(inputTask.value,0)){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'This Task is Added Before',
          });
          inputTask.value='';
          inputTask.focus();
      }else {
        var maindiv = document.createElement('div') ,
        textspan = document.createElement('span'),
        deletespan = document.createElement('span');
        maindiv.className = 'task-box' ;
        textspan.appendChild(document.createTextNode(inputTask.value));
        deletespan.appendChild(document.createTextNode('Delete'));
        deletespan.className = 'delete' ;
        maindiv.appendChild(textspan);
        maindiv.appendChild(deletespan);
        allTasks.appendChild(maindiv);
        tasksContent.push(inputTask.value) ;
        inputTask.value='';
        inputTask.focus();
        getfinished();
      }
     
    }
}

document.addEventListener('click' ,function(e){
    if (e.target.className =='delete'){
       var s = e.target.parentNode.children[0].innerHTML;
        e.target.parentNode.remove(); 
        tasksContent.splice(tasksContent.indexOf(s),1) ;
        if (tasksContent.length == 0){
            notaskfunction();
        }
        getfinished();
    }
    if(e.target.classList.contains('task-box')){
        e.target.classList.toggle('finish');
        getfinished();
    }
});
function notaskfunction(){
    var maindiv = document.createElement('div'),
        mainspan =document.createElement('span');

        maindiv.className = 'no-tasks' ;

        mainspan.appendChild(document.createTextNode('No Tasks to show'));
        maindiv.appendChild(mainspan);

        document.querySelector('.tasks').appendChild(maindiv);
        notask = maindiv ;

}
function getfinished(){
    var finish = Array.from(document.querySelectorAll('.finish'));
    
    document.querySelector('.completed span').innerHTML = finish.length ;
    document.querySelector('.task span').innerHTML = tasksContent.length ;

}