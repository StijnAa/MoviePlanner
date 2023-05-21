import React from "react";
import cx from "classnames";
import classNames from "classnames";

export interface ButtonProps {
  className?: string;
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <div className={cx("button__container", className)}>
      <button className="button" onClick={onClick}>
        {text}
      </button>
    </div>
  );
};
export default Button;
