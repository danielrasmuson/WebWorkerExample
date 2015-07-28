function loopLargeRange(){
  var x = 0;
  var fiveHundredMillion = Math.pow(10, 8)*5;
  while (x < fiveHundredMillion){
    x++
  }
  return x;
}

self.addEventListener('message', function(e) {
  self.postMessage(loopLargeRange());
}, false);