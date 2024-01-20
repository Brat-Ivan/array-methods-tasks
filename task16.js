const initialArray = [
	{ "name": "Viktor", "age": 24 },
	{ "name": "Aboba", "age": 16 },
	{ "name": "Abiba", "age": 35 },
	{ "name": "Viktor", "age": 35 },
	{ "name": "Abiba", "age": 35 },
];

const result = unique(initialArray)

console.log(result)

function unique(arr) {
  let newArr = arr.filter(value => {
    return typeof value === 'object';
  });
  for (let i = 0; i < newArr.length; i++) {
    for (let j = i + 1; j < newArr.length; j++) {
      if (newArr[i].name === newArr[j].name) {
        newArr = newArr.filter(value => {
          return value.name !== newArr[i].name;
        });
        --i;
        break;
      }
    }
  }
  return newArr;
}