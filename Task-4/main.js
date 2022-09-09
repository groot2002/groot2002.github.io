function check(string){
	for (let i = 0;i < string.length;i++){
		if (string[i] >= '0' && string[i] <= '9') return false;
	}
	return true;
}
function add(){
	if (check(document.getElementById('username').value) && Number(document.getElementById('user-age').value && document.getElementById('username').value.trim() !== '') > 0){
	 	document.getElementById('name').append(document.getElementById('username').value);
	 	document.getElementById('age').append(document.getElementById('user-age').value);
	 	document.getElementById('name').innerHTML = document.getElementById('name').innerHTML + '<br></br>';
	 	document.getElementById('age').innerHTML = document.getElementById('age').innerHTML + '<br></br>';
	}else  $('#myModal').modal('show');
}
