const initialArray1 = [1, 2, 3];
const initialArray2 = [4, 5, 6];

const result = combine(initialArray1, initialArray2);

console.log(result);

function combine(arr1, arr2) {
  return [...arr1, ...arr2];
}

// Второе решение:
/*
function combine(arr1, arr2) {
  return arr1.concat(arr2);
}
*/

// Третье решение:
/*
function combine(arr1, arr2) {
  return arr2.reduce((acc, value) => {
    acc.push(value);
    return acc;
  }, arr1);
}
*/

// Четвёртое решение:
/*
function combine(arr1, arr2) {
  const arr3 = [];
  arr1.forEach(value => {
    arr3.push(value);
  });
  arr2.forEach(value => {
    arr3.push(value);
  });
  return arr3;
}
*/