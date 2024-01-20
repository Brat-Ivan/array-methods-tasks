const initialArray = [1, 20, 13, 234, 59, 9, 40, 78];

const result = greaterThanAverage(initialArray);

console.log(result);

function greaterThanAverage(arr) {
  let newArr = [];
  arr.forEach(value => {
    if (typeof value === 'number') {
      newArr.push(value);
    }
  });
  const average = newArr.reduce((acc, value) => {
      acc += value;
      return acc;
    }, 0) / newArr.length;
  newArr = newArr.filter(value => {
    return value > average;
  });
  return newArr;
}