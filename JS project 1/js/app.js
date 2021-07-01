// If an user add a note, add it to the local storage:
// calling showNotes()
showNotes();

let addBtn= document.getElementById("addBtn");
addBtn.addEventListener("click", function(e) {

    let addTxt= document.getElementById("addTxt");
    // if any notes present from before
    let notes= localStorage.getItem("notes");
    
    if(notes == null) {
        notesObj = [];  //blank array
    }
    else {
        notesObj = JSON.parse(notes);
    }

    //adding the text in notes:
    notesObj.push(addTxt.value);
    // update the local storage after adding new text in notes:
    localStorage.setItem("notes",JSON.stringify(notesObj));
    // now blank addTxt:
    addTxt.value = "";
    // console.log(notesObj);
    // display added notes:
    showNotes();

});

// function to show elements from local storage:
// define showNotes
function showNotes() {
    let notes=localStorage.getItem("notes");
    if(notes == null) {
        notesObj= [];
    } else {
        notesObj= JSON.parse(notes);
    }
    let html ="";
    notesObj.forEach(function (element,index) {
        html += ` 
        <div class="noteCard my-3 mx-3 card" style="width: 18rem;">
            <!-- <img src="..." class="card-img-top" alt="..."> -->
            <div class="card-body">
                <h5 class="card-title">Note ${index+1}</h5>
                <p class="card-text">${element}</p>

                <button id="${index}" onclick="deleteNote(this.id)"class="btn btn-primary">Delete Note</button>
            </div>
        </div>
        `;
    });

    let notesElm = document.getElementById("notes");
    if(notesObj.length !=0) {
    notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = `Nothing to show!`
    }
}


// FUNCTION TO DELETE NOTE:

function deleteNote(index) {
    // console.log("note deleted", index);
    let notes=localStorage.getItem("notes");  //reading local storage
    if(notes == null) {
        notesObj= [];
    } else {
        notesObj= JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    showNotes();
}

let search = document.getElementById("searchTxt");
search.addEventListener("input", function() {

    let inputVal = search.value.toLowerCase();
    // console.log("Input event fired!",inputVal);
    
    let noteCards = document.getElementsByClassName("noteCard");
    Array.from(noteCards).forEach(function(element) {
        let cardTxt= element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)) {
            element.style.display = "block";

        } else {
            element.style.display = "none";
        } 
        // console.log(cardTxt);
    })
});




