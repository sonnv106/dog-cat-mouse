function Horse(){
}
Horse.prototype.jump = function() {
	console.log('Jumped....')
};
Horse.prototype.run = function() {
	console.log('running....')
};
module.exports=Horse;