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

export const LinkTreeWeek2 = () => {
  return (
    <LinkTree>
      <Link to="/">Home</Link>
      <span className="no-underline">/</span>
      <Link to="/data-mining">Data Mining</Link>
      <span className="no-underline">/</span>
      <Link to="/data-mining/week2">Week 2</Link>
    </LinkTree>
  );
};

export const LinkTreeWeek3 = () => {
  return (
    <LinkTree>
      <Link to="/">Home</Link>
      <span className="no-underline">/</span>
      <Link to="/data-mining">Data Mining</Link>
      <span className="no-underline">/</span>
      <Link to="/data-mining/week3">Week 3</Link>
    </LinkTree>
  );
};
export const LinkTreeWeek4 = () => {
  return (
    <LinkTree>
      <Link to="/">Home</Link>
      <span className="no-underline">/</span>
      <Link to="/data-mining">Data Mining</Link>
      <span className="no-underline">/</span>
      <Link to="/data-mining/week4">Week 4</Link>
    </LinkTree>
  );
};

export const LinkTreeWeek5 = () => {
  return (
    <LinkTree>
      <Link to="/">Home</Link>
      <span className="no-underline">/</span>
      <Link to="/data-mining">Data Mining</Link>
      <span className="no-underline">/</span>
      <Link to="/data-mining/week5">Week 5</Link>
    </LinkTree>
  );
};

export const LinkTreeWeek10 = () => {
  return (
    <LinkTree>
      <Link to="/">Home</Link>
      <span className="no-underline">/</span>
      <Link to="/data-mining">Data Mining</Link>
      <span className="no-underline">/</span>
      <Link to="/data-mining/week10">Week 10</Link>
    </LinkTree>
  );
};
export default LinkTree;
