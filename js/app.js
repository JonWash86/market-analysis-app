function addImages() {
  var container = document.getElementById('image-container');
  var image = document.createElement('img');
  shuffle(images);
  container.innerText='';
  image.setAttribute('src', 'img/' + images[0].fileName);
  image.addEventListener('click', voteMade);
  image.addEventListener('click', tallyVote);
  container.appendChild(image);
  var image = document.createElement('img');
  image.setAttribute('src', 'img/' + images[1].fileName);
  image.addEventListener('click', voteMade);
  image.addEventListener('click', tallyVote);
  container.appendChild(image);
  var image = document.createElement('img');
  image.setAttribute('src', 'img/' + images[2].fileName);
  image.addEventListener('click', voteMade);
  image.addEventListener('click', tallyVote);
  container.appendChild(image);
  totalClicks += 1;
  console.log('you have clicked ' + totalClicks + ' times.');
};

var totalClicks = -1;

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
  var index = array.length, t, i;
  while(index){
    i = Math.floor(Math.random() * index--);
    t = array[index];
    array[index] = array[i];
    array[i] = t;
  }
  return array;
}

window.addEventListener('load', addImages);

function tallyVote(productImage){
  this.totalVotes += 1;
  console.log('image clicked'); //+ imageattribute);
}

function voteMade(event){
  var winner = event.target.src;
  var winnerName = winner.substring(winner.lastIndexOf('/') +1);
  console.log(winnerName);
  for (i = 0; i < images.length; i++){
    if (winnerName == images[i].fileName){
      console.log('winner! '+ images[i].fileName);
      images[i].totalVotes += 1;
      console.log(images[i].totalVotes);
    };
  };
  var prompt = document.getElementById('prompt');
  if (totalClicks < 15){
    addImages();
  };
  if (totalClicks == 15){
    var container = document.getElementById('image-container');
    container.innerText='You did it!';//this will be replaced with the table listing votes.
    var table = document.createElement('TABLE');
    var heading = document.createElement('th');
  };
}
