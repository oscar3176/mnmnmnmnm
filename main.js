
function preload() {
  football = loadImage("football1.jpg");
  lion = loadImage("lion2.jpg");
  shoes = loadImage("shoes.jpg");
  house = loadImage("house.jpg");
  earth = loadImage("earth.jpg");
  car = loadImage("car.jpg");
  book = loadImage("book.jpg");  
  waterbottle = loadImage("waterbottle.jpg");
  computer = loadImage("computer.jpg");
  chair = loadImage("chair.jpg");
}

function setup() {
  canvas = createCanvas(400, 400);
  canvas.position(250, 586);//x=400, y = 450
  classifier = ml5.imageClassifier("MobileNet", modelLoaded);
}


function modelLoaded() {
  console.log("Model Loaded!");
}

function loadFootball() {
  image(football, 0, 0, 400, 400);
  classifier.classify(football, gotResult);
  document.getElementById("final").innerHTML = "Both Are Accurate";
  document.getElementById("result_object_name_1").innerHTML = "Google Lens says = It is a Soccer Ball";
}
function loadLion() {
  image(lion, 0, 0, 400, 400);
  classifier.classify(lion, gotResult);
  document.getElementById("final").innerHTML = "Google Lens is a little more Accurate";
  document.getElementById("result_object_name_1").innerHTML = "Google Lens says = It is a North African Lion";
}
function loadShoes() {
  image(shoes, 0, 0, 400, 400);
  classifier.classify(shoes, gotResult);
  document.getElementById("final").innerHTML = "Google Lens is more Accurate";
  document.getElementById("result_object_name_1").innerHTML = "Google Lens says = It is a Shoe";
}
function loadHouse() {
  image(house, 0, 0, 400, 400);
  classifier.classify(house, gotResult);
  document.getElementById("final").innerHTML = "Mobile Net is more Accurate";
  document.getElementById("result_object_name_1").innerHTML = "Google Lens says = It is a Car";
}
function loadEarth() {
  image(earth, 0, 0, 400, 400);
  classifier.classify(earth, gotResult);
  document.getElementById("final").innerHTML = "Google Lens is more Accurate";
  document.getElementById("result_object_name_1").innerHTML = "Google Lens says = It is Earth";
}
function loadCar() {
  image(car, 0, 0, 400, 400);
  classifier.classify(car, gotResult);
  document.getElementById("final").innerHTML = "Mobilenet is a little more accurate";
  document.getElementById("result_object_name_1").innerHTML = "Google Lens says = It is a Toy Car";
}
function loadBook() {
  image(book, 0, 0, 400, 400);
  classifier.classify(book, gotResult);
  document.getElementById("final").innerHTML = "Google Lens is a little more accurate";
  document.getElementById("result_object_name_1").innerHTML = "Google Lens says = It is a Blue Bear Book";
}
function loadWaterBottle() {
  image(waterbottle, 0, 0, 400, 400);
  classifier.classify(waterbottle, gotResult);
  document.getElementById("final").innerHTML = "Google Lens is a little more accurate";
  document.getElementById("result_object_name_1").innerHTML = "Google Lens says = It is a Blue Water Bottle";
}
function loadComputer() {
  image(computer, 0, 0, 400, 400);
  classifier.classify(computer, gotResult);
  document.getElementById("final").innerHTML = "Google Lens is a little more accurate";
  document.getElementById("result_object_name_1").innerHTML = "Google Lens says = It is a Computer";
}
function loadChair() {
  image(chair, 0, 0, 400, 400);
  classifier.classify(chair, gotResult);
  document.getElementById("final").innerHTML = "MobileNet is a little more accurate";
  document.getElementById("result_object_name_1").innerHTML = "Google Lens says = It is a Chair";
}
function draw() {

}

function gotResult(error, results) {
  if (error) {
    console.error(error);
  }
  else {
      console.log(results);
      document.getElementById("result_object_name").innerHTML = "Mobilenet says = It is a " + results[0].label;
}
}