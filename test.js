const input=document.querySelector(".todo-form input[type='text']")

const todoForm=document.querySelector('.todo-form')

const ul=document.querySelector(".todo-tasks")

const li=document.querySelector("todo-items")

todoForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(input.value!="")
    {
        const tasks=input.value;
        const newLi=document.createElement("li");
        newLi.classList.add("todo-items")
        newLi.innerHTML=`<span>${tasks}</span>
        <div>
        <button class="done btn">Done</button>
        <button class="remove btn">Remove</button>
        </div>`
        input.value="";
        ul.append(newLi);
    }

})

ul.addEventListener("click",(e)=>{
    if(e.target.classList.contains("done"))
    {
        const liSpan=e.target.parentNode.previousElementSibling;
    
        liSpan.style.textDecoration="line-through";
    }if(e.target.classList.contains("remove"))
    {
        const current=e.target.parentNode.parentNode;
        current.remove()
    }
})