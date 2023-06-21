let any = localStorage.getItem("notes")
if (any == null) {
    document.getElementById("notes").innerHTML += `<p><b>Oops! No note to show.</p>`
}
else {
    showNotes()
}
function format() {
    localStorage.clear()
    location.reload()
    showNotes()
}

//function to add note.
function add() {
    let notes = localStorage.getItem("notes")
    if (notes == null) {
        notesObj = []
    }
    else {
        notesObj = JSON.parse(notes)
    }

    notesObj.push(exampleFormControlTextarea1.value)
    localStorage.setItem("notes", JSON.stringify(notesObj))
    exampleFormControlTextarea1.value = ""
    showNotes()
}

//funtion to show note.  
function showNotes() {
    let notes = localStorage.getItem("notes")
    if (notes.length == 0) {
        document.getElementById("notes").innerHTML += `<b>Oops! No note to show, you can add one.`
    }
    if (notes == null) {
        notesObj = []
    }
    else {
        notesObj = JSON.parse(notes)
    }
    let html = ""
        notesObj.forEach(function (element, index) {
            html += `       
        <div class="card" style="width: 100%;">
            <div class="card-body">
                <h5 class="card-title">Note : ${index+1}</h5>
                 <p class="card-text">${element}</p>
                 <button type="button" class="btn btn-danger" id ="${index}"onclick="del(this.id)">Delete</button>
            </div>
         </div>
         `
        })
    let notesElem = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElem.innerHTML = html;
    }

}

//function to delete note.
function del(index) {
    let notes = localStorage.getItem("notes")
    if (notes == null) {
        notesObj = []
        localStorage.clear()
    }
    else {
        notesObj = JSON.parse(notes)
    }
    notesObj.splice(index, 1)
    localStorage.setItem("notes", JSON.stringify(notesObj))
    location.reload()
    showNotes()
}

let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {
    let inputVal = search.value.toLowerCase();
    let noteCards = document.getElementsByClassName('card');
    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    })
})

