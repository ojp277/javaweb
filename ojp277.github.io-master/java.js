var colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

  var i = 1;

  window.setInterval(function(){
    document.body.style.backgroundColor = colors[i];
    i++;
    if (i === colors.length){
      i=0;
    }
  }, 5000);


var plaatjes = ["IMGP3026.jpg", "IMGP3027.jpg", "IMGP3028.jpg"];

var tijd = 1000;
var id = setInterval(randomPict, tijd);

var i = 1;

function randomPict () {
    if (i > plaatjes.length - 1){
      i=0;
    }
    console.log(i)
    document.getElementById('randomplaatje').src = plaatjes[i];
    i++;
  }


var slider = document.getElementById("sld");
  slider.oninput = function() {
      console.log(this.value);
      clearInterval(id)
      id = setInterval(randomPict, this.value)

  }
