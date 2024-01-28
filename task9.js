const initialArray = [1, 2, 3, 4];

function multiplyByTwo(arr) {
  arr = arr.filter(value => {
    return typeof value === 'number';
  });
  const newArr = arr.map(value => {
    return value * 2;
  });
  return newArr;
}

// Второе решение:
/*
function multiplyByTwo(arr) {
  const newArr = [];
  arr.forEach(value => {
    if (typeof value === 'number') {
      newArr.push(value * 2);
    }
  });
  return newArr;
}
*/

const result = multiplyByTwo(initialArray);

console.log(result);