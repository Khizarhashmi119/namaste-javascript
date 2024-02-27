const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const todoInput = document.querySelector("#todo-input");
  const todo = todoInput.value;

  if (todo) {
    addTodo(todo);
    todoInput.value = "";
  }
});

todoList.addEventListener("click", (event) => {
  const target = event.target;
  const tagName = target.tagName;
  const innerText = target.innerText;

  if (tagName === "BUTTON" && innerText === "Delete") {
    todoList.removeChild(target.parentElement);
  }
});

const addTodo = (todo) => {
  const todoLi = document.createElement("li");
  const todoSpan = document.createElement("span");
  const todoDeleteButton = document.createElement("button");

  todoSpan.innerText = todo;
  todoDeleteButton.innerText = "Delete";
  todoLi.appendChild(todoSpan);
  todoLi.appendChild(todoDeleteButton);
  todoList.appendChild(todoLi);
};
