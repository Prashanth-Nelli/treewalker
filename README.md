treewalker
==========

A simple recursive tree walker

####In Browser:-


```javascript

var node = {
	name : 'parent',
  childs : [{
    name:'ch1',
    childs:[{
    name:'ch2',
    childs:[]
  },{
    name:'ch3',
    childs:[]
  }]
  }]
};

function callback(obj) {
	console.log(obj.name);
}

window.walkTree(node,'childs',callback);	

output:-

parent
ch1
ch2
ch1
ch3
	

```

####In Node.js:-


```javascript

	var tree = require('treewalker');

var node = {
	name : 'parent',
	childs : [{
		name : 'ch1',
		childs : []
	}, {
		name : 'ch2',
		childs : []
	}, {
		name : 'ch3',
		childs : []
	}]
};

function callback(obj) {
	console.log(obj.name);
}

tree.walkTree(node, 'childs', callback);


output:-

parent
ch1
ch2
ch1
ch3


```
