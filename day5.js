let school = {
  classrooms: [
    {name: 'ironhack', students: ["Yoli", "Oscar", "Manny"]}
  ]
}

function getOscar(){
  let theClassRoom = school.classRooms[0];

  let students = theClassRoom.students;

  let oscar = students[1];
  
  console.log(Oscar);

}
getOscar()



const floridaTaxRate = 1.065;


function calcTotalPrice(initialPrice){
  return (initialPrice * floridaTaxRate).toFixed(2);
}

calcTotalPrice(17)

var car = {

  name: 'Acura TL',
  isOn: false,
  color: 'white',
  interior: 'leather',
  rims: 20,
  sunroof: false,
  sport: true,
  interiorColor:'beige',

  sayMyName: function() {
    console.log("My name is " + this.name);
  },

  start: function() {
    this.isOn = true;
  },

  stop: function() {
    this.isOn = false;
  }

}

let blah = {
  wow: function() {
    return car.sayMyName()
  }
}

blah.wow()

var car = {
  name: 'Knight Industries Two Thousand',
  isOn: false,

  sayMyName: function() {
    console.log("My name is " + this.name);
  },

  start: function(){
    this.isOn = true;

  },
  stop: function(){
    this.isOn = false;
  }
}

car.stop();

let shopper = {
  name: "betsy",
  shoppingList = ['eggs', 'butter', 'spinach', 'potatoes', 'tomatoes'],

showMeList: function() {

  this.shoppingList.forEach((item){
    console.log(item)
  })
}

}

shopper.showMeList();


var car = {
  name: 'Acura TL',
  isOn: false,
  color: 'white',
  interior: 'leather',
  rims: 20,
  sunroof: false,
  sport: true,
  interiorColor:'beige',

  sayMyName: function() {
    console.log("My name is " + this.name);
  },

  start: function() {
    this.isOn = true;
  },

  stop: function() {
    this.isOn = false;
  }

  drive: function(){
    console.log("yay, I'm driving");

  }
}

var car = {
  name: 'Jeep Wrangler',
  isOn: false,
  color: 'black',
  interior: 'leather',
  rims: 20,
  sunroof: false,
  sport: true,
  interiorColor:'beige',

  sayMyName: function() {
    console.log("My name is " + this.name);
  },

  start: function() {
    this.isOn = true;
  },

  stop: function() {
    this.isOn = false;
  }

  drive: function(){
    console.log("yay, I'm driving");

  }
}

class Car{
  constructor(theName, color, sunroof){

    this.sunroof = sunroof;
    this.name = theName;
    this.color = color;
  }

  sayMyName(){
    console.log("My name is " + this.name)
  }

  start() {
    this.isOn = true;
  }

stop() {
  this.isOn = false;
}


}

let newCar = new Car('Acura TL', 'navy', false)

console.log(newCar.name)

class Animal {
  constructor(name, age, kg){
    this.name = name;
    this.age = age;
    this.kg = kg;
    
  }

}


class Dog extends Animal{
  constructor(name, age, kg, furColor, gait, toys){
    super(name, age, kg);
  this.color = furColor;
  this.gait = gait;
  this.howmanyToys = toys;
  }  
}





let luna= new Dog('Luna', 3, 13, brown, long, 20);

console.log(luna)