function countPositivesSumNegatives(input) {
  let arr = [];
  let sum = 0;
  let count = 0;
  if ( input === null || input.length === 0){
    return [ ]
  }
  for ( let i = 0; i <input.length; i++){
    if (input[i] > 0 ){
      count ++
      
    } else if (input[i] < 0){
      sum +=input[i]
      
    }
    
  }
  arr.push(count)
  arr.push(sum)
  return arr
}
