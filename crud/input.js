const btn = document.getElementById('submit')
const content = document.getElementById('content')
let task = getTask()
renderTask(task)
btn.onclick = () => {
    if (!content.value) {
        alert("Please enter")
        return false
    }
    let task = getTask()
    task.push({ name: content.value })

    content.value = ''
    renderTask(task)
}

function renderTask(task) {
    let newContent = '<ul>'
    task.forEach((task) => {
        newContent += `<li>
            <span>${task.name}</span>
            <button class="edit">edit</button>
            <button class="delete">delete</button>
        </li>`
    })

    newContent += '</ul>'

    document.querySelector('#results').innerHTML = newContent
}

function  getTask() {
    return localStorage.getItem('task') ? JSON.parse(localStorage.getItem('task')) : []
}