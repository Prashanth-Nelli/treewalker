treewalker
==========

[![Join the chat at https://gitter.im/Prashanth-Nelli/treewalker](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/Prashanth-Nelli/treewalker?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[![NPM Version](https://img.shields.io/npm/v/treewalker.svg?style=flat)](https://www.npmjs.org/package/treewalker)   [![Build Status](https://travis-ci.org/Prashanth-Nelli/treewalker.svg?branch=master)](https://travis-ci.org/Prashanth-Nelli/treewalker)


A simple recursive tree walker

###how to use treewalker

treewalker exposes two methods ```walktree``` and ```resolveTree```

####walktree:-

walktree expects three parameters ``` parentnode,childkey,callback function ```

```parentnode:-``` first one parent node it should be an object 

```childkey:-``` second one childkey is the key  which holds the children of parentnode

for Example:-

```javascript
	
	var node={
		name:'parent',
		childs:[{
			name:'child1'
			childs:[]
		}]
	}

```

in the above example ```childkey``` value should be childs and it should be same for children also

```callback fn :-```

after visiting each node in the parent node this callback function is called with visited node as a 

parameter

```Note:-  this method should only used for traversing the tree and you visit every node in the tree.```

so callback function should be used for logging the properties are storing node values into other variables.

in the callback u should not add any properties to object u get in the callback for those operations use the 
    
```javascript
		 resolveTree
``` 
    

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

####resolveTree:-

resolveTree expects three parameters ``` parentnode,childkey,callback function ```

```parentnode:-``` first one parent node it should be an object 

```childkey:-```   second one childkey is the key  which holds the children of parentnode

```callback:-```   a function which will be called on every node in the tree.
                   function should contain compare logic and it should return true when match found
                   callback function will receive three parameters 
                   node,siblings,index.

```
   node:- the current node in the tree
   siblings:- childs of current node's parent which includes the current node.
   index:- current node's index position in the parent node's child array.
   	   this value can be used to delete that node along with all it's 
   	   children.
```		   	   

Examples:-

``Node Addition:-``

```javascript

var myResult={};

var node = {
		name : 'parent',
		childs : [{
			name : 'ch1',
			childs : [{
				name : 'ch2',
				childs : []
			}, {
				name : 'ch3',
				childs : []
			}]
		}]
	};

	function callback(obj,siblings,index) {
		if(obj.name=="ch1"){
			obj.childs.push({
			   name : 'ch4',
			   childs : []
		     	});
		     return true;
		}
	};
	
	window.resolveTree(node, 'childs', callback);
	
	console.log(node);

```
####output:-

```javascript

{
	name : 'parent',
	childs : [{
		name : 'ch1',
		childs : [{
			name : 'ch2',
			childs : []
		}, {
			name : 'ch3',
			childs : []
		},{
			name:'ch4',
			childs:[]
		}]
	}]
};	


```


####In Node.js:-


```javascript

var tree = require('treewalker');

var myResult={};

var node = {
	name : 'parent',
	childs : [{
		name : 'ch1',
		childs : [{
			name : 'ch2',
			childs : []
		}, {
			name : 'ch3',
			childs : []
		}]
	}]
};

	function callback(obj,siblings,index) {
		if (obj.name == "ch1") {
			obj.childs.push({
			   name : 'ch4',
			   childs : []
			});
		return true;
	    }
	};
	
	tree.resolveTree(node, 'childs', callback);

	console.log(node);

```
####output:-

```javascript

{
	name : 'parent',
	childs : [{
		name : 'ch1',
		childs : [{
			name : 'ch2',
			childs : []
		}, {
			name : 'ch3',
			childs : []
		},{
			name:'ch4',
			childs:[]
		}]
	}]
};	


```
		





