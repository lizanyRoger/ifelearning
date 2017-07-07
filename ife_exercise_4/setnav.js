/*设置左侧页内导航*/

var nav_left_json = {
    "title":"nav-left",
    "data":[
        {
            "nav":"Level 1 Some Text",
            "nav_children":[
                {
                    "nav_child":"Level 2 Some Text"
                },
                {
                    "nav_child":"Level 2 Some Text"
                },
                {
                    "nav_child":"Level 2 Some Text"
                }
            ]
        },
        {
            "nav":"Level 1 Some Text",
            "nav_children":[
                {
                    "nav_child":"Level 2 Some Text"
                },
                {
                    "nav_child":"Level 2 Some Text"
                },
                {
                    "nav_child":"Level 2 Some Text"
                }
            ]
        },
        {
            "nav":"Level 1 Some Text",
            "nav_children":[
                {
                    "nav_child":"Level 2 Some Text"
                },
                {
                    "nav_child":"Level 2 Some Text"
                },
                {
                    "nav_child":"Level 2 Some Text"
                }
            ]
        },
        {
            "nav":"Level 1 Some Text",
            "nav_children":[
                {
                    "nav_child":"Level 2 Some Text"
                },
                {
                    "nav_child":"Level 2 Some Text"
                },
                {
                    "nav_child":"Level 2 Some Text"
                }
            ]
        },
        {
            "nav":"Level 1 Some Text",
            "nav_children":[
                {
                    "nav_child":"Level 2 Some Text"
                },
                {
                    "nav_child":"Level 2 Some Text"
                },
                {
                    "nav_child":"Level 2 Some Text"
                }
            ]
        },
        {
            "nav":"Level 1 Some Text",
            "nav_children":[
                {
                    "nav_child":"Level 2 Some Text"
                },
                {
                    "nav_child":"Level 2 Some Text"
                },
                {
                    "nav_child":"Level 2 Some Text"
                }
            ]
        },
        {
            "nav":"Level 1 Some Text",
            "nav_children":[
                {
                    "nav_child":"Level 2 Some Text"
                },
                {
                    "nav_child":"Level 2 Some Text"
                },
                {
                    "nav_child":"Level 2 Some Text"
                }
            ]
        },
        {
            "nav":"Level 1 Some Text",
            "nav_children":[
                {
                    "nav_child":"Level 2 Some Text"
                },
                {
                    "nav_child":"Level 2 Some Text"
                },
                {
                    "nav_child":"Level 2 Some Text"
                }
            ]
        },
        {
            "nav":"Level 1 Some Text",
            "nav_children":[
                {
                    "nav_child":"Level 2 Some Text"
                },
                {
                    "nav_child":"Level 2 Some Text"
                },
                {
                    "nav_child":"Level 2 Some Text"
                }
            ]
        },
        {
            "nav":"Level 1 Some Text",
            "nav_children":[
                {
                    "nav_child":"Level 2 Some Text"
                },
                {
                    "nav_child":"Level 2 Some Text"
                },
                {
                    "nav_child":"Level 2 Some Text"
                }
            ]
        },
        {
            "nav":"Level 1 Some Text",
            "nav_children":[
                {
                    "nav_child":"Level 2 Some Text"
                },
                {
                    "nav_child":"Level 2 Some Text"
                },
                {
                    "nav_child":"Level 2 Some Text"
                }
            ]
        },
        {
            "nav":"Level 1 Some Text",
            "nav_children":[
                {
                    "nav_child":"Level 2 Some Text"
                },
                {
                    "nav_child":"Level 2 Some Text"
                },
                {
                    "nav_child":"Level 2 Some Text"
                }
            ]
        },
        {
            "nav":"Level 1 Some Text",
            "nav_children":[
                {
                    "nav_child":"Level 2 Some Text"
                },
                {
                    "nav_child":"Level 2 Some Text"
                },
                {
                    "nav_child":"Level 2 Some Text"
                }
            ]
        },
        {
            "nav":"Level 1 Some Text",
            "nav_children":[
                {
                    "nav_child":"Level 2 Some Text"
                },
                {
                    "nav_child":"Level 2 Some Text"
                },
                {
                    "nav_child":"Level 2 Some Text"
                }
            ]
        }
    ]
};

var nav_left = document.getElementsByClassName("page-nav")[0];

for(var i=0;i<nav_left_json.data.length;i++){
	//读取一级菜单
	var nav_item = document.createElement("div");
	nav_item.className = "page-nav-item";
	nav_item.innerHTML = nav_left_json.data[i].nav;
	//读取二级菜单
	if(nav_left_json.data[i].nav_children){
		var nav_children_item = document.createElement("ul");
		nav_children_item.className = "nav-second-level";
		for(var j=0;j<nav_left_json.data[i].nav_children.length;j++){
			//console.log(nav_left_json.data[i].nav_children.length);
			var nav_child_item = document.createElement("li");
			nav_child_item.innerHTML = nav_left_json.data[i].nav_children[j].nav_child;
			nav_children_item.appendChild(nav_child_item);
		}
		nav_item.appendChild(nav_children_item);
	}
	nav_left.appendChild(nav_item);
}