/*
* @Author: lj
* @Date:   2017-07-17 16:57:51
* @Last Modified by:   lj
* @Last Modified time: 2017-07-17 23:05:26
*/

'use strict';




// 为缩略图文字设置宽
var thumbnail_total_width = document.getElementsByClassName("col-md-4")[0].offsetWidth;
var thumbnail_width = thumbnail_total_width - 30;
var thumbnail_text = document.getElementsByClassName("text");
for(var i=0;i<thumbnail_text.length;i++){
	thumbnail_text[i].style.width = thumbnail_width + "px";
}

//为右侧竖栏文字设置宽
var right_column = document.getElementsByClassName("col-md-4")[3].offsetWidth;
var right_text = document.getElementsByClassName("newpic-text")[0];
right_text.style.width = (right_column - 65) + "px";

//为左侧图片文字展示栏的图片设置与文字相同的高
var left_img = document.getElementsByClassName("col-md-5");
var left_text = document.getElementsByClassName("col-md-7");
var highest = 0;
for(var j=0;j<left_img.length;j++){
	if(left_img[j].offsetHeight < left_text[j].offsetHeight  && left_text[j].offsetHeight > highest){	
		highest = left_text[j].offsetHeight;		
	}
}
if(highest){
	for(var x=0;x<left_img.length;x++){
			left_img[x].style.height = highest + "px";
			left_img[x].children[0].style.height = "100%";
		}
}