const { template } = require('@babel/core')

function concatArray(array1, array2) {
  if(!array1 && !array2){
    return undefined
  }
  if(array1 == 0 && array2 == 0){
    return []
  }
  if(!array1){
    return array2
  }
  if(!array2){
    return array1
  }
  return array1.concat(array2)
}
module.exports = concatArray
