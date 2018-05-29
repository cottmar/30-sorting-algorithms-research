function BubbleSort(arr) {
  const sortedArray = Array.from(arr);
  let swap;
  do {
    swap = false;
    for (let i = 1; i < sortedArray.length; ++i) {
      if (sortedArray[i - 1] > sortedArray[i]) {
        [sortedArray[i], sortedArray[i - 1]] = [sortedArray[i - 1], sortedArray[i]];
        swap = true;
      }
    }
  } while (swap)
  return sortedArray;
}
console.log(BubbleSort([4, 19, 26, 10, 6]));
