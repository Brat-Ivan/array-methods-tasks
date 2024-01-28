const initialArray1 = [
	{ "name": "Viktor", "age": 24 },
	{ "name": "Abiba", "age": 35 },
	{ "name": "Viktor", "age": 35 },
	{ "name": "Abiba", "age": 35 },
];

const initialArray2 = [
	{ "name": "Viktor", "age": 24 },
	{ "name": "Aboba", "age": 16 },
	{ "name": "Abiba", "age": 35 },
];

function unique(arr1, arr2) {
  const newArr = [];
  arr1 = arr1.filter(value => {
    return typeof value === 'object';
  });
  arr2 = arr2.filter(value => {
    return typeof value === 'object';
  });
  arr1.forEach(value => {
    for (let obj of arr2) {
      if (value.name === obj.name && value.age === obj.age) {
        for (let obj of newArr) {
          if (value.name === obj.name && value.age === obj.age) {
            return;
          }
        }
        newArr.push(value);
      }
    }
  });
  return newArr;
}

const result = unique(initialArray1, initialArray2);

console.log(result);