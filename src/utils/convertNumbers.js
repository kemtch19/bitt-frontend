export const convertNumber = (number) => {
  let newNumber = 0;
  if (number < 1000) {
    return number.toString();
  } else if (number >= 1000 && number < 1000000) {
    newNumber = number / 1000;
    return newNumber.toFixed(1).replace(/\.0$/, "") + "K";
  } else if (number >= 1000000) {
    newNumber = number / 1000000;
    return newNumber.toFixed(1).replace(/\.0$/, "") + "M";
  }
};
