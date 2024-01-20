const initialArray = ['js', 'world', 'viktor', 'awdjsdc', 'javes'];

const result = contains(initialArray);

console.log(result);

function contains(arr) {
  let newArr = [];
  arr.forEach(value => {
    if (typeof value === 'string' && value.includes('js')) {
      newArr.push(value);
    }
  });
  return newArr;
}