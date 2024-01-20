const initialArray = ['Say', 'hello', 'to', 'World'];

const result = uppercaseOnly(initialArray);

console.log(result);

function uppercaseOnly(arr) {
  let newArr = [];
  arr.forEach(value => {
    if (typeof value === 'string') {
      newArr.push(value[0]);
    }
  });
  newArr = newArr.filter(value => {
    if (value === value.toUpperCase()) {
      return value;
    }
  });
  return newArr;
}