import { RefObject, useEffect, useRef } from "react";

const DateLine = () => {
  return (
    <div className="date-line">
      <p>nu in de bioscoop</p>
      <div className="date-line__line"></div>
      <p className="upcomming-movies">binnenkort in de bioscoop</p>
      <div className="date-line__circle"></div>
    </div>
  );
};

export default DateLine;
