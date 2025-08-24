function generateDict(bracketsConfigArr) {
  // [['(', ')'], ['[', ']'], ['{', '}']]
  const configArr = [];
  // a little change arr for appropriate structure of my dict
  for (let i = 0; i < bracketsConfigArr.length; i += 1) {
    configArr.push([bracketsConfigArr[i][1], bracketsConfigArr[i][0]]);
  }

  return Object.fromEntries(configArr);
}

function generateOpenBrackets(dict) {
  return Object.values(dict);
}
function generateCloseBrackets(dict) {
  return Object.keys(dict);
}

module.exports = function check(str, bracketsConfigArr) {
  // можно попробовать сгенерить dict из переданного конфига
  // и openBrackets с closeBrackets сгенерить из dict
  // тогда возможно смогу заиспользовать старое решение из js101 с минимальными правкаи

  const stack = [];
  const dict = generateDict(bracketsConfigArr);
  const openBrackets = generateOpenBrackets(dict);
  const closeBrackets = generateCloseBrackets(dict);
  let bracketsAreRight = true;

  function isOpenBracket(char) {
    return openBrackets.indexOf(char) > -1;
  }
  function isCloseBracket(char) {
    return closeBrackets.indexOf(char) > -1;
  }

  for (let i = 0; i < str.length; i += 1) {
    if (isCloseBracket(str[i]) && isOpenBracket(str[i])) {
      // '|()|(||)||'
      if (stack.length > 0 && stack.at(-1) === str[i]) {
        stack.pop();
      } else {
        stack.push(str[i]);
      }
    } else if (isOpenBracket(str[i])) {
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
};

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
