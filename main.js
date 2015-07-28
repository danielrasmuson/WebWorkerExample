// this is the function I'm testing the performance on
// its defined in both this file and largeTask
function loopLargeRange(){
  var x = 0;
  var fiveHundredMillion = Math.pow(10, 8)*5;
  while (x < fiveHundredMillion){
    x++
  }
  return x;
}

function spawnLargeTask(callback){
  var deferred = Q.defer();

  // this is requesting the largeTask.js 10x 
  var worker = new Worker('largeTask.js');
  worker.addEventListener('message', function(e) {
    deferred.resolve(e.data);
  }, false);
  worker.postMessage({}); // Send data to our worker.

  return deferred.promise;
}

console.time("Web Worker Total Time");
Q.all(_.times(10, spawnLargeTask))
  .then(function(results){
    console.timeEnd("Web Worker Total Time");
  })
  .then(function(){
    // I'm guessing the performance isn't up
    // because the http request are taking longer then the actual computation
    console.time("Looping 10 Ranges");
    _.times(10, loopLargeRange)
    console.timeEnd("Looping 10 Ranges");
  })

