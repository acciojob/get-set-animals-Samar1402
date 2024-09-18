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
	constructor(species){
		super(species)
	}
	makeSound(){
		console.log(`The ${this.species} makes a sound`)
	}
	bark(){
		console.log('woof')
	}
}

class Cat extends Animal {
	constructor(species){
		super(species)
	}
	makeSound(){
		console.log(`The ${this.species} makes a sound`)
	}
	purr(){
		console.log("purr")
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
// let dog=new Dog("Golden Retriever")
// dog.makeSound()
// dog.bark()

// let cat=new Cat("Persian")
// cat.makeSound()
// cat.purr()