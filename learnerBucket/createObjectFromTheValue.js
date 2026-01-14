//"a.b.c=10" → { a: { b: { c: 10 }}}
const createObj = (path) => {
  const [right, left] = path?.split("=");
  const answer = right
    ?.split(".")
    ?.reverse()
    ?.reduce((acc, ele) => {
      return {
        [ele]: acc,
      };
    }, left);
  return answer;
};
console.log(createObj("a.b.c=10"));
console.log(createObj("user.name.first=John"));
