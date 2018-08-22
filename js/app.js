function addImages() {
  var container = document.getElementById('image-container');
  var image = document.createElement('img');
  var index = generateRandom(0, images.length - 1);
  container.innerText='';
  image.setAttribute('src', 'img/' + images[index].fileName);
  container.appendChild(image);
  var image = document.createElement('img');
  var index = generateRandom(0, images.length - 1);
  image.setAttribute('src', 'img/' + images[index].fileName);
  container.appendChild(image);
  var image = document.createElement('img');
  var index = generateRandom(0, images.length - 1);
  image.setAttribute('src', 'img/' + images[index].fileName);
  container.appendChild(image);
};

var productImage = function(fileName) {
  this.fileName = fileName;
  this.totalVotes = 0;
};

var images = [];
images.push(new productImage('bag.jpg'));
images.push(new productImage('banana.jpg'));
images.push(new productImage('boots.jpg'));
images.push(new productImage('chair.jpg'));
images.push(new productImage('cthulhu.jpg'));
images.push(new productImage('dragon.jpg'));
images.push(new productImage('pen.jpg'));
images.push(new productImage('scissors.jpg'));
images.push(new productImage('shark.jpg'));
images.push(new productImage('sweep.jpg'));
images.push(new productImage('unicorn.jpg'));
images.push(new productImage('usb.jpg'));
images.push(new productImage('water_can.jpg'));
images.push(new productImage('wine_glass.jpg'));

function generateRandom(min, max){
  return Math.floor((Math.random() * (max - min)) + min);
}

window.addEventListener('load', addImages);
