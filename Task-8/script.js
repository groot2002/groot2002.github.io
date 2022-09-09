let count = 0;
let block;
function checkName(name){
	if ((name[0] >= '0' && name[0] <= '9') || name.trim() == '' || name.length > 10) return false;
	return true;
}
function checkImg(src){
 	if (src == undefined) return false;
 	let condition = src.slice(src.indexOf('.'));
 	if (condition == '.png' || condition == '.jpg') return true;
 	return false;
}
function checkCatagory(cata){
	let catagory = document.getElementsByTagName('select')[0].value;
	if (catagory == '' || catagory == 'No selected') return false;
	return true;
}
function checkInput(id){
	let itemName = document.getElementById('itemname').value;
  	let catagory = document.getElementsByTagName('select')[0].value;
  	let img = document.getElementById('input-img').value;
  	let notification = document.querySelector(id);
  	if (!checkName(itemName)){
  		notification.innerText = 'Tên không hợp lệ';
  		notification.style.display = 'block';
  		return false;
  	}
  	if (!checkCatagory(catagory)){
  		notification.innerText = 'Vui lòng chọn Catagory';
  		notification.style.display = 'block';
  		return false;
  	}
  	if (!checkImg(img)){
  		notification.innerText = 'Ảnh không hợp lệ';
  	 	notification.style.display = 'block';
  	 	return false;
  	}
  	notification.style.display = 'none';
  	return true;
}
function preview_image(event){
  let files = event.target.files;
  block = URL.createObjectURL(files[0]);
  document.getElementsByTagName('img')[0].src = block
}
function getData(event){
  event.preventDefault();
  if (!checkInput('#notification')) return;
  count++;
  let id = count;
  let itemName = document.getElementById('itemname').value;
  let catagory = document.getElementsByTagName('select')[0].value;
  let img = block;
  let imgValue = document.getElementById('input-img').value;
  let newRow = `
      <tr>
            <th scope="row">
              <p class=idItem-${id}>${id}</p>
            </th>
            <td>
              <input type="text" name="itemName" readonly="" value=${itemName} id=itemname-${id}>
              <p id="edit-notification${id}" class="edit-notification"></p>
            </td>
            <td>
              <select id=select-${id} disabled>
                <option readonly>${catagory}</option>
              </select>
            </td>
            <td>
              <img src=${img} alt="" id=image-${id} >
              <input type="file" name="" id=chooseFile-${id} accept = image/* value=${imgValue}>
            </td>
            <td>
              <button type="button" id=edit-button-${id} class="btn btn-primary edit-button" onclick=edit(this)>Edit</button>
              <button type="button" id=delete-button-${id} class="btn btn-danger delete-button" onclick=deleteProfile(this)>Delete</button>
            </td>
      </tr>
  `;
  document.getElementById('itemname').value = '';
  document.getElementsByTagName('select')[0].value = 'No selected';
  block = ''; 
  document.getlementsByTagName('img')[0].src = '';
  document.querySelector('tbody').innerHTML += newRow;
}
function findNum(str){
  let myArr = str.split('');
  let newArr = myArr.filter(function(element){
    if (element >= '0' && element <= '9') return element;
  })
  return newArr.join('');
}
function checkEditInput(id, stt){
	let itemName = document.querySelector(`#itemname-${stt}`).value;
  	let catagory = document.querySelector(`#select-${stt}`).value;
  	let img = document.querySelector(`#chooseFile-${stt}`).value;
  	let notification = document.querySelector(id);
  	if (!checkName(itemName)){
  		notification.innerText = 'Tên không hợp lệ';
  		notification.style.display = 'block';
  		return false;
  	}
  	if (!checkImg(img)){
  		notification.innerText = 'Ảnh không hợp lệ';
  	 	notification.style.display = 'block';
  	 	return false;
  	}
  	notification.style.display = 'none';
  	return true;
}
function edit(event) {
  let id = findNum(event.id);
  function preview_image1(event){
    let files = event.target.files;
    block = URL.createObjectURL(files[0]);
    document.querySelector(`#image-${id}`).src = block;
  }
  document.querySelector(`#itemname-${id}`).readOnly = false;
  document.querySelector(`#select-${id}`).disabled = false;
  document.querySelector(`.table #chooseFile-${id}`).style.display = 'block';
  document.querySelector(`.table #chooseFile-${id}`).onchange = preview_image1;
  document.querySelector(`#select-${id}`).innerHTML = `
    <select id=select-${id} value="Catagory 1">
          <option value="Category 1">Category 1</option>
          <option value="Category 2">Category 2</option>
          <option value="Category 3">Category 3</option>
    </select>
  `;
  	document.querySelector(`#edit-button-${id}`).innerText = 'Save';
  	function Save(event){
  		if (!checkEditInput(`#edit-notification${id}`,id)) return false;
    	document.querySelector(`#itemname-${id}`).readOnly = true;
    	document.querySelector(`.table #chooseFile-${id}`).style.display = 'none';
    	document.querySelector(`#select-${id}`).disabled = true;
    	document.querySelector(`#edit-button-${id}`).innerText = 'Edit';
    	return true;
	}
	event.onclick = Save;
	while (event.onclick == false){
		event.onclick = Save;
	}
}
function deleteProfile(event){
  count--;
  let id = findNum(event.id);
  let trTag = document.getElementsByTagName('tr')[id];
  trTag.parentNode.removeChild(trTag);
}
document.querySelector('#input-img').onchange = preview_image;
document.querySelector('#form').onsubmit = getData;