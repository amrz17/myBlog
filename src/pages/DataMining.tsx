import {
  SL,
  dataPrep,
  dataPreprocess,
  discuss,
  quiz,
  step,
} from "@/assets/images";
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
        className="xl:h-screen flex flex-col lg:flex-row lg:grid lg:grid-cols-2 xl:grid-cols-3 lg:overflow-clip justify-center
        mt-4"
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
        <CardLayout
          to="/data-mining/week3"
          imgMk={dataPreprocess}
          title="Data Preprocessing"
        />
        <CardLayout
          to="/data-mining/week4"
          imgMk={discuss}
          title="Diskusi Kelompok"
        />
        <CardLayout to="/data-mining/week5" imgMk={quiz} title="Quiz 1" />
        <CardLayout
          to="/data-mining/week10"
          imgMk={SL}
          title="Supervised Learning"
        />
      </div>
    </MainLayout>
  );
};

export default DataMining;
