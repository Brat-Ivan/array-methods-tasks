const initialArray = ['Say', 'привет', 'to', 'АБЦ Wold'];

const result = latinAlphabetOnly(initialArray);

console.log(result);

function latinAlphabetOnly(arr) {
  const newArr = [];
  arr = arr.filter(value => {
    return typeof value === 'string';
  });
  arr.forEach(value => {
    for (let i = 0; i < value.length; i++) {
      let elem = value[i].toLowerCase();
      if (!((elem >= 'a' && elem <= 'z') || elem === ' ')) {
        return;
      }
    }
    newArr.push(value);
  });
  return newArr;
}