
/*----------Closure-----------*/

function person(name) {
    let age = 0; 

    return {
        getName: function() {
            return name;
        },
        getAge: function() {
            return age;
        },
        birthday: function() {
            age++;
            console.log(`${name} is now ${age} years old.`);
        }
    };
}

const john = person("John");
john.getName(); 
john.getAge(); 
john.birthday();
john.getAge();

 /*----------Event Loop-----------*/

console.log("Script start");

setTimeout(() => {
  console.log("setTimeout 1");
}, 0);
                                    
setTimeout(() => {
    console.log("setTimeout 2");
}, 0);
                                    
Promise.resolve().then(() => {
    console.log("Promise 1");
}).then(() => {
    console.log("Promise 2");
});
                                    
    console.log("Script end");
                                    
/*----------Prototype-----------*/

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

function Student(name, age, grade) {
    Person.call(this, name, age); 
    this.grade = grade;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.study = function() {
    console.log(`${this.name} is studying in grade ${this.grade}.`);
};

const jane = new Student("Jane", 20, "A");
jane.greet(); 
jane.study(); 
 
/*----------Generator-----------*/

function* simpleGenerator() {
    yield "First value";
    yield "Second value";
    yield "Third value";
}

const gen = simpleGenerator();

console.log(gen.next().value);
console.log(gen.next().value); 
console.log(gen.next().value); 
console.log(gen.next().value);                                   