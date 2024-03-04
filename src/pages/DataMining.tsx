import { step } from "@/assets/images";
import { CardLayout } from "@/layout/CardLayout";
import MainLayout from "@/layout/MainLayout";

const DataMining = () => {
  return (
    <MainLayout>
      <div className="h-[30rem]">
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
