var originalbg = document.querySelector('.backgd').style.background
var originalbtn = document.querySelector('.buttons').style.background
var originalcl = document.querySelector('body').style.color


var btn1 = document.querySelector("#bw")

btn1.addEventListener('click', (e) => {
  
  document.querySelector('.backgd').style.background = 'rgb(255,255,255,0.8)'
  document.querySelector('.buttons').style.background = 'rgb(159,159,159)'
  document.querySelector('body').style.color = 'black'
  originalbg = document.querySelector('.backgd').style.background
  originalbtn = document.querySelector('.buttons').style.background
  originalcl = document.querySelector('body').style.color
});

const btn2 = document.querySelector("#bgrey")

btn2.addEventListener('click', (e) => {

  document.querySelector('.backgd').style.background = 'rgb(128,128,128,0.8)' 
  document.querySelector('.buttons').style.background = 'rgb(95,95,95)'
  document.querySelector('body').style.color = 'white'
  originalbg = document.querySelector('.backgd').style.background
  originalbtn = document.querySelector('.buttons').style.background
  originalcl = document.querySelector('body').style.color
});

const btn3 = document.querySelector("#bb")

btn3.addEventListener('click', (e) => {

  document.querySelector('.backgd').style.background = 'rgb(20,54,255,0.8)'
  document.querySelector('.buttons').style.background = 'rgb(0,0,139)'
  document.querySelector('body').style.color = 'white'
  originalbg = document.querySelector('.backgd').style.background
  originalbtn = document.querySelector('.buttons').style.background
  originalcl = document.querySelector('body').style.color
});

const btn4 = document.querySelector("#bgreen")

btn4.addEventListener('click', (e) => {
  
  document.querySelector('.backgd').style.background = 'rgb(100,255,100,0.8)'
  document.querySelector('.buttons').style.background = 'rgb(0,150,0)'
  document.querySelector('body').style.color = 'black'
  originalbg = document.querySelector('.backgd').style.background
  originalbtn = document.querySelector('.buttons').style.background
  originalcl = document.querySelector('body').style.color
});

const btn5 = document.querySelector("#br")

btn5.addEventListener('click', (e) => {

  document.querySelector('.backgd').style.background = 'rgb(255,163,0,0.8)'
  document.querySelector('.buttons').style.background = 'rgb(200,100,0)'
  document.querySelector('body').style.color = 'black'
  originalbg = document.querySelector('.backgd').style.background
  originalbtn = document.querySelector('.buttons').style.background
  originalcl = document.querySelector('body').style.color
});

const list = document.querySelectorAll('.left li')

for (var i=0; i<list.length;i++)
  list[i].style.fontWeight = 'bold';



var ulist = document.querySelector('.Pilots')
var addPilot = document.querySelector('#btnpilot');

addPilot.addEventListener('click', e=>{
  e.preventDefault();
  var pilot = document.querySelector('#pilot').value;
  // console.log(pilot)
  var li = document.createElement('li');
  li.className = 'Pilots';
  li.appendChild(document.createTextNode(pilot));
  ulist.appendChild(li);
  document.querySelector('#pilot').value = '';
  var deletebtn = document.createElement('button');
  deletebtn.className = 'delbtn delete';
  deletebtn.appendChild(document.createTextNode('X'))
  li.appendChild(deletebtn)
  
})

ulist.addEventListener('click', removeItem);
function removeItem(e){
  if(e.target.classList.contains('delete')){
    var li = e.target.parentElement;
    ulist.removeChild(li);
  }
}



var img = document.querySelector('#black')
img.addEventListener('mouseover', background);

function background(e){
  
  document.querySelector('.backgd').style.background = 'rgb(5,5,5,0.8)'
  document.querySelector('.buttons').style.background = 'rgb(0,0,0)'
  document.querySelector('body').style.color = 'rgb(255,255,255)'
}
img.addEventListener('mouseout', replace);
function replace(e){
  document.querySelector('.backgd').style.background = originalbg
  document.querySelector('.buttons').style.background = originalbtn
  document.querySelector('body').style.color = originalcl
}

document.addEventListener('mousemove', (event) => {
	var coordinates = document.querySelector('#xy')
  coordinates.textContent = (`X: ${event.clientX}; Y: ${event.clientY}`);
});