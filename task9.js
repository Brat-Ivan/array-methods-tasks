const initialArray = [1, 2, 3, 4];

const result = multiplyByTwo(initialArray);

console.log(result);

function multiplyByTwo(arr) {
  let newArr = [];
  arr.forEach(value => {
    if (typeof value === 'number') {
      newArr.push(value * 2);
    }
  });
  return newArr;
}