function addlist(aa) {
    let new_li = document.createElement('li')
    
    let delBtn = document.createElement("button")
    delBtn.innerText = "del"
    delBtn.style.marginLeft = "10px";
    delBtn.style.backgroundColor = "#e74c3c";
    delBtn.style.color = "white";
    delBtn.style.border = "none"; delBtn.style.borderRadius = "4px";
    delBtn.style.padding = "2px 8px";
    delBtn.style.cursor = "pointer";
    new_li.innerText = aa

    new_li.appendChild(delBtn)
    document.getElementById("work_list").appendChild(new_li)
        delBtn.onclick = function () {
        new_li.remove()

    }

}

function save() {
    let list = document.getElementById("work_list").querySelectorAll("li")
    // let lia =list.getElementsByTagName("li")
    let save_data = []
    for (let index = 0; index < list.length; index++) {
        const element = list[index]
        save_data.push(element.firstChild.textContent)


    }
    localStorage.setItem("alltask", JSON.stringify(save_data))
}

function getInput() {
    let work = document.getElementById("input_work")
    let new_li = document.createElement('li')
    let to_text = work.value.trim()
    let delBtn = document.createElement("button")
    delBtn.innerText = "del"
    delBtn.style.marginLeft = "10px";
    delBtn.style.backgroundColor = "#e74c3c";
    delBtn.style.color = "white";
    delBtn.style.border = "none"; delBtn.style.borderRadius = "4px";
    delBtn.style.padding = "2px 8px";
    delBtn.style.cursor = "pointer";
    new_li.innerText = to_text

    new_li.appendChild(delBtn)

    if (to_text.length >= 4) {
        addlist(to_text)
        work.value = ""
        save()
    } else {
        alert("input lomg")

        work.value = ""
        save()
    }

}

function remove() {
    document.getElementById("work_list").innerHTML = ""
    save()
}

window.onload = function () {
    let data = localStorage.getItem("alltask")
    if (data) {
        JSON.parse(data).forEach(function (text) {
            addlist(text)
        })
    }
}