const ipt = document.getElementById("submit")
const content = document.getElementById("content")
const errorValue = document.getElementById("error")

const arr = local()
renderTask(arr)

function renderTask(arr) {
    console.log(arr);
    let newContent = '<ul>'
    arr.forEach((arr) => {
        newContent += `<li>
            <span>${arr.name}</span>
            <button class="edit">edit</button>
            <button class="delete" id=${arr.id}>delete</button>
        </li>  <br />`
    })
    newContent += '</ul>'
    document.querySelector('#results').innerHTML = newContent
}
// read

ipt.onclick = () => {
    if (!content.value) {
        errorValue.style.display = "block"
        return
    }
    errorValue.style.display = "none"
    arr.push({ id: arr.length, name: content.value })
    const myArrayJson = JSON.stringify(arr);
    localStorage.setItem('array', myArrayJson);
    renderTask(arr)
}
// create
const deleteButton = document.querySelectorAll('.delete');
deleteButton.forEach(button => {
    button.onclick = () => {
    //    arr = arr.filter(item => item)
       console.log(arr);
    }
})


function local() {
    const myArrayJson = localStorage.getItem('array');
    const myArray = JSON.parse(myArrayJson);
    return myArray
}


