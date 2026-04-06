function saveTasks() {
    let items = document.getElementById("work_list").querySelectorAll("li");
    let tasks = [];
    items.forEach(function (li) {
        tasks.push(li.firstChild.textContent);
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
function addTask(text) {
    let li = document.createElement("li");
    li.innerText=text
    let delBtn = document.createElement("button");
    delBtn.style.marginLeft = "10px";
    delBtn.innerText = "Del";
    delBtn.style.backgroundColor = "#e74c3c";
    delBtn.style.color = "white";
    delBtn.style.border = "none";
    delBtn.style.borderRadius = "4px";
    delBtn.style.padding = "2px 8px";
    delBtn.style.cursor = "pointer";
    li.appendChild(delBtn);
    delBtn.onclick = function () {
        li.remove();
        saveTasks();
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
