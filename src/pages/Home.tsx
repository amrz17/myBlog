import { dataMining } from "@/assets/images";
import { CardLayout } from "@/layout/CardLayout";
import MainLayout from "@/layout/MainLayout";

const Home = () => {
  return (
    <MainLayout>
      <div className="h-[30rem] lg:h-screen flex items-center justify-center">
        <CardLayout to="/data-mining" imgMk={dataMining} title="Data Mining" />
      </div>
    </MainLayout>
  );
};

export default Home;
