function addImages() {
  var container = document.getElementById('image-container');
  container.innerText='';
  shuffle(images);
  imageBuild(0);
  imageBuild(1);
  imageBuild(2);
  totalClicks += 1;
};

function imageBuild(i){
  var container = document.getElementById('image-container');
  var image = document.createElement('img');
  image.setAttribute('src', 'img/' + images[i].fileName);
  image.addEventListener('click', voteMade);
  container.appendChild(image);
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
images.push(new productImage('shark.jpg', 'Jaws Cosplay Kit'));
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
  relayStatus();
  var winner = event.target.src;
  var winnerName = winner.substring(winner.lastIndexOf('/') +1);
  for (i = 0; i < images.length; i++){
    if (winnerName == images[i].fileName){
      images[i].totalVotes += 1;
    };
  };
  if (totalClicks == 14){
    finalTable();
  }
  else {
    addImages();
  };
};

function relayStatus(){
  var status = document.getElementById('prompt');
  if (totalClicks ==14) {
    status.innerText = 'You\'ve done all the voting there is to do. Give yourself a pat on the back.';
  }
  else if (totalClicks == 13){
    status.innerText = 'This is your last vote. Don\'t blow it!'
  }
  else if (totalClicks < 14 && totalClicks >= 10){
    status.innerText = 'Great! You have ' + (15 - totalClicks) + ' votes left. Use them wisely.';
  }
  else if (totalClicks > -1 && totalClicks < 14){
    status.innerText = (totalClicks +1) + ' votes made and ' + (14 - totalClicks) + ' to go. Keep it up!';
  };
};

function finalTable(){
  var container = document.getElementById('image-container');
  var tableContainer = document.getElementById('tableZone');
  container.innerText='';
  var table = document.createElement('TABLE');
  var heading = document.createElement('th');
  table.setAttribute('id', 'resultsTable');
  heading.innerText = 'Results:'
  heading.setAttribute('colspan', '4');
  table.appendChild(heading);
  tableContainer.appendChild(table);
  images.sort(function(a, b){return b.totalVotes - a.totalVotes});
  for (var index = 0; index < images.length; index+=2){
    var cell = document.createElement('td');
    cell.setAttribute('id', 'resultsTable')
    var row = document.createElement('tr');
    var product = images[index].productName;
    cell.innerText = product;
    row.appendChild(cell);
    cell = document.createElement('td');
    cell.setAttribute('id', 'resultsTable')
    var votes = images[index].totalVotes;
    cell.innerText = votes;
    row.appendChild(cell);
    //
    cell = document.createElement('td');
    cell.setAttribute('id', 'resultsTable')
    product = images[index +1 ].productName;
    cell.innerText = product;
    row.appendChild(cell);
    cell = document.createElement('td');
    cell.setAttribute('id', 'resultsTable')
    votes = images[index +1 ].totalVotes;
    cell.innerText = votes;
    row.appendChild(cell);
    //
    table.appendChild(row);
  };
};
