const initialArray = [1, 2, 3, 2, 6, 5, 4, 4, 9, 1];

// Возвращает массив без повторяющихся в первоначальном массиве элементов:
function uniqueOnly(arr) {
  let newArr = [];
  arr.map(elem => {
    if (typeof elem === 'number') {
      if (newArr.includes(elem)) {
        newArr = newArr.filter(value => {
          return value !== elem;
        });
      } else { newArr.push(elem); }
    }
  });
  return newArr;
}

// Возвращает массив с повторяющимися в первоначальном массиве элементами:
/*
function uniqueOnly(arr) {
  let newArr = [];
  arr.map(value => {
    if (typeof value === 'number' && !newArr.includes(value)) {
      newArr.push(value);
    }
  });
  return newArr;
}
*/

// Решение при помощи Set:
/*
function uniqueOnly(arr) {
  arr = arr.filter(value => {
    return typeof value === 'number';
  });
  let newArr = new Set(arr);
  return [...newArr];
}
*/

const result = uniqueOnly(initialArray);

console.log(result);