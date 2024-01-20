const initialArray = [1, 2, 3, 4, 5, 6, 7, 8];

const result = evenNumbersOnly(initialArray);

console.log(result);

function evenNumbersOnly(arr) {
  const newArr = arr.filter(value => {
    if (typeof value === 'number') {
      return value % 2 === 0;
    }
  });
  return newArr;
}

// Второе решение:
/*
function evenNumbersOnly(arr) {
  const newArr = [];
  arr.forEach(value => {
    if (typeof value === 'number' && value % 2 === 0) {
      newArr.push(value);
    }
  });
  return newArr;
}
*/