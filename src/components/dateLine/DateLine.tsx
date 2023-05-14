import { RefObject, useEffect, useRef } from "react";

const DateLine = ({ ref }: { ref: RefObject<HTMLLIElement> }) => {
  return (
    <li className="date-line" ref={ref}>
      <p>nu in de bioscoop</p>
      <div className="date-line__line"></div>
      <p>binnenkort in de bioscoop</p>
      <div className="date-line__circle"></div>
    </li>
  );
};

export default DateLine;
