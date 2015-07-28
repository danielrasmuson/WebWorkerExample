function spawnLargeTask(callback){
  var deferred = Q.defer();

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

