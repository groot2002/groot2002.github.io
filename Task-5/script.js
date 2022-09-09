let count = -1;
function activeIcon(event){
	event.style.color = '#2D88FF';
	event.style.borderBottom = '3px solid #2D88FF';
	event.style.borderRadius = '0px';
	let midIcon = document.getElementsByClassName('mid-icon');
	for (let i = 0;i < midIcon.length;i++){
		if (midIcon[i] != event){
			midIcon[i].style.color = '#8A8D91';
			midIcon[i].style.borderBottom = 'none';
			midIcon[i].style.borderRadius = '5px';
		}
	}
}
function activeA(event){
	event.style.color = '#2D88FF';
	event.style.borderBottom = '3px solid #2D88FF';
	event.style.borderRadius = '0px';
	let a = document.querySelectorAll('.option .left a');
}
function apppearMessage(){
	count++;
	let messageBlock = document.getElementsByClassName('message-appear');
	messageBlock[0].innerHTML += '<div class="message"> <div class="block"><i class="fas fa-times-circle"  onclick=removeMessage()></i> <i class="fas fa-minus" onclick=closeMessage()></i><i class="fas fa-phone"></i><i class="fas fa-video"></i></div></div>';
}
function closeMessage(){
	let messageBlock = document.getElementsByClassName('message');
	messageBlock[0].style.display = 'none';
}
function removeMessage(){
	let messageBlock = document.getElementsByClassName('message');
	messageBlock[0].parentNode.removeChild(messageBlock[0]);
	document.getElementById('avatar-icon').parentNode.removeChild(document.getElementById('avatar-icon'));
}
function closeAvatar(){
	document.getElementById('avatar-icon').parentNode.removeChild(document.getElementById('avatar-icon'));
}