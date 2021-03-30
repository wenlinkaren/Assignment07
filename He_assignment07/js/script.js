// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form          = document.querySelector('#addForm');
let selectedtable = document.querySelector('#employees');
// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let count;

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES
    let ID        = document.querySelector('#id').value;
    let Name      = document.querySelector('#name').value;
    let Ext       = document.querySelector('#extension').value;
    let Email     = document.querySelector('#email').value;
    let Department= document.querySelector('#department').value;
    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = selectedtable.insertRow(-1);
    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellId         = row.insertCell(0);
    let cellName       = row.insertCell(1);
    let cellExt        = row.insertCell(2);
    let cellEmail      = row.insertCell(3);
    let cellDepartment = row.insertCell(4);
    let cellDeleteBtn  = row.insertCell(5);
    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellId.appendChild(document.createTextNode(ID));
    cellName.appendChild(document.createTextNode(Name));
    cellExt.appendChild(document.createTextNode(Ext));
    cellEmail.appendChild(document.createTextNode(Email));
    cellDepartment.appendChild(document.createTextNode(Department));

    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right';
    deleteBtn.appendChild(document.createTextNode('X'));
    cellDeleteBtn.appendChild(deleteBtn);
    selectedtable.appendChild(row);
    // RESET THE FORM
    document.querySelector('#id').value         = '';
    document.querySelector('#name').value       = '';
    document.querySelector('#extension').value  = '';
    document.querySelector('#email').value      = '';
    document.querySelector('#department').value = '';
    // SET FOCUS BACK TO THE ID TEXT BOX
    document.querySelector('#id').focus();
    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    count = selectedtable.rows.length - 1;
    document.querySelector('#empCount').innerHTML = '(' + count + ')';
});

// DELETE EMPLOYEE
selectedtable.addEventListener('click', (e) => {   
    if(confirm('Are you sure to detele this employee?')) {
        selectedtable.deleteRow(e.target.parentNode.parentNode.rowIndex);
    } 
    count = selectedtable.rows.length - 1;
    document.querySelector('#empCount').innerHTML = '(' + count + ')';
});