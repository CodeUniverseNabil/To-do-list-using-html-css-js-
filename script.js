var count = 0
// var len= 0
function addTask(text) {
    // list_have()
    let li = document.createElement("li");
    li.innerText = text
    let delBtn = document.createElement("button");
    delBtn.style.marginLeft = "10px";
    delBtn.innerText = "Del";
    delBtn.style.backgroundColor = "#e74c3c";
    delBtn.style.color = "white";
    delBtn.style.border = "none";
    delBtn.style.borderRadius = "4px";
    delBtn.style.padding = "2px 8px";
    delBtn.style.cursor = "pointer";
    var doneBtn = document.createElement("button");
    doneBtn.style.marginLeft = "10px";
    doneBtn.innerText = "Done";
    doneBtn.style.backgroundColor = "#2ecc71";
    doneBtn.style.color = "white";
    doneBtn.style.border = "none";
    doneBtn.style.borderRadius = "4px";
    doneBtn.style.padding = "2px 8px";
    doneBtn.style.cursor = "pointer";
    li.appendChild(doneBtn)
    li.appendChild(delBtn);
    
    doneBtn.onclick = function () {
        doneBtn.remove()
        
        count += 1
        document.getElementById("is").innerText = count
        stroge()
    }
    delBtn.onclick = function () {
        li.remove();
        saveTasks();
        count -= 1
        document.getElementById("is").innerText = count
        stroge()
    };
    document.getElementById("work_list").appendChild(li);
    
}
function getInput() {
    let work = document.getElementById("input_work");
    let data = work.value.trim();
    if (data.length >= 4) {
        addTask(data);
        saveTasks();
        work.value = "";
    } else {
        alert("That task is too short (min 4 characters)");
        work.value = "";
    }
}

function remove() {
    document.getElementById("work_list").innerHTML = "";
    localStorage.removeItem("tasks");
}
// Load saved tasks on page load
window.onload = function () {
    let saved = localStorage.getItem("tasks");
    if (saved) {
        JSON.parse(saved).forEach(function (task) {
            addTask(task);
        });
    }
};

function stroge() {
    let allist = list_have()
    
    
    
    
    
    localStorage.setItem("baki ache ",ernai)
    
}


function list_have() {
    let that = JSON.parse(localStorage.getItem("tasks"))
    let len = that.length
    
    stroge()
    return len
}

function saveTasks() {
    let items = document.getElementById("work_list").querySelectorAll("li");
    let tasks = [];
    items.forEach(function (li) {
        tasks.push(li.firstChild.textContent);
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("done", count)
}
// console.log(len)