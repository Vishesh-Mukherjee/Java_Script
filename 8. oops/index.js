const p = {
	name: "Vishesh Mukherjee",
	age: 21,
	sleep() {
		console.log(`${this.name} is sleeping`);
		console.log(`${p.name} is sleeping`);
	}
}

console.log(p.name);
console.log(p.age);
p.sleep();

class Student {
	constructor(name, age, grade) {
		this.name = name;
		this.age = age;
		this.grade = grade;
	}

	greeting() {
		console.log(`Hello, my name is ${this.name}. I'm ${this.age} years old. I'm in ${this.grade} grade.`);
	}
}

const s = new Student("Jack", 18, 12);
s.greeting();

/*
 * static = belongs to the class, not the objects
 * 	properties: useful for caches, fixed-configuration
 * 	methods: useful for utility functions
 */

class Runner {
	static count = 0

	constructor(name, age) {
		this.name = name;
		this.age = age;
		Runner.count ++;
	}

	static startRace() {
		console.log("1...2...3...GO!!!");
	}
}

const r1 = new Runner("Jack", 17);
const r2 = new Runner("Lily", 18);
const r3 = new Runner("Sam", 17);

console.log(Runner.count);
Runner.startRace();

class Animal {
	constructor(name, alive) {
		this.name = name;
		this.alive = alive;
	}

	eat() {
		console.log(`${this.name} is eating`);
	}
}

class Fish extends Animal {
	constructor(name, alive, water) {
		super(name, alive);
		this.water = water;
	}

	swim() {
		console.log(`${this.name} is swiming`);
	}
}

class Dog extends Animal {
	constructor(name, alive, breed) {
		super(name, alive);
		this.breed = breed;
	}

	bark() {
		console.log(`${this.name} is barking`);
	}
}

const f = new Fish("Fishy", true, "Fresh water");
const d = new Dog("Brown", true, "Pug");
f.eat();
f.swim();
d.eat();
d.bark();

/*
 * get = binds an object property to a function when that property is accessed.
 * set = binds and object property to a function when that property is assigned a vlue.
 */

class Car {
	constructor(power) {
		this._gas = 25;
		this._power = power;
	}

	get power() {
		return `${this._power} hp`;
	}

	get gas() {
		return `${this._gas}L (${this._gas/50 * 100}%)`;
	}

	set gas(value) {
		if (value > 50 ) {
			value = 50;
		} else if (value < 0) {
			value = 0;
		}
		this._gas = value;
	}
}

const car = new Car(400);

console.log(car.power);
console.log(car.gas);
car.gas = 500000;
console.log(car.gas);
		
