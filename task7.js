const initialArray = [
	{ "name": "Viktor", "age": 24 },
	{ "name": "Aboba", "age": 16 },
	{ "name": "Abiba", "age": 35 },
]

const result = sortByAge(initialArray);

console.log(result);

function sortByAge(arr) {
  arr = arr.filter(value => {
    return typeof value === 'object';
  });
  const newArr = arr.sort((a, b) => {
    return a.age - b.age;
  });
  return newArr;
}