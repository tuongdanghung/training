const input = document.querySelector("button")
console.log(input);


const content = document.getElementById("content")
const errorValue = document.getElementById("error")

var arr = local()
renderTask(arr)
// deleteItem();
function renderTask(arr) {
    let newContent = '<ul>'
    arr.forEach((arr, index) => {
        newContent += `<li>
            <span>${arr.name}</span>
            <button onclick="editItem(${index})" class="edit">edit</button>
            <button class="delete" onclick="deleteItem(${arr.id})" id=${arr.id}>delete</button>
        </li>  <br />`
    })
    newContent += '</ul>'
    document.querySelector('#results').innerHTML = newContent
}
// read

input.onclick = (event) => {

    if (!content.value) {
        errorValue.style.display = "block"
        return
    }

    const editId = event.target.getAttribute('id')
    const parseEditId = parseInt(editId)
    console.log(parseEditId);
    if (parseEditId === 0 || parseEditId) {
        arr[parseEditId] = { id: arr.length, name: content.value }
        event.target.removeAttribute('id')
    } else {
        arr.push({ id: arr.length, name: content.value })
    }
    errorValue.style.display = "none"
    const myArrayJson = JSON.stringify(arr);
    localStorage.setItem('array', myArrayJson);
    renderTask(arr)
    content.value = ''
}
// create


function editItem(index) {
    let item = local()
    if (item.length > 0) {
        console.log(index);
        content.value = item[index].name
        input.setAttribute('id', index)
    }
}
// edit
function deleteItem(id) {
    const index = arr.filter(el => el.id !== parseInt(id));
    if (index !== -1) {
        arr.splice(index, 1);
        const myArrayJson = JSON.stringify(arr);
        localStorage.setItem('array', myArrayJson);
        renderTask(arr)
    }
}

// delete

function local() {
    const myArrayJson = localStorage.getItem('array');
    const myArray = JSON.parse(myArrayJson);
    return myArray ? myArray : []
}


