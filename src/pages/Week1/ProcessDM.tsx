import { ccc, crispDm, semma, step } from "@/assets/images";
import Body from "@/layout/Body";
import { CardLayout } from "@/layout/CardLayout";
import MainLayout from "@/layout/MainLayout";

const ProcessDM = () => {
  return (
    <MainLayout>
      <Body
        title="Data Mining dan Tahapannya"
        img={step}
        article={
          <p>
            Data mining adalah sebuah proses yang dilakukan dalam pengumpulan
            informasi dan data penting dengan jumlah yang besar atau disebut
            juga big data. Pada proses pengumpulan informasi ini, metode atau
            teknik yang digunakan di antaranya ilmu matematika, statistika
            ataupun pemanfaatan dalam teknologi kecerdasan buatan atau AI.
            Adapun pengertian data mining dikenal juga dengan istilah lain yaitu
            Knowledge Discovery in Databases (KDD) atau Data Analysis. Berikut
            beberapa kerangka kerja yang umum digunakan oleh para profesional
            dalam industri untuk mengelola dan menyelesaikan proyek Data Mining.
          </p>
        }
      />

      <CardLayout
        to="/data-mining/week1/crisp-dm"
        imgMk={crispDm}
        title="CRISP-DM"
      />
      <CardLayout to="/data-mining/week1/semma" imgMk={semma} title="SEMMA" />
      <CardLayout to="/data-mining/week1/ccc" imgMk={ccc} title="CCC" />
    </MainLayout>
  );
};

export default ProcessDM;
