const initialArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const initialArray2 = [1, 3, 4, 5, 7, 8, 9, 10, 20, 30, 40];

function compare(arr1, arr2) {
  let newArr = [];
  arr1.forEach(value => {
    if (!arr2.includes(value)) {
      newArr.push(value);
    }
  });
  return newArr;
}

const result = compare(initialArray1, initialArray2);

console.log(result);