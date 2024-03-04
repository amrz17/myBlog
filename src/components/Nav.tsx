import { MdDarkMode } from "react-icons/md";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex justify-center bg-color3 text-white">
      <div className="flex items-center justify-between w-full lg:w-[75%] p-4">
        <Link to="/">
          <h2 className="text-2xl font-bold">Now I Know</h2>
        </Link>
        <Button>
          <MdDarkMode size={30} />
        </Button>
      </div>
    </nav>
  );
};

export default Nav;
