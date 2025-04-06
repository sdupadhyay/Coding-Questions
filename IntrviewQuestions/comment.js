//Count Total Comments (Including Replies)
// Rippling Frontend  coding test

const comment = {
  text: "some comment",
  replies: [
    { text: "some comment 1", replies: [] },
    { text: "some comment 2", replies: [] },
    {
      text: "some comment 3",
      replies: [{ text: "some comment 5", replies: [] }],
    },
    {
      text: "some comment 4",
      replies: [
        { text: "some comment 6", replies: [{ text: "Some Comment 7" }] },
      ],
    },
  ],
};
function countReply(arr, count = 1, total) {
  for (let i = 0; i < arr?.length; i++) {
    if (arr[i]?.text) {
      count++;
      total.push(arr[i]?.text);
    }
    if (Array.isArray(arr[i]?.replies) && arr[i]?.replies?.length > 0) {
      count = countReply(arr[i]?.replies, count, total);
    }
  }
  return {
    count,
    total,
  };
}
let total = [];
const count = 1;
let a = countReply(comment?.replies, count, total);
console.log(a);
