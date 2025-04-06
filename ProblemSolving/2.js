const movieRating = [
  { title: "Movie A", ratings: [5, 3, 4, 2, 3] },
  { title: "Movie A", ratings: [1, 1, 2, 5, 3] },
  { title: "Movie A", ratings: [2, 2, 2, 4, 3] },
];

// output average of all rating
const output = movieRating?.map((ele) => {
  let avg =
    ele?.ratings?.reduce((acc, itm) => acc + itm) / ele?.ratings?.length;
  return {
    title: ele?.title,
    avgRating: avg,
  };
});
console.log(output);
