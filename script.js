//complete this code
class Animal {
	constructor(species){
		this._species=species;
	}
	get species(){
		return this._species
	}

	makeSound(){
		console.log(`${this.species} makes a sound`)
	}
}

class Dog extends Animal {
	constructor(){
		super('Dog')
	}
	bark(){
		console.log('bark')
	}
}

class Cat extends Animal {
	constructor(){
		super('Cat')
	}
	purr(){
		console.log("purr")
	}
}

// Do not change the code below this line
// window.Animal = Animal;
// window.Dog = Dog;
// window.Cat = Cat;

const myDog = new Dog();
myDog.makeSound(); // Output: Dog makes a sound
myDog.bark();      // Output: woof

const myCat = new Cat();
myCat.makeSound(); // Output: Cat makes a sound
myCat.purr();      // Output: purr

