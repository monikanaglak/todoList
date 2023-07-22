const form = document.querySelector("[data-form]");
const input = document.querySelector("[data-input]");
const selectionList = document.getElementById("selectedElement");
const buyTodo = document.querySelector(".buyTodo");
const appointmentTodo = document.querySelector(".appointmentTodo");
const learnTodo = document.querySelector(".learnTodo");
const cleanTodo = document.querySelector(".cleanTodo");
let arrayTodo = [];

//evenlistener making new thing to do
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let selection = selectionList.value;
  let thing = input.value;
  let id = Math.random() * 1000;
  let todo = new Todo(thing, id, selection);
  arrayTodo.push(todo);
  DisplayDOM.DisplayBuy(todo,selection)
});

//class for todo articles blueprint
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
    thing_todo.innerHTML = thing_todo_text;
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
  /*
  static DisplayClean() {
    let thing = arrayTodo.map((article) => {
      return `
            <div>${article.todo}</div>
            `;
    });
    cleanTodo.innerHTML = thing.join(" ");
    console.log(arrayTodo);
  }
  static DisplayLearn() {
    let thing = arrayTodo.map((article) => {
      return `
            <div>${article.todo}</div>
            `;
    });
    learnTodo.innerHTML = thing.join(" ");
  }
  static DisplayAppointment() {
    console.log(arrayTodo);
    let thing = arrayTodo.map((article) => {
      return `
            <div>${article.todo}</div>
            `;
    });
    appointmentTodo.innerHTML = thing.join(" ");
  }*/
}
