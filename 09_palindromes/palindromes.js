const palindromes = function (str1) {
  let str = str1.replace(/[^\w]+/g, "").toLowerCase();

  console.log(str);
  let reversed = str.split("").reverse().join("");
  console.log(reversed);
  return str === reversed;
};

// Do not edit below this line
module.exports = palindromes;
