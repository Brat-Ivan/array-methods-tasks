const initialArray = [
  { "name": "Viktor", "age": 24 },
  { "name": "Aboba", "age": 16 },
];

const result = adultOnly(initialArray);

console.log(result);

function adultOnly(arr) {
  const newArr = arr.filter(obj => {
    if (typeof obj === 'object' && obj.age > 18) {
      return obj;
    }
  });
  return newArr;
}

// Второе решение:
/*
function adultOnly(arr) {
  const newArr = [];
  arr.forEach(obj => {
    if (typeof obj === 'object' && obj.age > 18) {
      newArr.push(obj);
    }
  });
  return newArr;
}
*/