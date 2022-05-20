const form = document.getElementById('form')
const input = document.getElementById('input')
const todosUL = document.getElementById('todos')
// Check local storage
const todos = JSON.parse(localStorage.getItem('todos'))

if(todos) {
    todos.forEach(todo => addTodo(todo))
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    addTodo()
})

function addTodo(todo) {
    let todoText = input.value // set initial value

    if(todo) {
        todoText = todo.text // value passed in the todo input
    }
    // console.log(todoText);
    if(todoText) {
        const todoEl = document.createElement('li')
        if(todo && todo.completed) {
            todoEl.classList.add('completed')
        }

        todoEl.innerText = todoText

        todoEl.addEventListener('click', () => { // click is a left click
            todoEl.classList.toggle('completed')
            updateLS()
        }) 

        todoEl.addEventListener('contextmenu', (e) => { // contextmenu is a right click
            e.preventDefault()

            todoEl.remove()
            updateLS()
        }) 

        todosUL.appendChild(todoEl)

        input.value = '' // clear the form input

        updateLS()
    }
}

function updateLS() {
    const todosEl = document.querySelectorAll('li')

    const todos = []

    todosEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        })
    })

    localStorage.setItem('todos', JSON.stringify(todos))
}