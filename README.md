treewalker
==========

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

```childkey:-``` second one childkey is the key  which holds the children of parentnode

```callback``` function should contain compare logic and it should return true when match found

for Example:-

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

	function callback(obj) {
		if(obj.name=="ch1"){
			myResult=obj;
			return true;
		}
	};
	
	window.resolveTree(node, 'childs', callback);
	
	myResult.childs.push({
		name:'ch4',
		childs:[]
	});
	
	console.log(node);

```
####output:-

```javascript
	


```



