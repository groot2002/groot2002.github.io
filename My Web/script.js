function changeColorNavBar(event){
	event.style.color = '#3B44B0';
	event.querySelector('span').style.display = 'block';
	let pTag = document.querySelectorAll('#nav-bar .center p');
	for (let i = 0;i < pTag.length;i++){
		if (pTag[i] != event){
			pTag[i].style.color = '#9A9EA1';
			pTag[i].querySelector('span').style.display = 'none';
		}
	}
}
window.onload = function (){
	let myImg = document.getElementById('carouselExampleFade');
	let img1 = document.getElementById('intro-image1');
	let img2 = document.getElementById('intro-image2');
	let img3 = document.getElementById('intro-image3');
	let img4 = document.getElementById('intro-image4');
	myImg.style.transform = 'scale(1)';
	img1.style.transform = 'scale(1)';
	img2.style.transform = 'scale(1)';
	img3.style.transform = 'scale(1)';
	img4.style.transform = 'scale(1)';
	let i = 0;
	let text = 'Hello, My name is Rôn.<br>Welcome you to my Website.';
	let brTagIndex = text.indexOf('<br>');
	let codeIntroduce = document.getElementById('code-introduce');
	function typeWriter(){
		if (i < text.length){
			if (i == brTagIndex) {
				codeIntroduce.innerHTML += '<br>';
				i += 4;
			}else{
				codeIntroduce.innerHTML += text[i];
				i++;
			}
			setTimeout(typeWriter, 50);

		}
	}
	typeWriter();
}
