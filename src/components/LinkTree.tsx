import { Link } from "react-router-dom";

interface Prop {
  children: React.ReactNode;
}

const LinkTree = (props: Prop) => {
  return (
    <div
      className="flex text-center items-center gap-1 p-1 lg:px-4
      underline text-color3 decoration-color3 hover:text-blue-800
      hover:decoration-blue-800 hover:underline-offset-2 lg:text-lg"
    >
      {props.children}
    </div>
  );
};

export const LinkTreeWeek1 = () => {
  return (
    <LinkTree>
      <Link to="/">Home</Link>
      <span className="no-underline">/</span>
      <Link to="/data-mining">Data Mining</Link>
      <span className="no-underline">/</span>
      <Link to="/data-mining/week1">Week 1</Link>
    </LinkTree>
  );
};

export default LinkTree;
