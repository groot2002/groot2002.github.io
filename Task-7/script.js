let inpHTMLCollection = document.getElementsByClassName('input');
let outputHTMLCollection = document.getElementsByClassName('output');
let today = new Date();
// Test 1
function test1(){
	outputHTMLCollection[0].value = `Now is ${today.getHours()}:${today.getMinutes()}`;
}
// Test 2
function test2(){
	let date = today.getDate();
	let month = today.getMonth() + 1;
	let year = today.getFullYear();
	outputHTMLCollection[1].value = `Today is ${month} - ${date} - ${year}   ||   ${month}/${date}/${year}    ||    ${date} - ${month} - ${year}    ||    ${date}/${month}/${year}`;
}
// Test 3
function test3(){
	let inp = inpHTMLCollection[2].value;
	if (inp.length == 0) alert('Invalid input');
	 	else{
	 		outputHTMLCollection[2].value = 'True';
			for (let i = 0;i < inp.length - 1;i++){
				if ((inp[i] < '0' || inp[i] > '9')|| (inp[i + 1] < '0' || inp[i + 1] > '9')){
					alert('Invalid Input. Numbers only');
					outputHTMLCollection[2].value = '';
					break;
				}
				if (inp[i + 1] - inp[i] < 0) {
					outputHTMLCollection[2].value = 'False';
					break;
				}
			}
	 	}
}
// Test 4
function test4(){
	let inp = inpHTMLCollection[3].value;
	outputHTMLCollection[3].value = '';
	for (x of inp){
		if ((x >= 'a' && x <= 'z') || (x >= 'A' && x <= 'Z')){
			outputHTMLCollection[3].value += String.fromCharCode(x.charCodeAt(0) + 1);		
		}else{
			alert('Invalid Input. Alphabet only');
			outputHTMLCollection[3].value = '';
			break;
		}
	}
}
// Test 5
function test5(){
	let inp = inpHTMLCollection[4].value;
	if (inp.length < 3 || inp.length % 2 === 0) alert('Invalid Input');
		else outputHTMLCollection[4].value = inp.slice(Math.floor(inp.length/2) - 1,Math.floor((inp.length/2) + 2));
}
// Test 6
function test6(){
	let inp = inpHTMLCollection[5].value;
	let arr, result = [];
	let count = 1,value;
	if (inp === '') alert('Invalid Input');
	if (inp[0] === '[' && inp[inp.length - 1] == ']') arr = inp.slice(1,inp.length - 1).split(',');
		else arr = inp.split(',');
	for (let i = 0;i < arr.length;i++) arr[i] = Number(arr[i].trim());
	if (arr.length == 1) outputHTMLCollection[5].value = `Value ${arr[0]}: 1 lần`;
	arr.sort();
	for (let i = 0;i < arr.length;i++) {
		let check = 1;
		while (arr[i] === arr[i + 1]){
			check++;
			i++;
		}
		if (check === count){
			result.push(arr[i]);
		}else if(check > count){
			count = check;
			while (result.length > 0){
				result.pop();
			}
			result.push(arr[i]);
		}	
	}
	outputHTMLCollection[5].value = `Value {${result}}: ${count} lần`;
}
// Test 7
function test7(){
	let inp = inpHTMLCollection[6].value;
	if (inp.toLowerCase().indexOf('java') !== -1) outputHTMLCollection[6].value = 'True';
		else outputHTMLCollection[6].value = 'false';
}
// Test 8
function test8(){
	let inp = Number(inpHTMLCollection[7].value);
	let result = 'Tháng ';
	switch (inp){
		case 1:
			result += 'Một';
			break;
		case 2:
			result += 'Hai';
			break;
		case 3:
			result += 'Ba';
			break;
		case 4:
			result += 'Tư';
			break;
		case 5:
			result += 'Năm';
			break;
		case 6:
			result += 'Sáu';
			break;
		case 7:
			result += 'Bảy';
			break;
		case 8:
			result += 'Tám';
			break;
		case 9:
			result += 'Chín';
			break;
		case 10:
			result += 'Mười';
			break;
		case 11:
			result += 'Mười một';
			break;
		case 12:
			result += 'Mười hai';
			break;
	}
	outputHTMLCollection[7].value = result;
}
// Test 9
function test9(){
	let inp = inpHTMLCollection[8].value;
	let words = inp.split(' ');
	let maxLength = 0;
	for (word of words){
		if (word.length > maxLength){
			maxLength = word.length;
			outputHTMLCollection[8].value = word;
		}
	}
}
// Test 10
function checkSNT(n){
	if (n < 2) return false;
	for (let i = 2;i <= Math.sqrt(n);i++){
		if (n % i == 0) return false;
	}
	return true;
}
function test10(){
	let a = Number(document.getElementById('a-test10').value);
	let b = Number(document.getElementById('b-test10').value);
	outputHTMLCollection[9].value = '';
	for (let i = a;i <= b;i++){
		if (checkSNT(i)) outputHTMLCollection[9].value += i.toString() + ' ';
	}
}
test1();
test2();