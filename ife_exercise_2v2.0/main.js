// js实现nav方法，还未完全实现
// var droplist = document.getElementsByClassName("droplist");
// for(var i=0;i<droplist.length;i++){
// 	droplist[i].style.visibility = "collapse";
// }

// function occur_droplist(obj){
// 	obj.style.background = "#575757";
// 	obj.style.height = "100%";
// 	//obj.lastChild.style.visibility = "visible";
// }

// function disappear_droplist(obj){
// 	obj.style.background = "inherit";
// 	//obj.lastChild.style.visibility = "visible";
// }

function nav_click(obj){

	obj.nextSibling.className = "";
	obj.className = "active";
	document.getElementById("tab-text").innerHTML = "标签试一下"+obj;
}

function change_city(obj){
	var country = obj.value;
	switch(country){
		case "":			
			break;
		case "China":
			document.getElementById("country_2").innerHTML = '<option value="Beijing">Beijing</option><option value="Shanghai">Shanghai</option><option value="Guangzhou">Guangzhou</option>';
			break;
		case "America":
			document.getElementById("country_2").innerHTML = '<option value="NewYork">NewYork</option><option value="Los Angeles">Los Angeles</option><option value="San Francisco">San Francisco</option>';
			break;
		default:
			break;
	}
}