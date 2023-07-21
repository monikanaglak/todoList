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
  switch (selection) {
    case "clean":
      DisplayDOM.DisplayClean();
      break;
    case "buy":
      DisplayDOM.DisplayBuy(todo);
      break;
    case "learn":
      DisplayDOM.DisplayLearn();
      break;
    case "app":
      DisplayDOM.DisplayAppointment();
      break;
  }
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
  static DisplayBuy(todo) {
    console.log(todo)
    let kiki = document.createElement('p');
    let glut = `${todo.todo}`;
    kiki.textContent = glut
    buyTodo.appendChild(kiki)
  }
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
  }
}
