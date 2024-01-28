const initialArray = ['js', 'world', 'viktor', 'awdjsdc', 'javes'];

function contains(arr) {
  let newArr = [];
  arr.forEach(value => {
    if (typeof value === 'string' && value.includes('js')) {
      newArr.push(value);
    }
  });
  return newArr;
}

const result = contains(initialArray);

console.log(result);