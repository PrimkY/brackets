module.exports = function check(str, bracketsConfig) {
  let strBC = bracketsConfig.flat(1).join('');
  let stack = [];
  let index;
  for(let i = 0; i < str.length; i++){
      index = strBC.indexOf(str[i]);
      if(index !== -1){
          if(index % 2 === 0){
              if(strBC[index+1] === str[i] && stack[stack.length-1] === str[i]) stack.pop();
              else stack.push(str[i]);
          }
          else if(stack.length !== 0 && stack[stack.length - 1] === strBC[index-1]) stack.pop();
          else return false;
      }
      else return false;
  }
  if(stack.length === 0) return true;
  else return false;
}
