import { dataMining } from "@/assets/images";
import { CardLayout } from "@/layout/CardLayout";
import MainLayout from "@/layout/MainLayout";

const Home = () => {
  return (
    <MainLayout>
      <div className="h-screen flex justify-center items-center">
        <CardLayout to="/data-mining" imgMk={dataMining} title="Data Mining" />
      </div>
    </MainLayout>
  );
};

export default Home;
