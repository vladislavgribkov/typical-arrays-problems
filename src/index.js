
exports.min = function min (array) {
    if(array !==undefined){
        if(array.length !==0){
            return Math.min(...array);
        }
    }
  return 0;
}

exports.max = function max (array) {
    if(array !==undefined){
        if(array.length !==0){
            return Math.max(...array);
        }
    }
  return 0;
}

exports.avg = function avg (array) {
    if(array !==undefined){
        if(array.length !==0){
        let count = array.reduce(function(sum, element) {
            return sum + element;
          }, 0);
          return count / array.length;
        }
    }
  return 0;
}
