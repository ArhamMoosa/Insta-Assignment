import Image from "next/image";
import instatxt from "../../public/images/instatxt.png";
import SearchBar from "./SearchBar";
import PageNavigations from "./PageNavigations";

const Navbar = () => {
  return (
    <div className="h-15 border-b-2 border-gray-300 flex  justify-between items-center p-2 px-50 w-full bg-white sticky top-0 z-5">
      <Image className="w-30 h-10" src={instatxt} alt="instagram text" />
      <SearchBar />
      <PageNavigations />
    </div>
  );
};

export default Navbar;
