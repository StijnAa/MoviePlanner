import react from "react";
import cx from "classnames";

const IconButton = (props: any) => {
  const { color, onClick, active, disabled, children } = props;
  return (
    <button
      className={cx("icon-button", `icon-button--${color}`, active && "active")}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default IconButton;
