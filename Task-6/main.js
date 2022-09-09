let tagUl = document.getElementsByTagName('ul');
checkUserName = (str) => {
	for (x of str){
		if (x >= '0' && x <= '9') return false;
	}
	return true;
}
async function loadData(){
	let information;
	try {
		information = await axios.get('https://6065d36cb8fbbd00175677e7.mockapi.io/s-group/users');
	}catch(err){
		alert('Thông tin lỗi: ' + err);
	}
	for (x of information.data){
		tagUl[0].innerHTML += '<li>' + 'Name: ' + x['name'] + ' Id: ' + x['id'] + '</li>';
	}
}
loadData();
async function addUser(e){
	let result;
	e.preventDefault();
	let userName = document.getElementById('username').value;
	if (userName.trim() !== '' && checkUserName(userName)){
		let newUser = {
			'name': userName.trim()
		}
		try {
			result = await axios.post('https://6065d36cb8fbbd00175677e7.mockapi.io/s-group/users',newUser);
		}catch(err){
			alert('Thông tin lỗi: '+ err);
		}
		tagUl[0].innerHTML = '';
		await loadData();
	}else{
		alert('Invalid input');
	}	
	return false;
}
