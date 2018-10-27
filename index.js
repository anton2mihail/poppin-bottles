module.exports = (function () {
  return ((inv) => {
    let full = Math.floor(inv / 2);
    let iter = Math.pow(full, 2) - full + 1;
    let data = {
      empty: 0,
      redeem: 0,
      caps: 0,
      total: full
    }
    Array(iter).fill(1).map((e) => {
      if (data.empty - 2 >= 0) {
        full += 1;
        data.redeem += 1;
        data.empty -= 2;
      }
      if (data.caps - 4 >= 0) {
        full += 1;
        data.redeem += 1;
        data.caps -= 4;
      }
      while (full > 0) {
        full--;
        data.empty += 1
        data.caps += 1
      }
      return e;
    });
    data.total += data.redeem;
    return data;
  });
})();


