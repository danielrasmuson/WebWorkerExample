/**
* Returns a random integer between min (inclusive) and max (inclusive)
* Using Math.round() will give you a non-uniform distribution!
*/
function loopLargeRange(){
  function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  var x = 0;
  var fiveMillion = Math.pow(10, 6)*5;
  var tenMillion = Math.pow(10, 7);
  var limit = getRandomInt(fiveMillion, tenMillion);
  while (x < limit){
    x++
  }
  return x;
}

self.addEventListener('message', function(e) {
  self.postMessage(loopLargeRange());
}, false);