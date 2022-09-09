let block, numberOfStudent = (localStorage.getItem('student') === null) ? 0 : (JSON.parse(localStorage.getItem('student'))).length;
function validName(){
	let inputName = document.getElementById('username').value;
	if (inputName.trim() == '' || !inputName.split(' ').every(function(element){return ((element >= 'a' && element <= 'z') || (element >= 'A' && element <= 'Z') || element == ' ');}) || inputName.length < 10) return false;
	else return true;
}
function validAge(){
	let inputAge = document.getElementById('userAge').value;
	if (inputAge <= 0 || inputAge >= 100) return false;
	else return true;
}
function validGender(){
	let inputGender = document.getElementById('userGender').value;
	if (inputGender.toUpperCase() != 'NAM' && inputGender.toUpperCase() != 'NỮ') return false;
	else return true;
}
function validLabel(event){
	let label = event.nextElementSibling;
	event.style.border = '3px solid gray';
	event.placeholder = 'Enter here';
	label.style.top = '-1.5vw';
	label.style.fontSize = '18px';
	label.style.color = 'gray';
	label.style.transform = 'none';
}
function getImage(event){
  	block = URL.createObjectURL(event.files[0]);
  	event.nextElementSibling.src = block;
  	function validImage(){
		if (event.value.slice(event.value.indexOf('.')) != '.jpg' && event.value.slice(event.value.indexOf('.')) != '.png') return false;
		return true;
	}
	if (validImage()) return true;
	else return false;
}
function getData(){
	let inputName = document.getElementById('username').value;
	let inputAge = document.getElementById('userAge').value;
	let inputGender = document.getElementById('userGender').value;
	let inputID = document.getElementById('userID').value;
	let inputClass = document.getElementById('userClass').value;
	if (!validName(inputName)) {
		document.getElementById('errorName').innerText = 'Tên không hợp lệ';
		document.getElementById('errorName').style.display = 'block';
		return;
	}else{
		document.getElementById('errorName').style.display = 'none';
	}
	if (!validAge(inputAge)) {
		document.getElementById('errorAge').innerText = 'Tuổi không hợp lệ';
		document.getElementById('errorAge').style.display = 'block';
		return;
	}else{
		document.getElementById('errorAge').style.display = 'none';
	}
	if (!validGender(inputGender)) {
		document.getElementById('errorGender').innerText = 'Giới tính không hợp lệ';
		document.getElementById('errorGender').style.display = 'block';
		return;
	}else{
		document.getElementById('errorGender').style.display = 'none';
	}
	if (inputID.trim() == ''){
		document.getElementById('errorID').innerText = 'Mã sinh viên không hợp lệ';
		document.getElementById('errorID').style.display = 'block';
		return;
	}else{
		document.getElementById('errorID').style.display = 'none';
	}
	if (inputClass.trim() == ''){
		document.getElementById('errorClass').innerText = 'Lớp không hợp lệ';
		document.getElementById('errorClass').style.display = 'block';
		return;
	}else{
		document.getElementById('errorClass').style.display = 'none';
	}
	if (!getImage(document.getElementById('userImage'))){
		document.getElementById('errorImage').innerText = 'Ảnh không hợp lệ';
		document.getElementById('errorImage').style.display = 'block';
		return;
	}else{
		document.getElementById('errorImage').style.display = 'none';
	}
	let newRow = `
		<tr>	
	      	<th scope="row">
	      		<p>${numberOfStudent + 1}</p>
	  		</th>
	      	<td>
	      		<input type="text" name="name" value="${inputName}" readonly="true">
	      	</td>
	      	<td>
	     	 	<input type="text" name="age" value="${inputAge}" readonly="true">
	  		</td>
	      	<td>
	      		<input type="text" name="gender" value="${inputGender}" readonly="true">
	      	</td>
	      	<td>
	      		<input type="text" name="id" value="${inputID}" readonly="true">
	      	</td>
	      	<td>
	      		<input type="text" name="class" value="${inputClass}" readonly="true">
	      	</td>
	      	<td>
	      		<img src="${block}" alt="">
	      	</td>
	      	<td>
	      		<button type="button" class="btn btn-success" onclick=editSV(this)>Edit</button>
	      		<button type="button" class="btn btn-danger" onclick=deleteSV(this)>Delete</button>
	      	</td>
	    </tr>
	`
	let newStudent = {
		name: inputName,
		age: inputAge,
		gender: inputGender,
		id: inputID,
		class: inputClass,
		image: block,
	}
	if (localStorage.getItem('student') == null) localStorage.setItem('student',JSON.stringify([]));
	localStorage.setItem('student',JSON.stringify(JSON.parse(localStorage.getItem('student')).concat([newStudent])));
	document.querySelector('.table-list tbody').innerHTML += newRow;
	numberOfStudent += 1;
	document.getElementById('username').value = '';
	document.getElementById('userAge').value = '';
	document.getElementById('userGender').value = '';
	document.getElementById('userID').value = '';
	document.getElementById('userClass').value = '';
	document.getElementById('userImage').nextElementSibling.src = '';
	block = '';
	alert('Thêm thành công');
}
function editSV(event){
	console.log(event);
	event.innerText = 'Save';
	let inputTag = event.parentElement.parentElement.getElementsByTagName('input');
	for (let node = 0;node < inputTag.length;node++){
		inputTag[node].readOnly=false;
		inputTag[node].style.border = '2px solid gray';
		inputTag[node].style.boxShadow = '2px  3px 9px gray'
	}
	function Save(){
		event.innerText = 'Edit';
		for (let node = 0;node < inputTag.length;node++){
			inputTag[node].readOnly=true;
			inputTag[node].style.border = 'none';
			inputTag[node].style.boxShadow = 'none'
		}
	}
	event.onclick=Save;
}
function deleteSV(event){
	let condition = false;
	let node = event.parentElement.parentElement;
	let pTag = document.querySelectorAll('table p');
	for (let i = 0;i < pTag.length;i++){
		if (condition) pTag[i].innerText = Number(pTag[i].innerText) - 1;
		if (pTag[i].parentElement.parentElement == node) condition = true;
	}
	let studentName = node.querySelector('input[name = "name"]').value;
	let students = JSON.parse(localStorage.getItem('student'));
	students.splice((students.indexOf(students.find((element, index) => {
		return element.name == studentName;
	}))), 1)
	localStorage.setItem('student', JSON.stringify(students));
	event.parentElement.parentElement.remove();
	numberOfStudent -= 1;
}
function toolActive(){
	let activeIcon = document.querySelector('.activeIcon');
	let barOption = document.getElementById('option');
	let pTag = barOption.getElementsByTagName('p');
	barOption.style.width = '40vw';
	function apear(){
		for (let i = 0;i < pTag.length;i++){
			pTag[i].style.display = 'block';
	  	};
	}
	setTimeout(apear,1000);
}
function activeAddSV(){
	let activeTag = document.getElementById('option').getElementsByTagName('p');
	activeTag[0].style.color = '#3B44B0';
	activeTag[1].style.color = 'black';
	activeTag[2].style.color = 'black';
	document.querySelector('form').style.transform = 'scale(1)';
	document.querySelector('#searching').style.transform = 'scale(0)';
	document.querySelector('.searching-table').style.transform = 'scale(0)';
	document.querySelector('.table-list').style.transform = 'scale(0)';
}
function activeSearchSV(){
	let activeTag = document.getElementById('option').getElementsByTagName('p');
	activeTag[0].style.color = 'black';
	activeTag[1].style.color = '#3B44B0';
	activeTag[2].style.color = 'black';
	document.querySelector('form').style.transform = 'scale(0)';
	document.querySelector('#searching').style.transform = 'scale(1)';
	document.querySelector('.searching-table').style.transform = 'scale(1)';
	document.querySelector('.table-list').style.transform = 'scale(0)';

}
function activeDS(){
	let activeTag = document.getElementById('option').getElementsByTagName('p');
	activeTag[0].style.color = 'black';
	activeTag[1].style.color = 'black';
	activeTag[2].style.color = '#3B44B0';
	document.querySelector('form').style.transform = 'scale(0)';
	document.querySelector('#searching').style.transform = 'scale(0)';
	document.querySelector('.searching-table').style.transform = 'scale(0)';
	document.querySelector('.table-list').style.transform = 'scale(1)';
}
function findSV(){
	let nameTag = document.querySelector('.table-list').querySelectorAll('input[name="name"]');
	let nameSearch = document.getElementById('nameSearch').value;
	let tableFinding = document.querySelector('.searching-table');
	console.log(tableFinding);
	for (let i = 0;i < nameTag.length;i++){
		if (nameSearch.toLowerCase() == nameTag[i].value.toLowerCase()){
			console.log(nameTag[i].parentElement.parentElement);
			tableFinding.querySelector('tbody').innerHTML = nameTag[i].parentElement.parentElement.outerHTML;
			return;
		}
	}
	alert("Không tồn tại sinh viên");
}
window.addEventListener('load', toolActive);
window.addEventListener('load', function(){
	let students = (localStorage.getItem('student') === null) ? [] : JSON.parse(localStorage.getItem('student'));
	for (let i = 0;i < students.length;i++){
		let student = students[i];
		let newRow = `
			<tr>	
		      	<th scope="row">
		      		<p>${i + 1}</p>
		  		</th>
		      	<td>
		      		<input type="text" name="name" value="${student.name}" readonly="true">
		      	</td>
		      	<td>
		     	 	<input type="text" name="age" value="${student.age}" readonly="true">
		  		</td>
		      	<td>
		      		<input type="text" name="gender" value="${student.gender}" readonly="true">
		      	</td>
		      	<td>
		      		<input type="text" name="id" value="${student.id}" readonly="true">
		      	</td>
		      	<td>
		      		<input type="text" name="class" value="${student.class}" readonly="true">
		      	</td>
		      	<td>
		      		<img src="${student.image}" alt="">
		      	</td>
		      	<td>
		      		<button type="button" class="btn btn-success" onclick=editSV(this)>Edit</button>
		      		<button type="button" class="btn btn-danger" onclick=deleteSV(this)>Delete</button>
		      	</td>
		    </tr>
		`;
		document.querySelector('.table-list tbody').innerHTML += newRow;
	}
	
})