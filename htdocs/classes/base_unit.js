var Unit = function(name) {
  this.unitName = name;
};

Unit.prototype.move = function (direction) {
  console.log('Moving ' + this.unitName + " " + direction);
};

var tank = new Unit('Tank');

tank.move("North");
