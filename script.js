function getInput(){
    let value = document.getElementById("input_work").value;
    let li =document.createElement("li")
    if (value.length>=4){
        
        document.getElementsByClassName("work_list").appendChild(li.innerText=value)
    }else{
        alert("that work is too low")
    }
}
