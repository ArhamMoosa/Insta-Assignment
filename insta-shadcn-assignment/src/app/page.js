import Navbar from "@/components/Navbar";
import Post from "@/components/Post";
import Stories from "@/components/Stories";

const page = () => {
  return (
    <div className="w-screen h-full flex flex-col justify-start items-center bg-gray-100">
      <Navbar />
      <div className="border-1 w-[40%] bg-white mt-5 border-gray-300">
        <Stories />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default page;
