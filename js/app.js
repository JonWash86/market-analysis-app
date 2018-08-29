function addImages() {
  var container = document.getElementById('image-container');
  container.innerText='';
  shuffle(images);
  imageBuild(0);
  imageBuild(1);
  imageBuild(2);
};

function imageBuild(i){
  var container = document.getElementById('image-container');
  var image = document.createElement('img');
  image.setAttribute('src', 'img/' + images[i].fileName);
  image.addEventListener('click', voteMade);
  container.appendChild(image);
};

var totalClicks = 0;

var productImage = function(fileName, label, clicks) {
  this.fileName = fileName;
  this.label = label;
  this.y = clicks;
};

//new set of functions will check whether there is 'images' in local Storage. If there is not, the function will build an array 'images' with default values
var images = [];

function checkLocal(){
  var storedImages = JSON.parse(localStorage.getItem('images'));
  if (storedImages != null){
    console.log(storedImages);
    console.log('Stored images is null');
    for (var index = 0; index < storedImages.length; index++){
      var image = storedImages[index];
      images.push(new productImage(image.fileName, image.label, image.y));
    };
  }
  else{
    images.push(new productImage('bag.jpg', 'R2DBag', 0));
    images.push(new productImage('banana.jpg', 'Banana Sectioner', 0));
    images.push(new productImage('boots.jpg', 'Useless Boots', 0));
    images.push(new productImage('chair.jpg', 'The Chair', 0));
    images.push(new productImage('cthulhu.jpg', 'Cthulhu', 0));
    images.push(new productImage('dragon.jpg', 'Dragon Meat', 0));
    images.push(new productImage('pen.jpg', 'Writing Utensils', 0));
    images.push(new productImage('scissors.jpg', 'Multipurpose Scissors', 0));
    images.push(new productImage('shark.jpg', 'Jaws Cosplay Kit', 0));
    images.push(new productImage('sweep.jpg', 'Swiffer Jr.', 0));
    images.push(new productImage('unicorn.jpg', 'Unicorn Meat', 0));
    images.push(new productImage('usb.jpg', 'Undersea USB', 0));
    images.push(new productImage('water_can.jpg', 'Self-Watering Can', 0));
    images.push(new productImage('wine_glass.jpg', 'Wine Globe', 0));
  };
};

window.addEventListener('load', checkLocal);

//


function generateRandom(min, max){
  return Math.floor((Math.random() * (max - min)) + min);
}

//Fisher-Yates Shuffle, illustrated here: https://bost.ocks.org/mike/shuffle/
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

function voteMade(event){
  this.y += 1;
  totalClicks += 1;
  relayStatus();
  var winner = event.target.src;
  var winnerName = winner.substring(winner.lastIndexOf('/') +1);
  for (i = 0; i < images.length; i++){
    if (winnerName == images[i].fileName){
      images[i].y += 1;
    };
  };
  if (totalClicks == 15){
    chartUpdate();
    localStorage.setItem('images', JSON.stringify(images));
    resetButton();
  }
  else {
    addImages();
  };
  document.getElementById('progress-bar').style.width = Math.round(totalClicks / 15 * 100) + '%';
};

function relayStatus(){
  var status = document.getElementById('prompt');
  if (totalClicks ==15) {
    status.innerText = 'You\'ve done all the voting there is to do. Give yourself a pat on the back.';
  }
  else if (totalClicks == 14){
    status.innerText = 'This is your last vote. Don\'t blow it!'
  }
  else if (totalClicks < 15 && totalClicks >= 10){
    status.innerText = 'Great! You have ' + (15 - totalClicks) + ' votes left. Use them wisely.';
  }
  else if (totalClicks > 0 && totalClicks < 15){
    status.innerText = (totalClicks ) + ' votes made and ' + (15 - totalClicks) + ' to go. Keep it up!';
  };
};

function resetButton(){
  var container = document.getElementById('image-container');
  container.innerText = '';
  container.innerHTML = '<input type=\'button\', value=\'Take the Poll Again!\', onclick=\'resetPoll()\'></input>';
  var chartContainer = document.getElementById('chartContainer');
};

function resetPoll(){
  totalClicks = 0;
  chartContainer.innerText='';
  addImages();
  for (i = 0; i < images.length; i++){
    images[i].y = 0;
  };
  var status = document.getElementById('prompt');
  status.innerText = ('Help us pick the junk we sell you next - at markup!');
  document.getElementById('progress-bar').style.width = Math.round(totalClicks / 15 * 100) + '%';
};
