// js实现nav方法
var droplist = document.getElementsByClassName("droplist");
for(var i=0;i<droplist.length;i++){
	droplist[i].style.visibility = "collapse";
}

function occur_droplist(obj){
	obj.style.background = "#575757";
	obj.style.height = "100%";
	obj.children[1].style.visibility = "visible";
}

function disappear_droplist(obj){
	obj.style.background = "inherit";
	obj.children[1].style.visibility = "collapse";
}

//js实现轮播图
var wrap = document.querySelector(".carousel-wrap");
var index = 0;
var timer = null;
var dots = document.getElementsByClassName("carousel-tip");

function showCurrentDot () {
  for(var i = 0; i < dots.length; i++){
    dots[i].className = "carousel-tip";
  }
  dots[index].className = "carousel-tip carousel-tip-active";

}

function next_pic () {  //直接变为下一张图片，无效果
      var newLeft;
      if(wrap.style.left === "-2880px"){
        newLeft = 0;
      }else{
        newLeft = parseInt(wrap.style.left)-960;
      }
      wrap.style.left = newLeft + "px";
      index++;
      if(index > 3){
        index = 0;
      }
      showCurrentDot();
    }


function slide_next_pic() {  //滑动到下一张图片
	var time = setInterval(function() {
		 wrap.style.left = (parseInt(wrap.style.left)-10) +'px';
		 
		 if((parseInt(wrap.style.left)%960)===0){
		 	clearInterval(time);
		 	index++;
		 	if( wrap.style.left === "-3840px"){
		 		wrap.style.left = "0px";
		 		index = 0;
		 	}
		 	showCurrentDot();
		 }
	},5);

}

function autoPlay () {
  timer = setInterval(function () {
    slide_next_pic();
  },2000);
}

autoPlay();

//js实现tab
var tab = document.getElementsByClassName("tab-item");
var tab_text = document.getElementsByClassName("tab-control");
for(var i=0;i<tab.length;i++){
	tab[i].onclick = function(){
		for(var j=0;j<tab.length;j++){
			tab[j].className = "tab-item";
			tab[j].style.background = "#fff";
			tab[j].style.color = "#000";
			this.className = "tab-item active";
			this.style.background = "#3B3B3B";
			this.style.color = "#fff";
			tab_text[j].style.display = "none";
			if(this == tab[j]){
				tab_text[j].style.display = "block";
				}
			}		
		}
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