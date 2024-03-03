import { step } from "@/assets/images";
import Nav from "@/components/Nav";
import { CardLayout } from "@/layout/CardLayout";

export const DataMining = () => {
  return (
    <>
      <Nav />
      <CardLayout
        to="data-mining/tahapan-data-mining"
        imgMk={step}
        title="Tahapan pada Data Mining"
      />
    </>
  );
};
