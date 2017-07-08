/**
  *  excerise 3 
  **/
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
		//为适应展开的二级菜单的高度做的改动
		if(document.getElementsByClassName("nav-second-active")[0]){
			var nav_second_height = parseInt(window.getComputedStyle(document.getElementsByClassName("nav-second-active")[0]).height);
			page_nav.style.height = (nav_one_height * nav_num + nav_second_height) + 'px';
		}else{
			page_nav.style.height = (nav_one_height * nav_num) + 'px';
		}
		
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

/**
  *  exercise 4
  表格 编辑&删除
  */
function show_mask(){
	var background = document.getElementsByClassName("mask")[0];
	background.style.display = "block";
	background.style.height = document.body.offsetHeight + 'px';
	background.style.width = document.body.offsetWidth + 'px';
	background.style.background = "rgba(125,125,125,0.5)";
	
	var body = document.getElementsByTagName("body")[0];
	body.style.overflow = "hidden";
}

function hide_edit_mask(){
	document.getElementsByClassName("mask")[0].style.display = "none";
	document.getElementsByClassName("edit-layout")[0].style.display = "none";
	document.getElementsByTagName("body")[0].style.overflow = "scroll";
}

function hide_delete_mask(){
	document.getElementsByClassName("mask")[0].style.display = "none";
	document.getElementsByClassName("delete-layout")[0].style.display = "none";
	document.getElementsByTagName("body")[0].style.overflow = "scroll";
}

//为表格编辑按钮添加click事件
var edit_button = document.getElementsByClassName("edit");
for(var x=0; x<edit_button.length;x++){
	edit_button[x].onclick = function mask(){
		show_mask();
		var edit_layout = document.getElementsByClassName("edit-layout")[0];
		edit_layout.style.display = "block";
		
		//为编辑界面的input设value
		var edit_tr = this.parentNode.parentNode;
		document.getElementsByName("Name")[0].value = edit_tr.children[0].innerHTML;
		document.getElementsByName("Content")[0].value = edit_tr.children[1].innerHTML;
		document.getElementsByName("Value")[0].value = edit_tr.children[2].innerHTML;

		//提交编辑的value
		var edit_submit = document.getElementById("submit-edit");
		edit_submit.onclick = function edit_submit(){
			edit_tr.children[0].innerHTML = document.getElementsByName("Name")[0].value;
			edit_tr.children[1].innerHTML = document.getElementsByName("Content")[0].value;
			edit_tr.children[2].innerHTML = document.getElementsByName("Value")[0].value;
			hide_edit_mask();
		};

	};	
}
//取消编辑
var edit_cancel = document.getElementById("cancel-edit");
	edit_cancel.onclick = function edit_cancel(){
		hide_edit_mask();
	};

//为表格删除按钮添加click事件
var delete_button = document.getElementsByClassName("delete");
for(var x=0; x<delete_button.length;x++){
	delete_button[x].onclick = function mask(){
		show_mask();
		var delete_layout = document.getElementsByClassName("delete-layout")[0];
		delete_layout.style.display = "block";

		var delete_tr = this.parentNode.parentNode;
		var edit_name = delete_tr.children[0].innerHTML;
		document.getElementById("delete-name").innerHTML = edit_name;		
		
		var delete_submit = document.getElementById("submit-delete");
		delete_submit.onclick = function delete_submit(){
			delete_tr.parentNode.removeChild(delete_tr);
			hide_delete_mask();
		};

		var delete_cancel = document.getElementById("cancel-delete");
		delete_cancel.onclick = function delete_cancel(){
			hide_delete_mask();
		};
	};
}

//页内导航折叠

var left_nav = document.getElementsByClassName("page-nav-item");
for(var y=0;y<left_nav.length;y++){
	left_nav[y].onclick = function(){
		if(this.className == "page-nav-item"){
			for(var a=0;a<left_nav.length;a++){
				left_nav[a].className = "page-nav-item";
				if(left_nav[a].nextElementSibling && left_nav[a].nextElementSibling.tagName == "UL"){
					left_nav[a].nextElementSibling.className = "nav-second-level";
				}
			}
			this.className = "page-nav-item page-nav-active";
			if(this.nextElementSibling.tagName == "UL"){
				this.nextElementSibling.className = "nav-second-active";
			}
		}else{
			this.className == "page-nav-item";
			if(this.nextElementSibling.tagName == "UL"){
				this.nextElementSibling.className = "nav-second-level";
			}
		}
	};
}