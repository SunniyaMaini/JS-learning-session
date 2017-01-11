// code 1 - rgb to hex

function toHex(r,g,b) {
	return "#" + r.toString(16) + g.toString(16) + b.toString(16);
}
console.log(toHex(255,176,65));