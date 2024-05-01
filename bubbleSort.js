/* Bubble sort is a simple sorting algorithm that repeatedly steps through the list to be sorted, compares each pair of adjacent items and swaps them if they are in the wrong order. The pass through the list is repeated until no swaps are needed, which indicates that the list is sorted. The algorithm, which is a comparison sort, is named for the way smaller elements "bubble" to the top of the list. 
*/

function swap(items, firstIndex, secondIndex){
    var temp = items[firstIndex]
    items[firstIndex] = items[secondIndex]
    items[secondIndex] = temp
}

function bubbleSort(items) {
    var len = items.length,
        i, j, stop
    for (i=0; i < len; i++){
        for (j=0, stop=len-i; j < stop; j++){
            if (items[j] > items[j+1]){
                swap(items, j, j+1)
            }
        }
    }
    return items;
}


// Recursively
const recursive_bubbleSort = function (array, pointer = array.length - 1) {
  // Base Case
  if (pointer === 0) {
    return array;
  }

  for (let i = 0; i < pointer; i++) {
    if (array[i] > array[i + 1]) {
      let temp = array[i + 1];
      array[i + 1] = array[i];
      array[i] = temp;
    }
  }   
  // Recursive call on smaller portion of the array
  return bubbleSort(array, pointer - 1);  
};
