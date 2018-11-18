// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
//
// Examples input/output:
//
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

const XO = str => {
  let xCounter = 0
  let oCounter = 0
  let string = str.toUpperCase()
  for (x=0; x < str.length; x++) {
    string[x] === 'X'
    ? xCounter +=1
    : string[x] === 'O'
      ? oCounter +=1
      : null
  }
  return xCounter === oCounter
}


const XO = (str) => {
  let x = str.match(/x/gi)
  let o = str.match(/o/gi)
  return x.length === o.length
}
