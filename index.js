function updateAndAdd() {
    task = document.getElementById('items').value;
    if(localStorage.getItem('itemsJson')==null){
        console.log("Updating the task")
        taskList = []
        taskList.push(task)
        localStorage.setItem('itemsJson',JSON.stringify(taskList))
        console.log(localStorage.getItem('itemsJson'))
    }else{
        taskListStr = localStorage.getItem('itemsJson')
        taskList = JSON.parse(taskListStr)
        taskList.push(task)
        localStorage.setItem('itemsJson',JSON.stringify(taskList))
    }
    add()
}

function add() {
    if(localStorage.getItem('itemsJson')==null){
        taskList = []
        localStorage.setItem('itemsJson',JSON.stringify(taskList))
    }else{
        taskListStr = localStorage.getItem('itemsJson')
        taskList = JSON.parse(taskListStr)
    }
    let tableBody = document.getElementById('tableBody')
    let str="";
    taskList.forEach((element,index) => {
        str+=  `
        <tr>
        <th scope="row">${index+1}</th>
        <td>${element}</td>
        <td><button class="btn-sm btn-danger" onclick="deleted(${index})">Delete</button></td>
        </tr>`        
    })
    tableBody.innerHTML=str;
}

document.getElementById("add").addEventListener("click", updateAndAdd)
add()

function deleted(index) {
    console.log('Deleted',index)
    taskListStr = localStorage.getItem('itemsJson')
    taskList = JSON.parse(taskListStr)
    taskList.splice(index,1)
    localStorage.setItem('itemsJson',JSON.stringify(taskList))
    add()
}


function clearList() {
    localStorage.clear()
    add()
}