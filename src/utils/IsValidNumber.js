const IsValidNumber = (num, min, max) => {
  const val = Number.parseFloat(num);

  if (Number.isNaN(val)) {
    return false;
  } else {
    if (val < min) {
      return false;
    } else if (val > max) {
      return false;
    } else {
      return true;
    }
  }
};

export default IsValidNumber;
