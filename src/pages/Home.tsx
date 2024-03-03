import { dataMining } from "@/assets/images";
import Nav from "@/components/Nav";
import { CardLayout } from "@/layout/CardLayout";

const Home = () => {
  return (
    <>
      <Nav />
      <CardLayout to="/data-mining" imgMk={dataMining} title="Data Mining" />
    </>
  );
};

export default Home;
