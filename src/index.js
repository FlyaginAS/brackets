module.exports = function check(/* str, bracketsConfig */) {
  throw new Error('Not implemented');
};

function isBracketsBalanced(str, bracketsConfigArr) {
  //можно попробовать сгенерить dict из переданного конфига
  // и openBrackets с closeBrackets сгенерить из dict
  // тогда возможно смогу заиспользовать старое решение с минимальными правкаи

  function generateDict(bracketsConfigArr){

  }
  function generateOpenBrackets(dict){}
  function generateCloseBrackets(dict){}

  const stack = [];
  const dict = {
    ')': '(',
    ']': '[',
    '}': '{',
    '>': '<',
  };
  const openBrackets = ['(', '[', '{', '<'];
  const closeBrackets = [')', ']', '}', '>'];
  let bracketsAreRight = true;

  function isOpenBracket(char) {
    return openBrackets.indexOf(char) > -1;
  }
  function isCloseBracket(char) {
    return closeBrackets.indexOf(char) > -1;
  }

  for (let i = 0; i < str.length; i += 1) {
    if (isOpenBracket(str[i])) {
      stack.push(str[i]);
    } else if (isCloseBracket(str[i])) {
      //  проверяеям что стек не пуст перед pop()
      if (stack.length === 0 || dict[str[i]] !== stack.at(-1)) {
        bracketsAreRight = false;
        break;
      }
      stack.pop();
    }
  }

  //  возвращаем true только если стек пуст и нет ошибок
  if (stack.length > 0) {
    bracketsAreRight = false;
  }

  return bracketsAreRight;
}

//! from my similar task js101
// function isBracketsBalanced(str) {
//   // (),{},[].
//   const stack = [];
//   const dict = {
//     ')': '(',
//     ']': '[',
//     '}': '{',
//     '>': '<',
//   };
//   const openBrackets = ['(', '[', '{', '<'];
//   const closeBrackets = [')', ']', '}', '>'];
//   let bracketsAreRight = true;

//   function isOpenBracket(char) {
//     return openBrackets.indexOf(char) > -1;
//   }
//   function isCloseBracket(char) {
//     return closeBrackets.indexOf(char) > -1;
//   }

//   for (let i = 0; i < str.length; i += 1) {
//     if (isOpenBracket(str[i])) {
//       stack.push(str[i]);
//     } else if (isCloseBracket(str[i])) {
//       //  проверяеям что стек не пуст перед pop()
//       if (stack.length === 0 || dict[str[i]] !== stack.at(-1)) {
//         bracketsAreRight = false;
//         break;
//       }
//       stack.pop();
//     }
//   }

//   //  возвращаем true только если стек пуст и нет ошибок
//   if (stack.length > 0) {
//     bracketsAreRight = false;
//   }

//   return bracketsAreRight;
// }