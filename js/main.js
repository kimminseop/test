var index = 1;
var array = new Array(9);
var list = document.getElementsByClassName("menu_list");
var item = list[0].getElementsByClassName("menu_box");
console.log("before:" + array);
//document.getElementsByClassName

for (var i = 0; i < item.length; i++) {
	array[i] = item[i];
}

function onkeyDown() {
	var keyCode = window.event.keyCode;
	console.log(window.event.keyCode);
	
	if (keyCode == 38) {
		focusUp();		
	} else if (keyCode == 40) {
		focusDown();
	} else {
	}

}

function focusing(item, index) {
	console.log(item);
	console.log(item.className);
	
	//메뉴리스트의 포커스를 다지운다.
	for(var i =0; i<array.length; i++){
		array[i].className = "menu_box";
	}			
	//입력을 원하는 곳에 포커스를 준다.
	item.className += " focus";		
		
}

function removeMenu(index){
	var sblist = document.getElementById("submenu_list"); 
	var li = document.getElementById("test"+index);  	 
	sblist.removeChild(li);
}

function addMenu(index){
	var sblist = document.getElementById("submenu_list"); 
	var li = document.getElementById("test"+index);  	 
	sblist.appendChild(li);
}

function resetMenuBox(){
	
	
	var sblist = document.getElementById("submenu_list");			
	var li = document.createElement("li");      
	var t = document.createTextNode("CJ E&amp;M 무제한 이용권");
	li.appendChild(t);
	
	
	var li2 = document.createElement("li");      
	var t2 = document.createTextNode("실시간 인기순위");
	li2.appendChild(t2);
	
	
	var li3 = document.createElement("li");      
	var t3 = document.createTextNode("방금 놓친 CJ E&amp;M");
	li3.appendChild(t3);
	
	var li4 = document.createElement("li");      
	var t4 = document.createTextNode("tvN");
	li4.appendChild(t4);
	 	
	
	var li5 = document.createElement("li");      
	var t5 = document.createTextNode("Mnet");
	li5.appendChild(t5);
	 	
	
	var li6 = document.createElement("li");      
	var t6 = document.createTextNode("온스타일");
	li6.appendChild(t6);
	 	
	
	var li7 = document.createElement("li");      
	var t7 = document.createTextNode("XTM");
	li7.appendChild(t7);
	 	
	
	var li8 = document.createElement("li");      
	var t8 = document.createTextNode("Olive");
	li8.appendChild(t8);
		
	
	var li9 = document.createElement("li");      
	var t9 = document.createTextNode("스토리온");
	li9.appendChild(t9);
		
	switch(index){
	case 1:
	sblist.appendChild(li);
	break;
	case 2:
	sblist.appendChild(li2);
	break;
	case 3:
	sblist.appendChild(li3);
	break;
	case 4:
	sblist.appendChild(li4);
	break;
	case 5:
	sblist.appendChild(li5);
	break;
	case 6:
	sblist.appendChild(li6);
	break;
	case 7:
	sblist.appendChild(li7);
	break;
	case 8:
	sblist.appendChild(li8);
	break;
	case 9:
	sblist.appendChild(li9);
	break;
	default :
		
}
	}


function focusUp() {
	if (index > 0) {
		index--;
		focusing(array[index], index);		
	}else{
		index=9;		
	}	
	resetMenuBox();
	console.log("keyUp" + index);

}

function focusDown() {
	if (index < 9) {
		index++;
		removeMenu(index);
		focusing(array[index], index);	
	}else{
		index=0;		
	}
	console.log("keyDown" + index);
}


