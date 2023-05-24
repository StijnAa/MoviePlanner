import cx from "classnames";
import Link from "next/link";
import FilterBar from "./filterBar";

type NavigationProps = {
  page?: string;
};

const Navigation = ({ page }: NavigationProps) => {
  return (
    <div className="navigation">
      <div className="navigation__menu">
        <Link
          className={cx("navigation__link", page === "movies" && "active")}
          href="/"
        >
          Films
        </Link>
        <Link
          className={cx("navigation__link", page === "account" && "active")}
          href="/account"
        >
          Account
        </Link>
      </div>
    </div>
  );
};
export default Navigation;
