'use strict';

// Form class
class Form {
    constructor(name, age, dob, gender) {
        this.name = name,
        this.age = age,
        this.dob = dob,
        this.gender = gender
    }
}

// UI Class: display date, add data to list, remove list, alert

class UI {
    static displayData() {
        // const StoreData = [
        //     {
        //         name: "Rahul",
        //         age: '22',
        //         dob: '20/01/1999',
        //         gender: 'Male'
        //     },
        //     {
        //         name: "Angelic",
        //         age: '24',
        //         dob: '20/01/1997',
        //         gender: 'Female'
        //     }
        // ];

        const table = Store.getData();  // array

        // loop through array
        table.forEach((data) => UI.addDataToList(data))
    }
    static addDataToList(data) {
        let list = document.getElementById("data-list");

        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${data.name}</td>
            <td>${data.age}</td>
            <td>${data.dob}</td>
            <td>${data.gender}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">Delete</a></td>
        `

        list.appendChild(row);
    }

    static deleteData(tr) {
        if(tr.classList.contains('delete')) {
            tr.parentElement.parentElement.remove();
        }
    }

    // create alert
    static showAlert(message, className) {
        // create a div
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#form');
        container.insertBefore(div, form); // before form

        // setTimeOut for alert
        setTimeout(() => document.querySelector('.alert').remove(),3000);
    }

    static clearFields() {
        document.getElementById("name").value ='';
        document.getElementById("age").value = '';
        document.getElementById("dob").value = '';
        document.getElementById("gender").value = '';
    }
}

// Storing
class Store {
    static getData() {
        let table;
        if(localStorage.getItem('table') === null) {
            table = [];
        } else {
            table = JSON.parse(localStorage.getItem('table'))
        }
        return table;
    }

    static addData(data) {
        const table = Store.getData();
        table.push(data);

        localStorage.setItem('table', JSON.stringify(table));
    }
    static removeData(dob) {
        const table = Store.getData();
        table.forEach((data, index) => {
            if(data.dob === dob) {
                table.splice(index, 1);
            }
        })
    }
}

// Display data
document.addEventListener('DOMContentLoaded', UI.displayData);

// Event: Add Data when submit
document.getElementById("form").addEventListener('submit', (e) => {
    e.preventDefault();
    // Get form values
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let dob = document.getElementById("dob").value;
    let gender = document.getElementById("gender").value;

    // Validation
    if(name ==='' || age === '' || dob === '' || gender === '') {
        UI.showAlert("Please fill in all fileds", 'danger');
    } else {
    const form = new Form(name,age,dob,gender);

    console.log(form);
    UI.addDataToList(form);

    // 
    Store.addData(form)

    // Show success message
    UI.showAlert('Form successfully submitted', 'success');

    UI.clearFields()
    }

})

// Event: Remove Data
document.getElementById("data-list").addEventListener('click', (e) => {
    // console.log(e.target);
    UI.deleteData(e.target);

    // Show success message
    UI.showAlert('Data Deleted', 'danger');
})










