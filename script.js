//your JS code here. If required.
let student = {
	name : 'dhanush',

}

student.getKeys = function(){
	return Object.keys(this)
}

console.log(student.getKeys())