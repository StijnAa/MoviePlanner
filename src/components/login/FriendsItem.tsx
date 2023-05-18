import Image from "next/image";
import User from "@/types/user";
import { useRef, useState } from "react";
import useClickOutside from "@/utils/hooks/useClickOutside";
import cx from "classnames";

const FriendsItem = (props: User) => {
  const [active, setActive] = useState(false);
  const itemRef = useRef(null);

  const handleButton = () => {
    setActive((prev) => {
      if (prev) {
        console.log("clicked");
      }
      return true;
    });
  };

  useClickOutside({ ref: itemRef, onClick: () => setActive(false) });

  return (
    <li className={cx("friend-item", active && "delete")} ref={itemRef}>
      <button className="friend-item__button" onClick={handleButton}>
        <div className="friend-item__image-container">
          <Image
            src={props.photoUrl}
            alt="placeholder"
            className="friend-item__image"
            width={100}
            height={100}
          />
        </div>
        <p className="friend-item__name">{props.name}</p>
        {active && <div className="friend-item__cross">✖</div>}
      </button>
    </li>
  );
};

export default FriendsItem;
