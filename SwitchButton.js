
let SwitchButton = function(electricLamp, btn) {
	this.electricLamp = electricLamp;
	this.elCheckBox = document.querySelector('#'+btn);
	this.elCheckBox.addEventListener('change', this.onChanger.bind(this));
}

SwitchButton.prototype.onChanger = function() {
	if (this.elCheckBox.checked) {
		this.turnOn();
	}else{
		this.turnOFF();
	}
};

SwitchButton.prototype.turnOn = function() {
	this.electricLamp.turnOn();
};

SwitchButton.prototype.turnOFF = function() {
	this.electricLamp.turnOFF();
};
