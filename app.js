const form = document.querySelector("[data-form]");
const input = document.querySelector("[data-input]");
const selectionList = document.getElementById('selectedElement');
const buyTodo = document.querySelector('.buyTodo');
const appointmentTodo = document.querySelector('.appointmentTodo');
const learnTodo = document.querySelector('.learnTodo');
const cleanTodo = document.querySelector('.cleanTodo');
const article = document.querySelector('.article')
let arrayTodo = [];

//evenlistener making new thing to do
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let selection = selectionList.value;
    /*var naglak = e.options[e.selectedIndex].text;
    console.log(naglak)*/
    let thing = input.value;
    let id = Math.random()*1000;
    let todo = new Todo(thing,id,selection)
    arrayTodo.push(todo)
    input.value = " ";
    if(selection === "clean"){
        DisplayDOM.DisplayClean()
    }
    if(selection === "buy"){
        DisplayDOM.DisplayBuy()
    }
    if(selection === "learn"){
        DisplayDOM.DisplayLearn()
    }
    if(selection === "app"){
        DisplayDOM.DisplayAppointment()
    }
    
    

})

//class for todo articles blueprint
class Todo{
    constructor(todo,id,selection){
        this.todo = todo;
        this.id = id;
        this.selection = selection;
    }
}
//display to the DOM
class DisplayDOM{
    static DisplayBuy(){
        let thing = arrayTodo.map(article=>{
            return `
            <div>${article.todo}</div>
            `
        })
        buyTodo.innerHTML = thing.join(" ");
    }
    static DisplayClean(){
        let thing = arrayTodo.map(article=>{
            return `
            <div>${article.todo}</div>
            `
        })
        cleanTodo.innerHTML = thing.join(" ");
    }
    static DisplayLearn(){
        let thing = arrayTodo.map(article=>{
            return `
            <div>${article.todo}</div>
            `
        })
        learnTodo.innerHTML = thing.join(" ");
    }
    static DisplayAppointment(){
        let thing = arrayTodo.map(article=>{
            return `
            <div>${article.todo}</div>
            `
        })
        appointmentTodo.innerHTML = thing.join(" ");
    }

}