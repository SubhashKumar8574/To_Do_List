const input_text = document.getElementById("input-text");
const add_btn = document.getElementById("add-btn");
const list_content = document.getElementById("list-content");
const h3 = document.getElementsByTagName("h3");

var length = 0;

add_btn.addEventListener("click", () => {

    if (input_text.value === "") {
        alert("Sorry! Your Input box is empty.")
    }
    else {
        h3[0].style.display = "none";

        const div = document.createElement('div');
        const para = document.createElement('p');
        const button = document.createElement('button');
        const check = document.createElement('input');

        para.innerText = input_text.value;
        button.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
        button.setAttribute("onclick", "dltItems(event,this)")
        // button.setAttribute("onclick", "this.parentNode.style.display='none';");
        check.setAttribute("type", "checkbox");
        check.setAttribute('onclick', "showHide(event,this)");


        div.appendChild(check)
        div.appendChild(para);
        div.appendChild(button);

        list_content.appendChild(div);
        input_text.value = "";
        length = list_content.children.length - 1;
        console.log(length);
    }

});


function showHide(e) {
    const tgt = e.target;
    if (tgt.checked) {
        tgt.nextElementSibling.classList.add("blur");
        console.log("It's a checked");
    } else {
        tgt.nextElementSibling.classList.remove("blur");
        console.log("It's not checked");
    }
}

function dltItems(e) {
    var tgt = e.target;
    console.log("items deleted", tgt.tagName);
    if (tgt.tagName === "BUTTON") {
        tgt.parentNode.remove();
    }
    else if (tgt.tagName === "I") {
        tgt.parentNode.parentNode.remove();
    }
    length--;
    console.log(length);
    if (length == 0) {
        h3[0].style.display = "block";
        console.log("the list items is empty", length);
    }

}






