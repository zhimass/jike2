
window.onload = function () {
	var container = document.querySelector('#container'),
		list = document.querySelector('#list'),
		img = document.querySelector('img'),
		button = document.querySelector('#button'),
		on = document.querySelector('.on'),
		prev = document.querySelector('#prev'),
		next = document.querySelector('#next'),
		animated = false,
		index = 1,
		timer;

		function animate(offset){
			var newLeft = parseInt(list.style.left) + offset;
			list.style.left = newLeft + 'px';
			if(newLeft > -810){
				list.style.left = -3240 + 'px';
			}
			if(newLeft < -3240){
				list.style.left = -810 + 'px';
			}
		}
		next.onclick = function(){
			animate(-810);//向左移动
		}
		prev.onclick = function(){
			animate(810);
		}   
		//箭头点击   封装成一个函数
		

	login = function(){
		document.getElementById('login-kuang').style.display = 'block';
		document.getElementById('bg-mask').style.display = 'block';
	}
}




