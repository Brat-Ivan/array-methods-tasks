const initialArray = [1, 2, 3, 2, 6, 5, 4, 4, 9, 1];

const result = duplicatesOnly(initialArray);

console.log(result);

function duplicatesOnly(arr) {
  const newArr = [];
  arr.forEach((value, index) => {
    if (typeof value === 'number' && !newArr.includes(value)) {
      arr.slice(index + 1).forEach(elem => {
        if (value === elem && !newArr.includes(value)) {
          newArr.push(value);
        }
      })
    }
  })
  return newArr;
}

// Второе решение:
/*
function duplicatesOnly(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number' && !newArr.includes(arr[i])) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          newArr.push(arr[i]);
          break;
        }
      }
    }
  }
  return newArr;
}
*/