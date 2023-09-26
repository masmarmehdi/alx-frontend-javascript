export default function appendToEachArrayValue(array, appendString) {
  let new_array = [];
  for (let idx of array) {
    let value = idx;
    idx = appendString + value;
    new_array.push(idx);
  }

  return new_array;
}
