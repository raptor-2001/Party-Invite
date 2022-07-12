const Loader = document.querySelector('.Load-container');
const overlay = document.getElementById('loading-overlay');


function init(){
  setTimeout((()=>{
    overlay.remove();
  }),4000)
} 

init();