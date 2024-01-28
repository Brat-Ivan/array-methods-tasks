const initialArray = [1, 2, 3, 4, 5];

function sum(arr) {
  const res = arr.reduce((acc, value) => {
    if (typeof value === 'number') {
      acc += value;
    }
    return acc;
  }, 0);
  return res;
}

// Второе решение:
/*
function sum(arr) {
  let res = 0;
  arr.forEach(value => {
    if (typeof value === 'number') {
      res += value;
    }
  });
  return res;
}
*/

const result = sum(initialArray);

console.log(result);