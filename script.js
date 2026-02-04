const addTodoBtn = document.getElementById("addtodo-btn");
const todoInput = document.getElementById("addTodo");
let todoContainer = document.getElementsByClassName("todoListContainer")[0];

addTodoBtn.addEventListener("click", () => {
  if (todoInput.value.trim() !== "") {
    const newTodo = document.createElement("div");
    const newTodotext = document.createElement("p");
    const deleteTodo = document.createElement("button");
    deleteTodo.textContent = "❌";
    newTodo.appendChild(newTodotext);
    newTodo.appendChild(deleteTodo);
    newTodotext.textContent = todoInput.value;
    newTodo.className = "todoList";
    todoContainer.appendChild(newTodo);
    todoInput.value = "";

    deleteTodo.addEventListener("click", () => {
      todoContainer.removeChild(newTodo);
    });
  }
});
