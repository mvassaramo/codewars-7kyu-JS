// This time no story, no theory. The examples below show you how to write function accum:
//
// Examples:
//
// accum("abcd");    // "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    // "C-Ww-Aaa-Tttt"


const accum = s => {
  let arr = s.split("")
  return arr.map((x, index) =>
      x.charAt(0).toUpperCase()
      + x.repeat(index).toLowerCase()
    ).join("-")
}
