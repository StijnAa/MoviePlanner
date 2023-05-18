import cx from "classnames";

const FilterBar = () => {
  return (
    <div className="filter-bar">
      <div className="filter-bar__item">
        <input type="checkbox" id="toggleWatch" />
        <label htmlFor="toggleWatch" className="navigation__link"></label>
      </div>
    </div>
  );
};
export default FilterBar;
