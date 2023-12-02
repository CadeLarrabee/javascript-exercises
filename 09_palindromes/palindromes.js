const palindromes = function (stringPalin) {
  //Fix the formatting of the input
  stringPalin = stringPalin.replace(/[\p\s{P}$+<=>^,.!|~]/g, "").toLowerCase();
  let originString = stringPalin.split("").reverse().join("");

  if (originString === stringPalin) {
    return true;
  } else {
    return false;
  }
};

palindromes("A car, a man, a maraca.");
// Do not edit below this line
module.exports = palindromes;
