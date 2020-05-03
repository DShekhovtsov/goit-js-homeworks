//task-05
'use strict';

class Car {
  constructor({
    maxSpeed,
    speed,
    isOn,
    distance,
    price
  }) {
    this.maxSpeed = maxSpeed;
    this.speed = 0;
    this.isOn = false;
    this.distance = 0;
    this._price = price;
  }
  get price() {
    return this._price;
  }
  set price(price) {
    this._price = price;
  }
  turnOn() {
    this.isOn = true;
  }
  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }
  accelerate(value) {
    this.value = value;
    this.speed += this.value;
    if (this.speed < this.maxSpeed) {
      return this.speed;
    }
  }
  decelerate(value) {
    this._value = value;
    this.speed -= this._value;
    if (this.speed >= 0) {
      return this.speed;
    }
  }
  drive(hours) {
    if (this.isOn) {
      this.distance = this.distance + hours * this.speed;
      console.log(this.distance);
    }
  }
}
Car.getSpecs = function (car) {
  console.log(car);
};
const mustang = new Car({
  maxSpeed: 200,
  price: 2000
});

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000