import { ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

const LinkTree = () => {
  return (
    <div className="flex text-center items-center gap-1 p-2">
      <Link to="/" className="hover:bg-black hover:text-white">
        <Home size={20} />
      </Link>
      <ChevronRight size={20} />
      <Link to="/data-mining" className="text-lg hover:underline">
        Week 1
      </Link>
    </div>
  );
};

export default LinkTree;
