function spawnLargeTask(callback){
  var deferred = Q.defer();

  var worker = new Worker('largeTask.js');
  worker.addEventListener('message', function(e) {
    console.log('Large Task Result: ', e.data);
    deferred.resolve(e.data);
  }, false);
  worker.postMessage({}); // Send data to our worker.

  return deferred.promise;
}

// Start timing now
console.time("concatenation");

var demons = [spawnLargeTask(),
  spawnLargeTask(),
  spawnLargeTask(),
  spawnLargeTask(),
  spawnLargeTask(),
  spawnLargeTask(),
  spawnLargeTask()
]

// ... and stop.
console.timeEnd("concatenation");


// function loopLargeRange(){
//   function getRandomInt(min, max) {
//       return Math.floor(Math.random() * (max - min + 1)) + min;
//   }

//   var x = 0;
//   var fiveMillion = Math.pow(10, 6)*5;
//   var tenMillion = Math.pow(10, 7);
//   var limit = getRandomInt(fiveMillion, tenMillion);
//   while (x < limit){
//     x++
//   }
//   return x;
// }
