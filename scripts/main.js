/**
 * Created by akshaykhot on 2016-02-26.
 */

/**
 * 1. Creational Pattern
 * It deals with the idea of creating new things, specifically new objects.
 * Add properties and methods using . and [] notation
 */
var newObject = {};
var newObject = Object.create(null);
var newObject = new Object();

/**
 * 2. Constructor Pattern
 * Inside a constructor, the keyword 'this' references the new object that's being created.
 * Advantage: Looks simple, easy to understand
 * Problem: Makes inheritance difficult, functions are defined multiple times for each instance created
 * @constructor
 */
function Car(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;

    this.display = function() {
        return "Car Model: " + this.model + "\n from year: " + this.year + "\n has done " + this.miles + " miles.";
    }
}

var civic = new Car("Honda Civic", 2009, 20000);
var mondeo = new Car("Ford Mondeo", 2010, 5000);
console.log(civic.display());
console.log(mondeo.display());

/**
 * 3. Constructors with Prototypes
 * solves the duplicate functions problem, by adding methods to the prototype of the constructor
 * single instance of display() is shared between all of the Car objects
 * @constructor
 */
function Car1(model, year) {
    this.model = model;
    this.year = year;
}

Car1.prototype.display = function() {
    console.log("Display the car");
};

/**
 * 4. Singleton Pattern
 * serves as a namespace provider
 * in simplest version, an object literal grouped together with its related methods and properties
 */
var singleObject = {
    property1: "something",
    property2: "something else",

    method1: function() {
        console.log("Hello World");
    }
};

/**
 * 5. Module Pattern
 * Very important for the architecture of the application
 * Helps in keeping the code for a project organized
 * Note: Within the module pattern, variables or methods
 * declared are only available inside the module itself
 * thanks to closure.
 * Variables or methods defined within the returning object
 * however are available to everyone.
 */
var testModule = (function() {
    //no one else has access to counter
    var counter = 0;
    return {
        //here, incrementCounter and resetCounter will be available to everyone
        incrementCounter: function () {
            return counter++;
        },
        resetCounter: function () {
            console.log("counter value prior to reset: " + counter);
            counter = 0;
        }
    };
})();

testModule.incrementCounter();
testModule.resetCounter();

//after the above function is self executed, the result looks like this,
//which is nothing but object literal notation
testModule_ = {
    incrementCounter: function () {
        return counter++;
    },
    resetCounter: function () {
        console.log("counter value prior to reset: " + counter);
        counter = 0;
    }
};






















