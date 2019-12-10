const taskForm = document.querySelector(".js-taskForm"),
    taskInput = taskForm.querySelector("input"),
    PendingList = document.querySelector(".js-PendingList"),
    FinishedList = document.querySelector(".js-FinishedList");

const PENDING_LS = 'PENDING';
const FINISHED_LS = 'FINISHED';

let task = [];

function finishTask(event) {
    const btn = event.target;
    const li = btn.parentNode;
    PendingList.removeChild(li);
    FinishedList.appendChild(li);
    const cleanTask = task.filter(function(task) {
        return task.id !== parseInt(li.id);
    });
    task = cleanTask;
    saveFinishedTask();
}

function deleteTask(event) {
    const btn = event.target;
    const li = btn.parentNode;
    PendingList.removeChild(li);
    const cleanTask = task.filter(function(task) {
        return task.id !== parseInt(li.id);
    });
    task = cleanTask;
    savePendingTask();
}


function savePendingTask() {
    localStorage.setItem(PENDING_LS, JSON.stringify(task));
}

function saveFinishedTask() {
    localStorage.setItem(FINISHED_LS, JSON.stringify(task));
}


function paintFinished(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const finishedBtn = document.createElement("button")
    const returnBtn = document.createElement("button")
    const span = document.createElement("span");
    const newId = task.length +1;
    delBtn.innerHTML = "❌";
    finishedBtn.innerHTML = "✅";
    returnBtn.innerHTML = "↩️";
    finishedBtn.addEventListener("click", finishTask);
    delBtn.addEventListener("click", deleteTask);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(finishedBtn);
    li.appendChild(returnBtn);
    li.id = newId;
    PendingList.appendChild(li);
    const taskObj = {
        text: text,
        id: newId
    };
    task.push(taskObj);
    savePendingTask();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = taskInput.value;
    paintFinished(currentValue);
    taskInput.value = "";

}

function loadTask() {
    const loadedTask = localStorage.getItem(PENDING_LS);
    if(loadedTask !== null){
        const parsedTask = JSON.parse(loadedTask);
        parsedTask.forEach(function(task) {
            paintFinished(task.text);
        });
    }  
}

function init(){
    loadTask();
    taskForm.addEventListener("submit", handleSubmit)
}

init();