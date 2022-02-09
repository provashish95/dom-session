let count = 0; //global variable
document.getElementById('add-btn').addEventListener("click", function() {
    const inputValue = document.getElementById('input-value').value;
    count++;
    if (inputValue == '') {
        alert('empty field');
    } else {
        const mainContainer = document.getElementById('content-container');
        const tableContainer = document.createElement("tr"); //create tr of table
        tableContainer.innerHTML = `
        <td>${count++}</td>
        <td>${inputValue}</td>
        <td><button class="btn btn-danger delete-btn">Delete</button>
        <button class="btn btn-success done-btn">Done</button></td>`;
        mainContainer.appendChild(tableContainer); //joint table-container to main-conatiner
        document.getElementById('input-value').value = ''; //clean input field



        //here class uses
        const deleteBtn = document.getElementsByClassName('delete-btn');
        const doneBtn = document.getElementsByClassName('done-btn');

        for (const button of deleteBtn) {
            button.addEventListener('click', function(e) {
                e.target.parentNode.parentNode.style.display = 'none';
            });
        }

        for (const button of doneBtn) {
            button.addEventListener('click', function(e) {
                e.target.parentNode.parentNode.style.textDecoration = 'line-through';
            });
        }

        //clear all table data 
        document.getElementById('clear-btn').addEventListener("click", function() {
            tableContainer.style.display = 'none';
        });

    }

})