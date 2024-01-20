const initialArray = ['Say', 'hello', 'to', 'world', 'javascript', 'students'];

const result = longerThanFive(initialArray);

console.log(result);

function longerThanFive(arr) {
  const newArr = arr.filter(value => {
    if (typeof value === 'string') {
      return value.length > 5;
    }
  });
  return newArr;
}

// Второе решение:
/*
function longerThanFive(arr) {
  const newArr = [];
  arr.forEach(value => {
    if (typeof value === 'string' && value.length > 5) {
      newArr.push(value);
    }
  });
  return newArr;
}
*/