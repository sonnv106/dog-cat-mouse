function Horse(){
}
Horse.prototype.jump = function() {
	console.log('Jumped....')
};
Horse.prototype.run = function() {
	console.log('Running....hhehe')
};
module.exports=Horse;