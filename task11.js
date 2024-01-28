const initialArray = ['Say', 'hello', 'to', 'World'];

function uppercaseOnly(arr) {
  const newArr = [];
  arr.forEach(value => {
    if (typeof value === 'string' && value[0] === value[0].toUpperCase()) {
      newArr.push(value[0]);
    }
  });
  return newArr;
}

const result = uppercaseOnly(initialArray);

console.log(result);