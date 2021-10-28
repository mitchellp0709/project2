const arr = [1, 2, 3, 4, 5, 6]

const arr2 = arr.slice(0, arr.length - 1)
const last = arr[arr.length - 1]
arr2.push(55)
arr2.push(last);
console.log(arr2)
