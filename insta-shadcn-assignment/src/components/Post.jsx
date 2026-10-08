"use client";
import Image from "next/image";
import pfp from "../../public/images/pfp.png";
import picture from "../../public/images/pfp.png";
import { BsThreeDots } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { BsSend } from "react-icons/bs";
import { GoSmiley } from "react-icons/go";
import { useRef, useState } from "react";

const Post = () => {
  const loveIcon = useRef();
  const [isliked, setliked] = useState(false);

  const like = () => {
    console.log(isliked);
    if (!isliked) {
      setliked(true);
      loveIcon.current.style.animation = "cssPulse 0.5s ease-out 1";
      loveIcon.current.style.color = "red";
    } else {
      setliked(false);
      loveIcon.current.style.animation = "none";
      loveIcon.current.style.color = "black";
    }
  };

  return (
    <div className="border-y-2">
      <div className="flex just justify-between items-center p-2 px-5">
        <div className=" flex justify-center items-center gap-3">
          <div className="w-10 rounded-full overflow-hidden border-2 border-orange-500 ">
            <Image src={pfp} alt="pfp" />
          </div>
          <p className="text-sm font-bold">Dipressed</p>
        </div>
        <BsThreeDots className="text-2xl" />
      </div>
      <Image className="w-full" src={picture} alt="picture" />
      <div className="flex justify-between items-center py-3 px-5 text-gray-500 ">
        <div className="flex gap-5 ">
          <FaRegHeart ref={loveIcon} onClick={like} className="text-xl" />
          <FaRegComment className="text-xl" />
          <BsSend className="text-xl" />
        </div>
        <FaRegBookmark className="text-xl" />
      </div>
      <div className="flex flex-col px-5 gap-1 mb-3">
        <p className="text-xs font-bold">1.2M likes</p>
        <p className="text-xs text-gray-600">
          <span className="font-bold text-black mr-1">Dipressed
            </span> Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Harum deleniti
          dolorem atque
        </p>
        <p className="text-xs text-gray-400">View all Comments</p>
        <p className="text-[10px] text-gray-400">1 MINUTE AGO</p>
      </div>
      <div className="flex justify-between items-center px-5 py-3 gap-5 border-t-1 border-gray-300 mb-5 ">
        <GoSmiley className="text-2xl" />
        <input
          className="text-start w-full focus:outline-none placeholder:text-sm placeholder:text-black"
          type="text"
          placeholder="Add a comment..."
        />
        <button className="text-blue-600 text-sm">Post</button>
      </div>
    </div>
  );
};

export default Post;
