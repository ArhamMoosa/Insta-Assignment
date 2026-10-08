import { MdHome } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { MdOutlineAddBox } from "react-icons/md";
import { MdOutlineExplore } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import pfp from "../../public/images/pfp.png"
import Image from "next/image";




const PageNavigations = () => {
    return (
        <div className="flex justify-center items-center gap-5">
            <MdHome className="text-2xl"/>
            <RiMessengerLine className="text-2xl"/>
            <MdOutlineAddBox className="text-2xl"/>
            <MdOutlineExplore className="text-2xl"/>
            <FaRegHeart className="text-2xl"/>
            <div className=" w-8 rounded-[50%] overflow-hidden">
                <Image src={pfp} alt="profile pic"/>
            </div>
        </div>
    );
}

export default PageNavigations;