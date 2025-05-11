let slider = document.querySelector('.slider');
let prevButton = document.querySelector('.prev-button');
let nextButton = document.querySelector('.next-button');
let clicks = 0

nextButton.onclick = function (){
  clicks++
  if(clicks == 3){
    clicks = 0
  }
  slider.style.transform = 'translateX(calc(-100% / 3 * ' + clicks + '))'


}
prevButton.onclick = function (){
  clicks--
  if(clicks == -1){
    clicks = 2
  }
  slider.style.transform = 'translateX(calc(-100% / 3 * ' + clicks + '))'


}