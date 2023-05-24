import { UserContext } from "@/state/userContext";

import { useContext, useRef } from "react";
import IconButton from "../button/IconButton";

const Filter = ({ filter, value, updateFilters }: any) => {
  let color;
  if (filter == "watch") {
    color = "green";
  }
  if (filter == "skip") {
    color = "red";
  }
  if (filter == "rest") {
    color = "blue";
  }

  const ref = useRef<HTMLInputElement>(null);

  return (
    <div className="filter">
      <input
        type="checkbox"
        id={`toggle-${filter}`}
        checked={value}
        onChange={(e) => updateFilters(filter, e.target.checked)}
        ref={ref}
      />
      <IconButton
        color={color}
        active={value}
        onClick={() => {
          ref.current?.click();
        }}
      >
        {filter == "watch" && "🍿"}
        {filter == "skip" && "👎"}
        {filter == "rest" && "🎞"}
      </IconButton>
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
