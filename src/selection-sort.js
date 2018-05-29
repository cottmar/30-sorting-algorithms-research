const swap = function(array, firstIndex, secondIndex){
  let temp = array[firstIndex];
  array[firstIndex]  = array[secondIndex];
  array[secondIndex] = temp;
};

let selectionSort = function(array){
for(var i = 0; i < array.length; i++){
  //set min to the current iteration of i
  let min = i;
  for(var j = i+1; j < array.length; j++){
    if(array[j] < array[min]){
      min = j;
    }
  }
  swap(array, i, min);
}
return array;
};
let array = [4,19,26,2]
console.log(selectionSort(array));
