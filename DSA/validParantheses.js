const validParantheses = (s) => {
  if (s.length % 2 != 0) return false;
  let stack = [];
  let paranthesesMaping = { ")": "(", "]": "[", "}": "{" };
  for (let i = 0; i < s.length; i++) {
    if (["(", "{", "["]?.includes(s[i])) {
      stack.push(s[i]);
    } else if (stack.pop() !== paranthesesMaping[s[i]]) return false;
  }
  return stack.length == 0;
};

console.log(validParantheses("()[]{}"));
console.log(validParantheses("{{}}"));
console.log(validParantheses("{{[}}"));
