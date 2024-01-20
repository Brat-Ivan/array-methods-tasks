const initialArray = ['Say', 'hello', 'to', 'world'];

const result = firstLetters(initialArray);

console.log(result);

function firstLetters(arr) {
  const newArr = [];
  arr.forEach(value => {
    if (typeof value === 'string') {
      newArr.push(value[0]);
    }
  });
  return newArr;
}

// Второе решение
/*
function firstLetters(arr) {
  const newArr = arr.map(value => {
    if (typeof value === 'string') {
      return value[0];
    }
  });
  return newArr;
}
*/