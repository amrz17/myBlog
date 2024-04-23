import { preprocessing } from "@/assets/images";
import { LinkTreeWeek4 } from "@/components/LinkTree";
import Body from "@/layout/Body";
import MainLayout from "@/layout/MainLayout";

const Discussion = () => {
  return (
    <MainLayout>
      <LinkTreeWeek4 />
      <Body
        title="Diskusi Kelompok"
        img={preprocessing}
        date="25 Maret 2024"
        article={<p></p>}
      />
    </MainLayout>
  );
};

export default Discussion;
