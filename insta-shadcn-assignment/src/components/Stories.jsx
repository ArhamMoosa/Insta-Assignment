"use client";
import { useRef } from "react";
import Story from "./Story";
import { users } from "@/library/constant";

const Stories = () => {
  const scrollRef = useRef(null);
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  const handleMouseDown = (e) => {
    isDown = true;
    startX = e.pageX - (scrollRef.current?.offsetLeft || 0);
    scrollLeft = scrollRef.current?.scrollLeft || 0;
  };

  const handleMouseUpOrLeave = () => {
    isDown = false;
  };

  const handleMouseMove = (e) => {
    if (!isDown || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      className="flex justtify-start items-center p-2 border-b-1 border-gray-300 overflow-x-auto cursor-grab active:cursor-grabbing select-none flex-nowrap w-full scrollbar-none"
      ref={scrollRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseUpOrLeave}
      onMouseUp={handleMouseUpOrLeave}
      onMouseMove={handleMouseMove}
    >
      {users.map((user, index) => {
        return (
          <Story path={user.profilePic} name={user.username} key={index} />
        );
      })}
    </div>
  );
};

export default Stories;
