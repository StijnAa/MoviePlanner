import Image from "next/image";
import User from "@/types/user";

const FriendsItem = (props: User) => {
  return (
    <li className="friend-item">
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
      <button className="friend-item__delete">
        <span>X</span>
      </button>
    </li>
  );
};

export default FriendsItem;
