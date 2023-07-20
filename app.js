const form = document.querySelector("[data-form]");
const article = document.querySelector('.article');
const input = document.querySelector("[data-input]");
const selectionList = document.getElementById('selectedElement')
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
    input.value = " ";
    console.log(selection)
    if(selection === "clean"){
        console.log("oh yeah")
    }
    arrayTodo.push(todo)
    console.log(arrayTodo)
    DisplayDOM.Display()

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
    static Display(){
        let thing = arrayTodo.map(article=>{
            return `
            <div>${article.todo}</div>
            
            <div>${article.selection}</div>
            `
        })
        if(article.selection == 'clean'){
            console.log("im here")
            article.classList.add("red")
        }
        article.innerHTML = thing.join(" ");
    }
}