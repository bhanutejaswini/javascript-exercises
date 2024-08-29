const findTheOldest = function (people) {
  return people.reduce((acc, curr) => {
    if (acc) {
      let accAge =
        (acc.yearOfDeath || new Date().getFullYear()) - acc.yearOfBirth;
      let currAge =
        (curr.yearOfDeath || new Date().getFullYear()) - curr.yearOfBirth;
      if (accAge > currAge) return acc;
    }
    return curr;
  }, {});
};

// Do not edit below this line
module.exports = findTheOldest;
