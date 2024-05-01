/* selection sort is a sorting algorithm, specifically an in-place comparison sort */

function findSmallest (arr) {
  smallest = arr[0]
  smallest_index = 0
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i]
      smallest_index = i
    }
  }
  return arr[smallest_index]
}

function selectionSort (arr) {
  var newArr = []
  var i = 0
  while (i < arr.length) {
    var smallest = findSmallest(arr)
    var a = arr.splice(arr.indexOf(smallest), 1)
    console.log('newArr:', newArr)
    console.log('arr::::', arr)
    newArr.push(a[0])
  }
  return newArr
}

