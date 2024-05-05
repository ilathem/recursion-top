const merge = (leftHalf, rightHalf) => {
  let array = [];
  while (leftHalf.length && rightHalf.length) {
    if (leftHalf[0] < rightHalf[0]) array.push(leftHalf.shift());
    else array.push(rightHalf.shift());
  }
  if (leftHalf.length > 0) array.push(...leftHalf);
  if (rightHalf.length > 0) array.push(...rightHalf);
  return array;
};

const sort = (array) => {
  if (array.length === 1) return array;
  else {
    const leftHalf = array.slice(0, Math.floor(array.length / 2));
    const rightHalf = array.slice(Math.floor(array.length / 2), array.length);
    const sortedLeftHalf = sort(leftHalf);
    const sortedRightHalf = sort(rightHalf);
    return merge(sortedLeftHalf, sortedRightHalf);
  }
};

const mergeSort = (array) => {
  const leftHalf = array.slice(0, Math.floor(array.length / 2));
  const rightHalf = array.slice(Math.floor(array.length / 2), array.length);
  const sortedLeftHalf = sort(leftHalf);
  const sortedRightHalf = sort(rightHalf);
  return merge(sortedLeftHalf, sortedRightHalf);
};

console.log(mergeSort([5, 2, 1, 6, 3, 4]));
// console.log(mergeSort([5, 2, 1]));
// console.log(merge([5], [1, 2]));
// console.log(merge([5], [2]));
