const items = document.getElementById('todo')
const addBtn = document.getElementById('addbtn')
const delBtn = document.getElementById('delbtn')
const taskAdd = document.getElementById('task')

addBtn.addEventListener('click',function(){
    if(taskAdd.value!=' '){
        const list = document.createElement("li");
        list.innerText=task.value;
        list.classList.add('list')
        items.appendChild(list);
        taskAdd.value=" ";
    }
});

delBtn.addEventListener('click',function(){
    const li = document.getElementsByClassName('list')[0];
    items.removeChild(li);
});