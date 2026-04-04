function getInput() {
    let work = document.getElementById("input_work");
    let li = document.createElement("li")
    let data = work.value;
    if (data.length >= 4) {
        document.getElementsByClassName("work_list")[0].appendChild(li)
        li.innerText = data
        let delBtn = document.createElement("button")
        delBtn.style.marginLeft = "10px";
        delBtn.innerText = "Del";
        delBtn.style.backgroundColor = "#e74c3c";
        delBtn.style.color = "white";
        delBtn.style.border = "none";
        delBtn.style.borderRadius = "4px";
        delBtn.style.padding = "2px 8px";
        li.appendChild(delBtn)
        delBtn.style.cursor = "pointer"


        delBtn.onclick = function () {
            li.remove()
        }
        work.value = "";
    } else {
        alert("that work is too low")
        wrok.value = "";
    }
}

function remove(){
    let cll =document.getElementsByClassName("work_list")[0]
    cll.innerHTML=""
}
