// simple react component that renders a line acros the screen

const DateLine = () => {
  return (
    <li className="date-line">
      <p>nu in de bioscoop</p>
      <div className="date-line__line"></div>
      <p>binnenkort in de bioscoop</p>
      <div className="date-line__circle"></div>
    </li>
  );
};

export default DateLine;
