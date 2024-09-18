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
	 makeSound() {
        console.log("Bark");
    }
	bark(){
		console.log('woof')
	}
}

class Cat extends Animal {
	constructor(){
		super('Cat')
	}
	makeSound(){
		console.log("Meow")
	}
	purr(){
		console.log("purr")
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
