function fibs(num) {
  if (num < 1) return [];
  if (num === 1) return [0];
  let array = [0, 1];
  if (num === 2) return array;
  for (let i = 2; i < num; i++) {
    array.push(array[i - 2] + array[i - 1]);
  }
  return array;
}

function fibsRec(n, array = [0, 1]) {
  if (array.length > n) return array.slice(0, n);
  array.push(array.at(-2) + array.at(-1));
  return fibsRec(n, array);
}

console.log(fibs(8));
console.log(fibsRec(8));
