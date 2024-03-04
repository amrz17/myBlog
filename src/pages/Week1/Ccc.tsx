import { ccc } from "@/assets/images";
import Body from "@/layout/Body";
import MainLayout from "@/layout/MainLayout";

const Ccc = () => {
  return (
    <MainLayout>
      <Body
        title="SEMMA"
        img={ccc}
        article={
          <p>
            CCC (Crisp Cross-Industry Process for Data Mining) adalah kerangka
            kerja alternatif yang sering digunakan dalam Data Mining. Meskipun
            memiliki akronim yang mirip dengan CRISP-DM, CCC adalah kerangka
            kerja yang lebih ringkas dan sederhana. CCC menyatukan
            tahapan-tahapan penting dalam proses Data Mining ke dalam empat
            tahapan utama:
            <br />
            1. Understanding the Business <br />
            Tahap ini mirip dengan tahap "Understanding the Business" dalam
            CRISP-DM. Pada tahap ini, fokus diberikan pada pemahaman yang
            mendalam terhadap tujuan bisnis atau tujuan analisis data. Hal ini
            meliputi identifikasi masalah atau kesempatan bisnis yang ingin
            dipecahkan, serta pemahaman terhadap konteks dan batasan dari proyek
            Data Mining.
            <br />
            2. Data Understanding <br />
            Tahap ini mirip dengan tahap "Understanding the Data" dalam
            CRISP-DM. Pada tahap ini, fokus diberikan pada pemahaman yang
            mendalam terhadap data yang akan digunakan dalam proyek. Ini
            mencakup pengumpulan data, eksplorasi data, pemahaman terhadap
            kualitas data, dan identifikasi karakteristik utama dari data
            tersebut.
            <br />
            3. Modeling <br />
            Tahap ini mirip dengan tahap "Modeling" dalam CRISP-DM. Pada tahap
            ini, fokus diberikan pada pengembangan model analisis data. Ini
            meliputi pemilihan model atau algoritma yang sesuai, pelatihan model
            menggunakan data yang telah dipersiapkan sebelumnya, dan evaluasi
            model untuk memastikan kualitas dan keefektifan prediksinya.
            <br />
            4. Deployment <br />
            Tahap ini mirip dengan tahap "Deployment" dalam CRISP-DM. Pada tahap
            ini, fokus diberikan pada implementasi dan penggunaan hasil analisis
            data dalam lingkungan bisnis atau operasional. Ini meliputi
            implementasi model, integrasi solusi Data Mining ke dalam proses
            bisnis yang ada, dan pemeliharaan model untuk memastikan konsistensi
            performa.
            <br />
            Meskipun CCC adalah kerangka kerja yang lebih sederhana dibandingkan
            dengan CRISP-DM, namun tetap memberikan panduan yang berguna bagi
            para profesional Data Mining dalam menjalankan proyek-proyek
            analisis data. Dengan mengikuti CCC, para profesional dapat
            memastikan bahwa proyek Data Mining mereka dilakukan secara
            terstruktur dan sistematis, dengan fokus pada pencapaian tujuan
            bisnis yang diinginkan.
          </p>
        }
      />
    </MainLayout>
  );
};

export default Ccc;
