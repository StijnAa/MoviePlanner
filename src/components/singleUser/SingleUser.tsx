import react from "react";
import Image from "next/image";
import User from "@/types/user";

const SingleUser = ({ user }: { user: User }) => {
  return (
    <div className="single-user">
      {user.photoUrl && (
        <div className="single-user__image-container">
          <Image
            src={user.photoUrl}
            alt="user profile picture"
            width={200}
            height={200}
          />
        </div>
      )}
      <span className="single-user__name">{user.name}</span>
    </div>
  );
};

export default SingleUser;
