import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

interface Props {
  children: React.ReactNode;
}

const MainLayout = (props: Props) => {
  return (
    <main>
      <Nav />
      {props.children}
      <Footer />
    </main>
  );
};

export default MainLayout;
