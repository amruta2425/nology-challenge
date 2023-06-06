console.log(2 == "2");//{true}
console.log(2 === 2);//{true}
console.log(2 === "2");//{false}
console.log("2" + 3 == 23);//{true}
console.log("2" + 3 === 5);//{false}
console.log(10 % 3);// 1 {true}
console.log(10 % 3 === 1);//{true}
console.log((100 % 7) % 5);//2 {true}
console.log((100 % 7) % 5 !== 0);//{true}
console.log((100 % 7) % 9 == 2);//{true}
console.log(!(10 % 2));//not a zero=false{true}
console.log(!!!!((10 % 7) % 3));//{false}
console.log(10 % 3 === -1 % 2);//{false}
console.log((892783 != '89278' + 3) == 0);//{true}
console.log(true && false);//{false}
console.log(false || true);//{true}
console.log(true || false);//{true}
console.log(true || false);//{true}
console.log(true || false + true);//{true}
console.log(true * false && false + true);//{false}
console.log(10 && 123 && -1 && 3);//{true} 3
console.log(10 && 123 && 0 && 3);//{false} 0
console.log((10 && (123 || '') && parseInt('Roisin')) || 23 / 23 - 1);//0
console.log(3 && 'Calum' && ('' || 26));//{26}
console.log(3 && 'Remi' && (null || 86 * 0 || ('' + 1 && 'Cat' + 'Dog')));//{catdog}
//console.log(2+1 && 1+4 && 4+5); output=9