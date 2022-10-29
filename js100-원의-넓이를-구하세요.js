function circle(radius){
	const result = radius * radius * 3.14;
	return result;
}
const length = prompt("반지름");
console.log(circle(length));