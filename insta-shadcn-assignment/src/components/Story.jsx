import Image from "next/image";
import pfp from "../../public/images/pfp.png";

const Story = ({ path, name }) => {
  return (
    <div className="w-20 flex flex-col justify-center items-center p-1 ">
      <div className="w-15 rounded-full overflow-hidden border-2 border-orange-500 ">
        <Image src={path} alt="pfp" width={80} height={80} />
      </div>
      <p className="text-sm text-gray-500 w-full text-center">{name}</p>
    </div>
  );
};

export default Story;
