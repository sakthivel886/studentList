

var table = document.querySelector(".container-two__table")

var save = document.querySelector(".container-one__table-btn")

save.addEventListener("click", function(event) {
    event.preventDefault()
    var name = document.getElementById("name")
    var age = document.getElementById("age")
    var course = document.querySelector(".course")
    var courses = course.value
    var email = document.getElementById("email")
    var radio = document.getElementsByName("gender")
    for(i=0; i<radio.length; i++)
        if(radio[i].checked)
            values = radio[i].value
    var tr = document.createElement("tr")
    tr.innerHTML = `<td>${name.value}</td>
                    <td>${age.value}</td>
                    <td>${courses}</td>
                    <td>${values}</td>
                    <td>${email.value}</td>
                    <td onclick="deleteEvent(event)" class="btn-delete">Delete </td>`
    table.append(tr)

    
    
})

function deleteEvent(event) {
    event.preventDefault()
    event.target.parentElement.remove()
}

