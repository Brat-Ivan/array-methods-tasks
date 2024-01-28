const initialArray = [19, 1, 3, 4, 5, 6, 20, 8];

function evenIndexOnly(arr) {
  const newArr = [];
  arr.forEach((value, index) => {
    if (typeof value === 'number' && index % 2 === 0) {
      newArr.push(value);
    }
  });
  return newArr;
}

const result = evenIndexOnly(initialArray);

console.log(result);