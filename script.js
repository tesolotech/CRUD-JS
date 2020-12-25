var selectedRow = null;

function onFormSubmit() {
	// body...
	let formData = readFormData();
	if(selectedRow == null){
		insertData(formData);
	}else{
		updateRecord(formData);
	}
	resetRecord();	
}
function readFormData(){
	let dataList = {};
	dataList["name"] = document.getElementById("name").value;
	dataList["mobile"] = document.getElementById("mobile").value;
	dataList["email"] = document.getElementById("email").value;
	dataList["password"] = document.getElementById("password").value;
	return dataList;
}
function insertData(data){
	let tableData = document.getElementById("tableview").getElementsByTagName('tbody')[0];

	let newRow = tableData.insertRow(tableData.length);

	cell = newRow.insertCell(0);
	 cell.innerHTML = data.name;

	 cell1 = newRow.insertCell(1);
	 cell1.innerHTML = data.mobile;

	 cell2 = newRow.insertCell(2);
	 cell2.innerHTML = data.email;

	 cell3 = newRow.insertCell(3);
	 cell3.innerHTML = data.password;

	 cell4 = newRow.insertCell(4);
	 cell4.innerHTML = `   <a href="" onClick = "onEdit(this)">edit</a>
	 						<a href="" onClick = "onDelete(this)">delete</a>`;
}
function resetRecord() {
	// body...
	document.getElementById("name").value = "";
	document.getElementById("mobile").value ="";
	document.getElementById("email").value = "";
	document.getElementById("password").value = "";

	selectedRow = null;
}

function onEdit(tableData) {
	// body...
	selectedRow = tableData.parentElement.parentElement;
	document.getElementById("name").value = selectedRow.cells[0].innerHTML;
	document.getElementById("mobile").value = selectedRow.cells[1].innerHTML;
	document.getElementById("email").value = selectedRow.cells[2].innerHTML;
	document.getElementById("password").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(fData) {
	// body...
	selectedRow.cells[0].innerHTML = fData.name;
	selectedRow.cells[1].innerHTML = fData.mobile;
	selectedRow.cells[2].innerHTML = fData.email;
	selectedRow.cells[3].innerHTML = fData.password;
}

function onDelete(dData) {
	// body...
	if(confirm('Are you sure to delete this record ?')){
			row = dData.parentElement.parentElement;
			document.getElementById("tableview").deleteRow(row.rowIndex);
			resetRecord();
	}
}


