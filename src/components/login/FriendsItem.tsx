import Image from "next/image";
import User from "@/types/user";
import { useRef, useState } from "react";
import useClickOutside from "@/utils/hooks/useClickOutside";
import cx from "classnames";
import { useContext } from "react";
import { UserContext } from "@/state/userContext";

const FriendsItem = (props: User) => {
  const { removeFriend }: any = useContext(UserContext);
  const [active, setActive] = useState(false);
  const itemRef = useRef(null);

  const handleButton = () => {
    setActive((prev) => {
      if (prev) {
        removeFriend(props.uid);
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
