// data type of null is object:
null and undefined are both false for value equality (null==undefined): they both collapse to boolean false. They are not the same object (null!==undefined). undefined is a property of the global object ("window" in browsers), but is a primitive type and not an object itself.

// custom function to get datatype of any passed parameter or value
function getType(x) {
	return "DataType of this data is:" + typeof(x);
}
getType("ABC");

// code 1 - rgb to hex
function toHex(r,g,b) {
	return "#" + r.toString(16) + g.toString(16) + b.toString(16);
}
console.log(toHex(255,176,65));