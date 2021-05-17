/*function rot13(str) {
  return String.fromCharCode(...str.split("").map(e => (e.charCodeAt() >= 65 &&
  e.charCodeAt() <= 90) ?
  e.charCodeAt() <= 77 ?
  e.charCodeAt() + 13 : e.charCodeAt() - 13
  : e.charCodeAt() //char code outside [A-Z]
  ));
}*/

function rot13(str){
  return str.replace(/[A-Z]/g, e => 
  String.fromCharCode((e.charCodeAt() % 26) + 65))
}