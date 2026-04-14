// var count = 0
// // var len= 0
//     function done() {
//         localStorage.setItem("done", count)
//     }
// function addTask(text) {

//     let li = document.createElement("li");
//     li.innerText = text
//     let delBtn = document.createElement("button");
//     delBtn.style.marginLeft = "10px";
//     delBtn.innerText = "Del";
//     delBtn.style.backgroundColor = "#e74c3c";
//     delBtn.style.color = "white";
//     delBtn.style.border = "none";
//     delBtn.style.borderRadius = "4px";
//     delBtn.style.padding = "2px 8px";
//     delBtn.style.cursor = "pointer";
//     var doneBtn = document.createElement("button");
//     doneBtn.style.marginLeft = "10px";
//     doneBtn.innerText = "Done";
//     doneBtn.style.backgroundColor = "#2ecc71";
//     doneBtn.style.color = "white";
//     doneBtn.style.border = "none";
//     doneBtn.style.borderRadius = "4px";
//     doneBtn.style.padding = "2px 8px";
//     doneBtn.style.cursor = "pointer";

//     doneBtn.id = "doneBtn"
//     li.appendChild(doneBtn)
//     li.appendChild(delBtn);

//     doneBtn.onclick = function () {
//         doneBtn.remove()

//         count += 1
//         document.getElementById("is").innerText = count
//         done()


//     }

//     function all() {

//         let len = document.getElementById("work_list").childElementCount
//         document.getElementById("not").innerText = len
//     }
//     delBtn.onclick = function () {
//         li.remove();
//         saveTasks();
//         if (0 == count) {
//             document.getElementById("is").innerText = 0
//             done()

//         } else if (
//             li.querySelector("#doneBtn")    //done that task
//         ) {
//             document.getElementById("is").innerText = count
//             done()

//         } else {

//             count -= 1
//             document.getElementById("is").innerText = count
//             done()

//         }

//     };
//     document.getElementById("work_list").appendChild(li);
//     saveTasks()
//     all()

// }
// function getInput() {
//     let work = document.getElementById("input_work");
//     let data = work.value.trim();
//     if (data.length >= 4) {
//         addTask(data);
//         saveTasks();
//         work.value = "";
//     } else {
//         alert("That task is too short (min 4 characters)");
//         work.value = "";
//     }
// }

// function remove() {
//     document.getElementById("work_list").innerHTML = "";
//     localStorage.removeItem("tasks");
//     document.getElementById("is").innerText = ""

// }
// // Load saved tasks on page load
// window.onload = function () {
//     let saved = localStorage.getItem("tasks");
//     if (saved) {
//         JSON.parse(saved).forEach(function (task) {
//             addTask(task);
//         });
//     }
//     let done = localStorage.getItem("done")
//     document.getElementById("is").innerText = done
//     done()



// };



// function saveTasks() {
//     let items = document.getElementById("work_list").querySelectorAll("li");
//     let tasks = [];
//     items.forEach(function (li) {
//         tasks.push(li.firstChild.textContent);
//     });
//     localStorage.setItem("tasks", JSON.stringify(tasks));

// }
// // console.log(len)



var count = 0
// var len= 0
function addTask(text, isDone = false) {

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

    doneBtn.className = "doneBtn" // id থেকে className করা হয়েছে, কারণ একই id একাধিক element এ দেওয়া যায় না
    li.appendChild(doneBtn)
    li.appendChild(delBtn);

    // reload এর পর isDone=true হলে done button সরিয়ে দাও, যাতে আর না দেখায়
    if (isDone) {
        doneBtn.remove()
    }

    doneBtn.onclick = function () {
        doneBtn.remove()
        count += 1
        document.getElementById("is").innerText = count
        done()
        saveTasks() // done হলে task এর isDone status save করো
    }
    function done() {
        localStorage.setItem("done", count)
    }
    function all() {

        let len = document.getElementById("work_list").childElementCount
        document.getElementById("not").innerText = len
    }
    delBtn.onclick = function () {
        li.remove();
        saveTasks();
        if (0 == count) {
            document.getElementById("is").innerText = 0
            done()

        } else if (
            li.querySelector(".doneBtn")    //done that task
        ) {
            document.getElementById("is").innerText = count
            done()

        } else {

            count -= 1
            document.getElementById("is").innerText = count
            done()

        }

    };
    document.getElementById("work_list").appendChild(li);
    saveTasks()
    all()

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
    document.getElementById("is").innerText = ""

}
// Load saved tasks on page load
window.onload = function () {
    let saved = localStorage.getItem("tasks");
    if (saved) {
        JSON.parse(saved).forEach(function (task) {
            // task এখন object {text, isDone}, তাই text আর isDone আলাদা করে পাঠাও
            addTask(task.text, task.isDone);
        });
    }
    // is এর value reload এ blank রাখো
    document.getElementById("is").innerText = ""
};



function saveTasks() {
    let items = document.getElementById("work_list").querySelectorAll("li");
    let tasks = [];
    items.forEach(function (li) {
        tasks.push({
            text: li.firstChild.textContent,
            isDone: !li.querySelector(".doneBtn") // doneBtn না থাকলে isDone=true
        });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));

}
// console.log(len)