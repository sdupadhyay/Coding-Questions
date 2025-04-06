let inputData = [
  {
    city: "Mumbai",
    data: [
      {
        id: "AA01",
        name: "Ankit",
      },
      {
        id: "AA02",
        name: "Amit",
      },
    ],
  },
  {
    city: "Mumbai",
    data: [
      {
        id: "AA01",
        age: 30,
      },
      {
        id: "AA02",
        age: 40,
      },
    ],
  },
  {
    city: "Delhi",
    data: [
      {
        id: "RR01",
        name: "Ram",
      },
      {
        id: "RR02",
        name: "Rita",
      },
    ],
  },
  {
    city: "Delhi",
    data: {
      id: "RR02",
      age: 23,
    },
  },
  {
    city: "Pune",
    data: {
      id: "SS01",
      name: "Sejal",
    },
  },
  {
    city: "Pune",
    data: {},
  },
  {
    city: "Banglore",
    data: {},
  },
];

// output
// [
//     { city: 'Mumbai', name: 'Ankit', id: 'AA01', sr: 0 },
//     { city: 'Mumbai', name: 'Amit', id: 'AA02', sr: 1 },
//     { city: 'Delhi', name: 'Ram', id: 'RR01', sr: 2 },
//     { city: 'Delhi', name: 'Rita', id: 'RR02', sr: 3 },
//     { city: 'Pune', name: 'Sejal', id: 'SS01', sr: 4 }
//   ]
let answer = [];
let sr = 0;
inputData?.forEach((ele) => {
  if (ele?.data?.length > 0) {
    ele?.data?.forEach((itm) => {
      if (itm?.name) {
        answer.push({ city: ele?.city, name: itm?.name, id: itm?.id, sr });
        sr++;
      }
    });
  } else if (ele?.data?.name) {
    answer.push({
      city: ele?.city,
      name: ele?.data?.name,
      id: ele?.data?.id,
      sr,
    });
    sr++;
  }
});
console.log(answer);
