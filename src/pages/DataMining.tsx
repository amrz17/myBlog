import { step } from "@/assets/images";
import LinkTree from "@/components/LinkTree";
import { CardLayout } from "@/layout/CardLayout";
import MainLayout from "@/layout/MainLayout";
import { Link } from "react-router-dom";

const DataMining = () => {
  return (
    <MainLayout>
      <LinkTree>
        <Link to="/">Home</Link>
        <span className="no-underline">/</span>
        <Link to="/data-mining">Data Mining</Link>
      </LinkTree>
      <div
        className="h-[30rem] lg:h-screen flex justify-center
        "
      >
        <CardLayout
          to="/data-mining/week1"
          imgMk={step}
          title="Data Mining & Tahapannya"
        />
      </div>
    </MainLayout>
  );
};

export default DataMining;
