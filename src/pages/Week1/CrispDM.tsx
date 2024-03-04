import { crispDm } from "@/assets/images";
import Body from "@/layout/Body";
import MainLayout from "@/layout/MainLayout";

const CrispDm = () => {
  return (
    <MainLayout>
      <Body
        title="CRISP-DM"
        img={crispDm}
        article={
          <p>
            CRISP-DM merupakan singkatan dari Cross-Industry Standard Process
            for Data Mining, yang merupakan sebuah model proses yang digunakan
            untuk menggambarkan langkah-langkah yang umumnya dilakukan dalam
            proyek data mining. Model ini dirancang untuk memberikan panduan
            yang sistematis dan terstruktur dalam mengelola proyek data mining
            dari awal hingga akhir.
            <br /> <br />
            Berikut adalah penjelasan singkat mengenai setiap tahapan dalam
            CRISP-DM:
            <br />
            1. Pemahaman Bisnis (Business Understanding): Tahap ini melibatkan
            pemahaman yang mendalam tentang kebutuhan bisnis dan tujuan analisis
            data yang akan dilakukan. Hal ini mencakup identifikasi masalah yang
            ingin dipecahkan dan peluang yang ingin dimanfaatkan melalui data
            mining.
            <br />
            2. Pemahaman Data (Data Understanding): Langkah ini melibatkan
            eksplorasi data yang ada, baik secara kualitatif maupun kuantitatif.
            Tujuannya adalah untuk memahami karakteristik data, melihat
            pola-pola awal, dan mengidentifikasi potensi masalah seperti data
            yang hilang atau tidak lengkap.
            <br />
            3. Persiapan Data (Data Preparation): Tahap ini merupakan proses
            pembersihan, penggabungan, dan transformasi data agar siap digunakan
            untuk analisis lebih lanjut. Ini mencakup pemrosesan data yang
            melibatkan pemilihan fitur, normalisasi, dan ekstraksi fitur.
            <br />
            4. Modeling: Ini adalah tahap utama di mana berbagai teknik data
            mining diterapkan untuk membangun model prediktif atau deskriptif
            dari data. Model-model ini dapat mencakup regresi, klasifikasi,
            klastering, atau teknik lainnya tergantung pada tujuan analisis.
            <br />
            5. Evaluasi Model (Model Evaluation): Setelah model dibangun, tahap
            evaluasi dilakukan untuk mengukur kinerja model menggunakan metrik
            evaluasi yang sesuai. Hal ini membantu menilai sejauh mana model
            dapat digeneralisasi ke data baru dan memenuhi tujuan bisnis yang
            ditetapkan.
            <br />
            6. Pemantauan dan Pemeliharaan (Deployment and Maintenance): Setelah
            implementasi, model dan proses data mining harus dipantau secara
            teratur untuk memastikan bahwa mereka tetap relevan dan efektif.
            Diperlukan pemeliharaan rutin untuk memperbarui model atau proses
            sesuai dengan perubahan data atau kebutuhan bisnis yang berubah.
            <br />
            Proses Data Mining, seperti yang didefinisikan oleh CRISP-DM, adalah
            suatu siklus iteratif dimana setiap tahapan dapat menghasilkan
            penemuan yang dapat digunakan untuk meningkatkan pemahaman bisnis
            dan memperbaiki model analisis di iterasi berikutnya. Ini adalah
            pendekatan yang sangat sistematis dan efektif untuk menjalankan
            proyek Data Mining.
          </p>
        }
      />
    </MainLayout>
  );
};

export default CrispDm;
