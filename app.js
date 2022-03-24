
/* Validation of input */
function newElement(){
    let text = document.getElementById("todo_input").value; //get the user_input
    let error = document.getElementById("error");
    if (text === '') {
        error.style.display = "block";
    }
    
}


/*  GEETING ALL THE ELEMENT OF TODO_LIST  */
const todo_submit = document.getElementById("todo_submit");
const list_todo = document.querySelector('.list_todo');
const complete_todo = document.querySelector('.complete_todo');
const delete_todo = document.querySelector('.delete_todo');


/* Adding event on btn */
todo_submit.addEventListener("click", createTodo);
var a = 0;


function createTodo() {
    const todo_div = document.createElement("div");
    const input_val = document.getElementById("todo_input").value;
    const tag = document.createElement("p"); // p element
    const text = document.createTextNode(input_val); // input value by user
    // tag.appendChild(text); //text is append with div element <div>[user_input]</div>
    tag.innerText = text.textContent; //text is append with div element <div>[user_input]</div>
    tag.style.display = "inline-block";

    /* Making Checkbox */
    var newCheckbox = document.createElement("input");
    newCheckbox.setAttribute("type", "checkbox"); //checkBox attribute will be available in main div
    todo_div.appendChild(newCheckbox); // checkbox will be added to text div(tag)
    todo_div.appendChild(tag);
    
    // Hiding text when user_input is empty
    let txt = document.getElementById("todo_input").value; //get the user_input
    let error = document.getElementById("error");
    if(txt === ''){
        todo_div.removeChild(todo_div);
        error.style.display = "block";
    } else{
        error.style.display = "none";
        
    }


    /* Making Span */
    const span = document.createElement("span");
    span.innerHTML = '<i style="color: red; padding-left: 10px; cursor: pointer; ">Delete</i>';
    todo_div.appendChild(span);
    input_status.appendChild(todo_div);
    

    /* Checkbox functionality*/
    newCheckbox.addEventListener("click", () => {

        if (newCheckbox.checked == true) {
            a = a + 1;
            span.style.display = "none";
            tag.style.display = "block";
            complete_todo.append(tag);
            todo_div.innerHTML = "<span id='a" + a + "'>" + tag.textContent + "</span>"; //tag.textContent = text; <span id="unique id">user_input</span>
            todo_div.setAttribute("id", "set_id" + a);
            todo_div.appendChild(newCheckbox); //adding checkbox with text
            newCheckbox.style.float = "left";
            var ac = newCheckbox.previousElementSibling.id;
            document.getElementById(ac).style.textDecorationLine = "line-through";

        } else if (newCheckbox.checked == false) {

            var sp_id = newCheckbox.parentNode.id;
            var abcd = document.getElementById(sp_id).firstElementChild;
            abcd.style.textDecorationLine = "none";
            span.style.display = "initial";
            // console.log(span);
            // todo_div.appendChild(span);
            // console.log(todo_div);
            tag.style.display = "none";


        }

    });


    /* Span functionality */
    span.addEventListener("click", () => {
         
        tag.style.display = "block";
        delete_todo.appendChild(tag);
        span.parentElement.style.display = "none";
    });


    document.getElementById("todo_input").value = "";

}