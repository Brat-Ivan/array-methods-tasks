const initialArray = [1, 2, 3, 2, 6, 5, 4, 4, 9, 1];

const result = uniqueOnly(initialArray);

console.log(result);

// Возвращает массив без повторяющихся в первоначальном массиве элементов:
function uniqueOnly(arr) {
  let newArr = [];
  arr = arr.filter(value => {
    return typeof value === 'number';
  });
  arr.map(elem => {
    if (newArr.includes(elem)) {
      newArr = newArr.filter(value => {
        return value !== elem;
      });
    } else { newArr.push(elem); }
  });
  return newArr;
}

// Возвращает массив с повторяющимися в первоначальном массиве элементами:
/*
function uniqueOnly(arr) {
  let newArr = [];
  arr = arr.filter(value => {
    return typeof value === 'number';
  });
  arr.map(value => {
    if (!newArr.includes(value)) {
      newArr.push(value);
    }
  });
  return newArr;
}
*/