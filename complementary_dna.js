// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
//
// More similar exercise are found here http://rosalind.info/problems/list-view/ (source)
//
// DNAStrand ("ATTGC") # return "TAACG"
//
// DNAStrand ("GTAT") # return "CATA"
const DNAStrand = dna => {
 return dna.split("").map(letter => {

    switch(letter) {
      case 'A':
        return 'T'
        break;
      case 'T':
        return 'A'
        break;
      case 'C':
        return 'G'
        break;
      case 'G':
        return 'C'
        break;
      }
    }).join('')
}

//better

function DNAStrand(dna) {
  return dna.replace(/./g, function(c) {
    return DNAStrand.pairs[c]
  })
}

DNAStrand.pairs = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C',
}
