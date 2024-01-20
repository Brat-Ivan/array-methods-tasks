const initialArray = [1, 2, 3, 4, 5];

const result = sum(initialArray);

console.log(result);

function sum(arr) {
  let res = 0;
  arr.forEach(value => {
    if (typeof value === 'number') {
      res += value;
    }
  });
  return res;
}