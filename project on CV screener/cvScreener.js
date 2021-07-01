console.log("Project on CV Screener");
// Data is an array of objects which contains information about the candidates:
const data = [
    {
        name: "John Miller",
        age: 20,
        contact: 1234567890,
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/75.jpg'
    },

    {
        name: "John Denver", 
        age: 22,
        contact: 234567892,
        language: 'JavaScript',
        framework: 'ReactJs',
        image: 'https://randomuser.me/api/portraits/men/76.jpg'
    },

    {
        name: "Rohan Singh",
        age: 24,
        contact: 345678934,
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/men/80.jpg'
    },

    {
        name: "Rohan Singh",
        age: 24,
        contact: 45678956,
        language: 'Java',
        framework: 'Java framework',
        image: 'https://randomuser.me/api/portraits/men/80.jpg'
    }

]

// CV Iterator:
function cvIterator(profiles) {
    let nextIndex= 0;
    return {
        next: function() {
            return nextIndex<profiles.length ?
            {value: profiles[nextIndex++], done: false} :
            {done:true}
        }
    }
}


const candidates = cvIterator(data);
// const currentCandidate = candidates.next().value;
// calling nextCV():
nextCV();
// Button listener for next button"
const next = document.getElementById('next');
next.addEventListener('click', nextCV);

// const candidates = cvIterator(data);

function nextCV() {

    const currentCandidate = candidates.next().value;
    let image = document.getElementById("image");
    let profile = document.getElementById("profile");
    if(currentCandidate != undefined) {
    image.innerHTML = `<img src='${currentCandidate.image}'>`
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">name: ${currentCandidate.name}</li>
    <li class="list-group-item">age: ${currentCandidate.age}</li>
    <li class="list-group-item">phone: ${currentCandidate.contact}</li>
    <li class="list-group-item">language: ${currentCandidate.language}</li>
    <li class="list-group-item">framework: ${currentCandidate.framework}</li>
  </ul>`
    } else {
        alert('List end');
    }

}

// const previous = document.getElementById('previous');
// previous.addEventListener('click', previousCV);

// function previousCV(profiles) {
//     let image = document.getElementById("image");
//     let profile = document.getElementById("previous");
//     if(currentCandidate ==profiles.length) {
//         return currentCandidate - 1;
//     } else {
//         alert("cannot go previous");
//     }
//     image.innerHTML =`<img src>='${currentCandidate.image}'`
//     profile.innerHTML = `<ul class="list-group">
//     <li class="list-group-item">name: ${currentCandidate.name}</li>
//     <li class="list-group-item">age: ${currentCandidate.age}</li>
//     <li class="list-group-item">phone: ${currentCandidate.contact}</li>
//     <li class="list-group-item">language: ${currentCandidate.language}</li>
//     <li class="list-group-item">framework: ${currentCandidate.framework}</li>
//   </ul>`
// }




