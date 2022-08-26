function removeChar(str){
  const strArr = str.toString().split('')
  strArr.pop();
  strArr.shift();
 return strArr.join('')


 };

 console.log(removeChar('eloquent')) //> 'loquen'
 console.log(removeChar('country')) //> 'ountr'
 console.log(removeChar('person')) //> 'erso'
 console.log(removeChar('place')) //> 'lac'
 console.log(removeChar('ooopsss')) //> 'oopss'
 console.log(removeChar('1234567890')) //> '23456789'
console.log(removeChar(123)) //> 2,3,4,5,6,7,8,9

