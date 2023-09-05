const todoList = [];
let htmlText = '';
function addTodo(){
   const inputElement = document.querySelector('.js-name-input');
   const name = inputElement.value;
   todoList.push(name);
   console.log(todoList);
   const html = `<p>${name}</p>`;
   htmlText+=html;

   document.querySelector('.js-todo-list').innerHTML = htmlText;
   inputElement.value = '';
}