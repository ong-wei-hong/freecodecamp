function telephoneCheck(str) {
  /* 1. check for optional 1\s? at the start
   * 2. check for 3 digits with or without "()" 
   * 3. check for optional "-" or " "
   * 4. check for 3 digits
   * 5. check fot optional "-" or " "
   * 6. check for 4 digits at the end */
  let regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\-\s]?\d{3}[\-\s]?\d{4}$/;
  return regex.test(str);
}