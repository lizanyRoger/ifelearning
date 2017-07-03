var page_nav = document.getElementsByClassName("page-nav")[0];
var window_height = document.documentElement.clientHeight;  //本来应该是window.innerHeight获取的，但是现在值有些问题
var table = document.getElementsByClassName("page-table")[0];
var table_head = document.getElementsByTagName("thead")[0];
var table_th = Array.from(document.getElementsByClassName("thead-row")[0].children);
var table_tb = Array.from(document.getElementsByTagName("tr")[1].children);

window.onscroll = function(){
	//左侧导航条高度
	if(document.body.scrollTop > 0){
		var nav_num = document.getElementsByClassName("page-nav-item").length;
		var nav_one_height = parseInt(window.getComputedStyle(document.getElementsByClassName("page-nav-item")[0]).height);
		page_nav.style.height = (nav_one_height * nav_num) + 'px';
	}
	if(document.body.scrollTop > table.offsetTop){
		table_head.style.position = "fixed";
		table_head.style.top = "0";
		table_head.style.width = window.getComputedStyle(document.getElementsByTagName("tbody")[0]).width;
		document.getElementsByClassName("thead-row")[0].style.width = window.getComputedStyle(document.getElementsByTagName("tbody")[0]).width;
		for(var i=0; i<table_th.length;i++){
			table_th[i].style.width = window.getComputedStyle(table_tb[i]).width;
		}
	}
	if(document.body.scrollTop < table.offsetTop){
		//还原
		table_head.style.position = "static";
	}
};

function modify_page_nav(){
	if(document.body.scrollTop === 0){
		page_nav.style.height = (parseInt(window_height) - parseInt(page_nav.offsetTop)) + 'px';
		page_nav.style.overflow = "scroll";
	}
}

function recover_page_nav(){
	page_nav.style.overflow = "visible";
	// page_nav.style.height = "auto";
}

