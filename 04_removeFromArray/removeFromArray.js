const removeFromArray = function () {
  const args = [...arguments]
  const inputArray = args[0]
  const valuesToRemove = []
  let duplicates = []
  duplicates = inputArray.filter((item, index) => inputArray.indexOf(item) !== index)
  let numItemsToRemove = 1

  for (let i = 1; i < args.length; i++) {
    valuesToRemove.push(args[i])
  }
  for (let i = 0; i < valuesToRemove.length; i++) {
    const item = valuesToRemove[i]
    if (inputArray.indexOf(item) !== -1) {
      const index = inputArray.indexOf(item)
      if (duplicates.indexOf(item) !== -1) {
        numItemsToRemove++
      }
      inputArray.splice(index, numItemsToRemove)
    }

  }

  return inputArray

};

removeFromArray([1, 2, 2, 3], 2)
// Do not edit below this line
module.exports = removeFromArray;
