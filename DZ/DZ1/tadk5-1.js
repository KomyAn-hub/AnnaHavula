function findMinMax(arr) {
  let max = arr[0];
  let min = arr[0];

  for (let num of arr) {
    if (num > max) max = num;
    if (num < min) min = num;
  }

  return { max, min };
}

console.log(findMinMax([3, 1, 7, 2, 9, -4]));
