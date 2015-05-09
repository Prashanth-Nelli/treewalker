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

		function resolveTree(parent, childkey, cb) {
			var node = parent;
			var child = childkey;
			
			out:
			for (var i = 0; i < node[child].length; i++) {
				if (cb(node,[node],0)) {
					break out;
				}
				walkCompare(node[child][i],node[child],i);
			}

			function walkCompare(childnode,siblings,index) {

				if (cb(childnode,siblings,index)) {
					return;
				}

				if (childnode[child].length == 0) {
					cb(childnode,siblings,index)
					return;
				} 

				Loop:
				for (var j = 0; j < childnode[child].length; j++) {
					if (cb(childnode[child][j]),childnode[child],j) {
						break Loop;
					}
					walkCompare(childnode[child][j],childnode[child],j);
				}

			}

		}

		if ( typeof exports !== "undefined" && typeof module !== "undefined" && module.exports) {
			exports = module.exports = {};
			exports.walkTree = start;
			exports.resolveTree = resolveTree;
		} else {
			this.walkTree = start;
			this.resolveTree = resolveTree;
		}

	}.call(this));
