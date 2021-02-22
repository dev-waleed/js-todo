let todoDisplay = document.querySelector('.todo')
let todo = ["Shower", "Workout", "Breakfast", "Courses", "Sleep"]



function toggleTodo() {
    let x = 0
    x += 1
    if(x <= todo.length){
        let item = todo.shift()
        todoDisplay.innerHTML += "<p>" + "✔ " + item + "</p>"
    }
}