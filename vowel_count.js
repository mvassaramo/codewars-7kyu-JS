// Return the number (count) of vowels in the given string.
//
// We will consider a, e, i, o, and u as vowels for this Kata.
//
// The input string will only consist of lower case letters and/or spaces.


const getCount = str => {
  let vowelsCount = 0;
  let vowels = 'aeiou'
  let arr = str.split("")

  arr.forEach(i =>
    vowels.includes(i) ? vowelsCount += 1 : null )

  return vowelsCount;
}

//OR
const getCount = str => (str.match(/[aeiou]/ig)||[]).length
