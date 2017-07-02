var page_nav = document.getElementsByClassName("page-nav")[0];
var window_height = document.documentElement.clientHeight;  //本来应该是window.innerHeight获取的，但是现在值有些问题
var table = document.getElementsByClassName("page-table")[0];
var table_head = document.getElementsByTagName("thead")[0];

window.onscroll = function(){
	if(document.body.scrollTop > 0){
		page_nav.style.height = "auto";
	}
	if(document.body.scrollTop > table.offsetTop){
		table_head.style.position = "fixed";
		table_head.style.top = "0px";
		table_head.style.width = table.clientWidth + 'px';
		document.getElementsByClassName("thead-row")[0].style.width = "100%";
	}
	if(document.body.scrollTop < table.offsetTop){
		//还原
		table_head.style.position = "";
		table_head.style.top = "";
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
	page_nav.style.height = "auto";
}

