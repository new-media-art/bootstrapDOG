console.log("Wuff 🐶!");

const btn = document.querySelector("#btn-fly"); // Get the button from the page

if (btn) {
  btn.onclick = function() {
    // The JS works in conjunction with the 'dipped' code in style.css
    btn.classList.toggle("dipped");
  };
}

function myMove() {
    let id = null;
    const elem = document.getElementById("animate");   
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (pos == 250) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.top = pos/2 + "px"; 
        elem.style.left = pos*2 + "px"; 
      }
    }
  }
  

  var object = document.getElementById('item');

  object.onclick=function(){
    
    var x = Math.floor(Math.random()*500);
    var y = Math.floor(Math.random()*400);
    object.style.top = x + 'px';
    object.style.left = y + 'px';
  };

