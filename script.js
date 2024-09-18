//complete this code
class Animal {
	constructor(species){
		this.species=species;
	}
	get species(){
		return this.species
	}

	makeSound(){
		console.log(`${species} makes a sound`)
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
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
