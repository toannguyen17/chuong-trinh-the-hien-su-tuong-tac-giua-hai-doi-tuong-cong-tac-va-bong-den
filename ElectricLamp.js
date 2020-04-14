
let ElectricLamp = function(idLight, imgON, imgOFF) {
	this.imgON  = imgON;
	this.imgOFF = imgOFF;
	this.elImg = document.querySelector('#'+idLight);
}

ElectricLamp.prototype.turnOn = function() {
	this.elImg.src = this.imgON;
};

ElectricLamp.prototype.turnOFF = function() {
	this.elImg.src = this.imgOFF;
};
