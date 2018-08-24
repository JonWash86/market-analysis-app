function addImages() {
  var container = document.getElementById('image-container');
  var image = document.createElement('img');
  shuffle(images);
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
  // image.addEventListener('click', relayStatus);
  container.appendChild(image);
  totalClicks += 1;
  console.log('you have clicked ' + totalClicks + ' times.');
};

var totalClicks = -1;

var productImage = function(fileName, productName) {
  this.fileName = fileName;
  this.productName = productName;
  this.totalVotes = 0;
};

var images = [];
images.push(new productImage('bag.jpg', 'R2DBag'));
images.push(new productImage('banana.jpg', 'Banana Sectioner'));
images.push(new productImage('boots.jpg', 'Useless Boots'));
images.push(new productImage('chair.jpg', 'The Chair'));
images.push(new productImage('cthulhu.jpg', 'Cthulhu'));
images.push(new productImage('dragon.jpg', 'Dragon Meat'));
images.push(new productImage('pen.jpg', 'Writing Utensils'));
images.push(new productImage('scissors.jpg', 'Multipurpose Scissors'));
images.push(new productImage('shark.jpg', 'Jaws Bag'));
images.push(new productImage('sweep.jpg', 'Swiffer Jr.'));
images.push(new productImage('unicorn.jpg', 'Unicorn Meat'));
images.push(new productImage('usb.jpg', 'Undersea USB'));
images.push(new productImage('water_can.jpg', 'Self-Watering Can'));
images.push(new productImage('wine_glass.jpg', 'Wine Globe'));

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

function voteMade(event){
  this.totalVotes += 1;
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
  if (totalClicks == 14){
    console.log('it\'s over!')
    var container = document.getElementById('image-container');
    container.innerText='';
    var table = document.createElement('TABLE');
    var heading = document.createElement('th');
    table.setAttribute('class', 'resultsTable');
    heading.innerText = 'Results!'
    heading.setAttribute('colspan', '2');
    table.appendChild(heading);
    container.appendChild(table);
    for (var index = 0; index < images.fileName; index++){
      var cell = document.createElement('td');
      var row = document.createElement('tr');
      var product = images[i].productName;
      cell.innerText = product;
      row.appendChild(cell);
      cell = document.createElement('td');
      var votes = images[i].totalVotes;
      cell.innerText = votes;
      row.appendChild(cell);
      table.appendChild(row);
    };
  }
  else {
    addImages();
  }
  relayStatus();
}

function relayStatus(){
  var status = document.getElementById('prompt');
  if (totalClicks == 14){
    status.innerText = 'This is your last vote. Don\'t blow it!'
  }
  else if (totalClicks < 15 && totalClicks >= 10){
    status.innerText = 'Great! You have ' + (15 - totalClicks) + ' votes left. Use them wisely.';
  }
  else if (totalClicks > 0 && totalClicks < 15){
    status.innerText = totalClicks + ' votes made and ' + (15 - totalClicks) + ' to go. Keep it up!';
  }
  else {
    status.InnerText = 'You\'ve done all the voting there is to do. Give yourself a pat on the back.';
  };
};
