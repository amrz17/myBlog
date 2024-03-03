import { MdDarkMode } from "react-icons/md";
import { Button } from "./ui/button";

const Nav = () => {
  return (
    <nav className="flex justify-center border border-b-black">
      <div className="flex items-center justify-between w-full lg:w-[75%] p-4">
        <h2 className="text-2xl font-bold">Now I Know</h2>
        <Button>
          <MdDarkMode size={30} />
        </Button>
      </div>
    </nav>
  );
};

export default Nav;
