import Footer from "@/components/Footer";
import LinkTree from "@/components/LinkTree";
import Nav from "@/components/Nav";

interface Props {
  children: React.ReactNode;
}

const MainLayout = (props: Props) => {
  return (
    <main>
      <Nav />
      <LinkTree />
      {props.children}
      <Footer />
    </main>
  );
};

export default MainLayout;
