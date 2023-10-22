const form = document.querySelector("[data-form]");
const input = document.querySelector("[data-input]");
const selectionList = document.getElementById("selectedElement");
const buyTodo = document.querySelector(".buyTodo");
const appointmentTodo = document.querySelector(".appointmentTodo");
const learnTodo = document.querySelector(".learnTodo");
const cleanTodo = document.querySelector(".cleanTodo");
const section_list = document.querySelector(".sec");

class Storage{
  static addToStorage(arrayTodo){
     let storage = localStorage.setItem("todo", JSON.stringify(arrayTodo))
     return storage;
  }
  static getStorage(){
     let storage = localStorage.getItem("todo") === null ? [] : JSON.parse(localStorage.getItem("todo"));
     return storage
  }
  static removeStorage(todo){
    localStorage.removeItem("todo")
  }
}
let arrayTodo = Storage.getStorage();


form.addEventListener("submit", (e) => {
  e.preventDefault();
  let selection = selectionList.value;
  let thing = input.value;
  let id = Math.random() * 1000;
  let todo = new Todo(thing, id, selection);
  arrayTodo.push(todo);
  DisplayDOM.DisplayBuy(todo,selection)
  Storage.addToStorage(arrayTodo)
});


class Todo {
  constructor(todo, id, selection) {
    this.todo = todo;
    this.id = id;
    this.selection = selection;
  }
}
//display to the DOM
class DisplayDOM {
  static DisplayBuy(todo,selection) {
    let thing_todo = document.createElement('p');
    let thing_todo_text = `${todo.todo}`;
    let ids = todo.id
    thing_todo.innerHTML = thing_todo_text;
    let bin_element = document.createElement('img');
    bin_element.src="./bin.png";
    bin_element.classList.add("bin")
    bin_element.setAttribute("id",ids);
    bin_element.addEventListener('click',(e)=>{
    let ids_clicked = e.target.id;
    //getting id of element to remove, remove from the localstorage as well
    let todo_to_delete = arrayTodo.filter(element=>element.id == ids_clicked);
     Storage.removeStorage(todo_to_delete)
     thing_todo.style.display="none"
})
    thing_todo.appendChild(bin_element)
    switch (selection) {
      case "clean":
        cleanTodo.appendChild(thing_todo)
        break;
      case "buy":
        buyTodo.appendChild(thing_todo)
        break;
      case "learn":
        learnTodo.appendChild(thing_todo)
        break;
      case "app":
        appointmentTodo.appendChild(thing_todo)
        break;
    }
    
  }
}

window.addEventListener("DOMContentLoaded",() =>{
  arrayTodo.forEach(todo => {
    DisplayDOM.DisplayBuy(todo,todo.selection)
  });
  
})
