import Movie from "../../types/movie";

const getIndexOfFirstGroupAfterToday = (groups: Movie[][]) => {
  let indexOfFirstGroupAfterToday = -1;
  const today = new Date();
  groups.some((group, index) => {
    if (group[0].date > today.valueOf()) {
      indexOfFirstGroupAfterToday = index;
      return true;
    }
  });
  return indexOfFirstGroupAfterToday;
};
export default getIndexOfFirstGroupAfterToday;
