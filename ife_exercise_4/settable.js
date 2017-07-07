/*设置表格*/

var table_json = {
    "title":"table",
    "data":[
        {
            "id":1,
            "name":"John Wu",
            "content":"Some Content",
            "value":"Some Value"
        },
        {
            "id":1,
            "name":"John Wu",
            "content":"Some Content",
            "value":"Some Value"
        },
        {
            "id":1,
            "name":"John Wu",
            "content":"Some Content",
            "value":"Some Value"
        },
        {
            "id":1,
            "name":"John Wu",
            "content":"Some Content",
            "value":"Some Value"
        },
        {
            "id":1,
            "name":"John Wu",
            "content":"Some Content",
            "value":"Some Value"
        },
        {
            "id":1,
            "name":"John Wu",
            "content":"Some Content",
            "value":"Some Value"
        },
        {
            "id":1,
            "name":"John Wu",
            "content":"Some Content",
            "value":"Some Value"
        },
        {
            "id":1,
            "name":"John Wu",
            "content":"Some Content",
            "value":"Some Value"
        },
        {
            "id":1,
            "name":"John Wu",
            "content":"Some Content",
            "value":"Some Value"
        },
        {
            "id":1,
            "name":"John Wu",
            "content":"Some Content",
            "value":"Some Value"
        },
        {
            "id":1,
            "name":"John Wu",
            "content":"Some Content",
            "value":"Some Value"
        },
        {
            "id":1,
            "name":"John Wu",
            "content":"Some Content",
            "value":"Some Value"
        },
        {
            "id":1,
            "name":"John Wu",
            "content":"Some Content",
            "value":"Some Value"
        },
        {
            "id":1,
            "name":"John Wu",
            "content":"Some Content",
            "value":"Some Value"
        },
        {
            "id":1,
            "name":"John Wu",
            "content":"Some Content",
            "value":"Some Value"
        },
        {
            "id":1,
            "name":"John Wu",
            "content":"Some Content",
            "value":"Some Value"
        },
        {
            "id":1,
            "name":"John Wu",
            "content":"Some Content",
            "value":"Some Value"
        },
        {
            "id":1,
            "name":"John Wu",
            "content":"Some Content",
            "value":"Some Value"
        },
        {
            "id":1,
            "name":"John Wu",
            "content":"Some Content",
            "value":"Some Value"
        },
        {
            "id":1,
            "name":"John Wu",
            "content":"Some Content",
            "value":"Some Value"
        }
    ]
};

var tbody = document.getElementsByTagName("tbody")[0];

for(var i=0;i<table_json.data.length;i++){
	tr = document.createElement("tr");
    name_td = document.createElement("td");
    content_td = document.createElement("td");
    value_td = document.createElement("td");
    operation_td = document.createElement("td");
    name_td.innerHTML = table_json.data[i].name;
    content_td.innerHTML = table_json.data[i].content;
    value_td.innerHTML = table_json.data[i].value;
    operation_td.innerHTML = "<button class='table-button edit'>编辑</button> <button class='table-button delete'>删除</button>";
    tr.appendChild(name_td);
    tr.appendChild(content_td);
    tr.appendChild(value_td);
    tr.appendChild(operation_td);
	tbody.appendChild(tr);
}