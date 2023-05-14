import Views from "@/types/views";
import cx from "classnames";

type NavigationProps = {
  view: Views;
  onClick: () => void;
};

const Navigations = ({ view, onClick }: NavigationProps) => {
  return (
    <div className="view-switch">
      <div className="view-switch__ham"></div>
      <div className="view-switch__menu">
        <button
          className={cx("view-switch__button", view === "all" && "active")}
          value="all"
          onClick={onClick}
        >
          Alle Films
        </button>
        <button
          className={cx("view-switch__button", view === "my-list" && "active")}
          value="my-list"
          onClick={onClick}
        >
          Mijn Lijst
        </button>
        <button
          className={cx("view-switch__button", view === "removed" && "active")}
          value="removed"
          onClick={onClick}
        >
          Verwijderd
        </button>
        <button
          className={cx("view-switch__button", view === "old" && "active")}
          value="old"
          onClick={onClick}
        >
          Oude Films
        </button>
      </div>
    </div>
  );
};
export default Navigations;
