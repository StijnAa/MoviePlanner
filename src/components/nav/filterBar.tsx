import { UserContext } from "@/state/userContext";

import { useContext } from "react";

const Filter = ({ filter, value, updateFilters }: any) => {
  return (
    <div className="filter">
      <input
        type="checkbox"
        id={`toggle-${filter}`}
        checked={value}
        onChange={(e) => updateFilters(filter, e.target.checked)}
      />
      <label htmlFor={`toggle-${filter}`} className="filter__label">
        {filter}
      </label>
    </div>
  );
};

const FilterBar = () => {
  const { filters, updateFilters }: any = useContext(UserContext);

  return (
    <div className="filter-bar">
      {Object.keys(filters).map((filter) => (
        <Filter
          key={filter}
          filter={filter}
          value={filters[filter]}
          updateFilters={updateFilters}
        />
      ))}
    </div>
  );
};
export default FilterBar;
