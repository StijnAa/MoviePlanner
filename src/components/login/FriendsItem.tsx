import Image from "next/image";

const FriendsItem = () => {
  return (
    <li className="friend-item">
      <div className="friend-item__image-container">
        <Image
          src="https://via.placeholder.com/150"
          alt="placeholder"
          className="friend-item__image"
          width={100}
          height={100}
        />
      </div>
      <p className="friend-item__name">Stijn</p>
      <button className="friend-item__delete">
        <span>X</span>
      </button>
    </li>
  );
};

export default FriendsItem;
