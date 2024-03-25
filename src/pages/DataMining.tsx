import { dataPrep, step } from "@/assets/images";
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
        className="md:h-screen flex flex-col lg:flex-row justify-center
        mb-2"
      >
        <CardLayout
          to="/data-mining/week1"
          imgMk={step}
          title="Data Mining & Tahapannya"
        />
        <CardLayout
          to="/data-mining/week2"
          imgMk={dataPrep}
          title="Data Preparation & visualization"
        />
      </div>
    </MainLayout>
  );
};

export default DataMining;
