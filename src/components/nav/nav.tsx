import Views from "@/types/views";
import cx from "classnames";

type NavigationProps = {
  view: Views;
  onClickMy: () => void;
  onClickAll: () => void;
  onClickRemoved: () => void;
};

const Navigations = ({
  view,
  onClickMy,
  onClickAll,
  onClickRemoved,
}: NavigationProps) => {
  return (
    <div className="view-switch">
      <div className="view-switch__ham"></div>
      <div className="view-switch__menu">
        <button
          className={cx("view-switch__button", view === "all" && "active")}
          onClick={onClickAll}
        >
          Alle Films
        </button>
        <button
          className={cx("view-switch__button", view === "my-list" && "active")}
          onClick={onClickMy}
        >
          Mijn Lijst
        </button>
        <button
          className={cx("view-switch__button", view === "removed" && "active")}
          onClick={onClickRemoved}
        >
          Verwijdert
        </button>
      </div>
    </div>
  );
};
export default Navigations;
