var sizeScreen = window.innerWidth;
if(sizeScreen >= 1200){
	document.getElementById('container-landing').classList.remove('small-pc-landing');
	document.getElementById('container-landing').classList.remove('tablet-landing');
	document.getElementById('container-landing').classList.remove('mobile-landing');
	document.getElementById('container-landing').classList.add('container');
}
if(sizeScreen >= 1100 && sizeScreen < 1200){
	document.getElementById('container-landing').classList.add('small-pc-landing');
	document.getElementById('container-landing').classList.remove('tablet-landing');
	document.getElementById('container-landing').classList.remove('mobile-landing');
	document.getElementById('container-landing').classList.remove('container');
}
if(sizeScreen >= 992 && sizeScreen < 1100){
	document.getElementById('container-landing').classList.remove('small-pc-landing');
	document.getElementById('container-landing').classList.add('tablet-landing');
	document.getElementById('container-landing').classList.remove('mobile-landing');
	document.getElementById('container-landing').classList.remove('container');
}
if(sizeScreen >= 768 && sizeScreen < 992){
	document.getElementById('container-landing').classList.remove('small-pc-landing');
	document.getElementById('container-landing').classList.remove('tablet-landing');
	document.getElementById('container-landing').classList.add('mobile-landing');
	document.getElementById('container-landing').classList.remove('container');
}
