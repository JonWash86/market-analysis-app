function addImages() {
  var container = document.getElementById('image-container');
  var image = document.createElement('img');
  shuffle(images);
  console.log(images);
  container.innerText='';
  image.setAttribute('src', 'img/' + images[0].fileName);
  image.addEventListener('click', voteMade);
  container.appendChild(image);
  var image = document.createElement('img');
  image.setAttribute('src', 'img/' + images[1].fileName);
  image.addEventListener('click', voteMade);
  container.appendChild(image);
  var image = document.createElement('img');
  image.setAttribute('src', 'img/' + images[2].fileName);
  image.addEventListener('click', voteMade);
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

//Fisher-Yates Shuffle
function shuffle(array){
  var m = array.length, t, i;
  while(m){
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}


Array.from(images.length, (v, i) => i);

window.addEventListener('load', addImages);

function voteMade(event){
  console.log(event.target.src);
  addImages();
}
