/*function palindrome(str) {
  let temp=str.split(/\W|_/);
  let string = temp.join("").toLowerCase();
  //console.log(string);
  for(let i=0; i<(string.length-1)/2; ++i){
    if(string.charAt(i)!=string.charAt(string.length-1-i)){
      return false;
    }
  }
  return true;
}*/

function palindrome(str){
  return str.replace(/\W|_/g, "").toLowerCase() ===
  str.replace(/\W|_/g, "")
     .toLowerCase()
     .split("")
     .reverse()
     .join("")
}