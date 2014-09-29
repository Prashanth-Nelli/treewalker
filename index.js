;( function() {

		function start(parent, childkey, cb) {
      
			var node = parent;
			var child = childkey;

			for (var i = 0; i < node[child].length; i++) {
				cb(node);
				traverse(node[child][i]);
			}

			function traverse(childnode) {

				if (childnode[child].length == 0) {
					cb(childnode);
					return;
				}

				for (var j = 0; j < childnode[child].length; j++) {
					cb(childnode);
					traverse(childnode[child][j]);
				}

			}

		}
		
		if(typeof exports !=='undefined')
		{
			if(typeof module.exports !=='undefined'  && typeof module !=='undefined'){
				exports=module.exports.walkTree=start;
			}
			exports.walkTree=start;
		}else{
			this.walkTree=start;
		}

}.call(this));