
let buttonList = document.getElementById('activeList');
buttonList.onclick = function(){
	document.getElementById('TypeList').style.display = 'block';
	buttonList.onclick = function(){
		document.getElementById('TypeList').style.display = 'none';
	}
}
window.onload = function(){
	let jobTags = document.getElementsByClassName('job');
	for (tag of jobTags){
		tag.style.transform = 'scale(1)';
	}
}