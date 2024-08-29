const removeFromArray = function (arr, ...ele) {
  let res = [...arr];

  for (const e of ele) {
    let ind;
    do {
      ind = res.indexOf(e);
      if (ind === -1) continue;
      res.splice(ind, 1);
    } while (ind !== -1);
  }

  return res;
};

// Do not edit below this line
module.exports = removeFromArray;
