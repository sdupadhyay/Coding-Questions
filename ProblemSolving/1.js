const expenses = [
  { amount: 100, category: "Food" },
  { amount: 1500, category: "Bill" },
  { amount: 1000, category: "Food" },
  { amount: 700, category: "Education" },
  { amount: 1000, category: "Wellness" },
];

// output :  {Food:1100,Wellness: 1000, ....}
// output : [{totalAmount : 1100,category:"Food"},{totalAmont : 1500, category:"Bill"},.....]
let out = expenses?.reduce((acc,ele)=>{
  if(acc[ele?.category]) {
    acc[ele?.category] += ele?.amount
    return acc;
  }
  else {
    acc[ele?.category] = ele?.amount
    return acc
  }
},{});
console.log(out)

let ans = expenses?.map(ele=>{
  return {
    totalAmount:out[ele?.category],
    category: ele?.category
  }
})
console.log(ans)