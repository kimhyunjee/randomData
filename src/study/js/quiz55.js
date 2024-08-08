//(55) What's the output?
class Dog {
  constructor(name) {
    this.name = name;
  }
}

Dog.prototype.bark = function () {
  console.log(`Woof I am ${this.name}`);
};

const pet = new Dog("Mara");

pet.bark();

delete Dog.prototype.bark;

pet.bark();

/**
 * A) "Woof I am Mara",typeErrorB
 * B) "Woof I am Mara",  "Woof I am Mara"
 * C) "Woof I am Mara", undefinedD
 * D) TypeError, TypeError
 */
