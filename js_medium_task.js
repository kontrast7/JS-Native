const palindrome = (str) => {
  let str1 = str.replace(/\s/g, '').toLowerCase();
  let str2 = str.replace(/\s/g, '').toLowerCase().split('').reverse().join("");
  if(str1 === str2){
    return console.log('true')
  }else{
    return console.log('false')
  }
};

palindrome("А роза упала на лапу Азора")

//