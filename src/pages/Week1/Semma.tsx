import { semma } from "@/assets/images";
import Body from "@/layout/Body";
import MainLayout from "@/layout/MainLayout";

const Semma = () => {
  return (
    <MainLayout>
      <Body
        title="SEMMA"
        img={semma}
        article={
          <p>
            SEMMA adalah singkatan dari "Sample, Explore, Modify, Model,
            Assess". Ini adalah salah satu kerangka kerja atau proses yang
            digunakan dalam Data Mining, khususnya dalam pengolahan data yang
            lebih sederhana atau untuk pemodelan prediktif. SEMMA adalah
            kerangka kerja yang dikembangkan oleh SAS Institute, yang sering
            digunakan dalam perangkat lunak SAS Enterprise Miner untuk melakukan
            analisis data dan membangun model prediktif.
            <br /> <br />
            Berikut adalah penjelasan singkat tentang masing-masing tahapan
            dalam kerangka kerja SEMMA:
            <br />
            1. Sample (Sampling) <br />
            Tahap pertama dalam SEMMA adalah pengambilan sampel data yang
            relevan dari sumber data utama. Pengambilan sampel ini dapat
            dilakukan untuk mengurangi ukuran data, menghilangkan data yang
            tidak relevan, atau mempercepat proses analisis.
            <br />
            2. Explore (Exploratory Data Analysis) <br />
            Tahap ini melibatkan eksplorasi data secara mendalam untuk memahami
            karakteristik, pola, dan hubungan antara variabel. Teknik analisis
            eksplorasi data, seperti visualisasi data, ringkasan statistik, dan
            pemahaman domain, digunakan untuk mendapatkan wawasan tentang data.
            <br />
            3. Modify (Data Preparation) <br />
            Tahap ini melibatkan persiapan data untuk analisis lebih lanjut dan
            pembangunan model. Pembersihan data dilakukan untuk menangani nilai
            yang hilang, outlier, atau noise. Transformasi data juga dapat
            dilakukan untuk mengubah bentuk atau distribusi variabel.
            <br />
            4. Model (Modeling) <br />
            Tahap ini melibatkan pembangunan model prediktif menggunakan teknik
            atau algoritma yang sesuai. Data yang telah dipersiapkan digunakan
            untuk melatih model prediktif, seperti regresi, klasifikasi, atau
            clustering.
            <br />
            5. Assess (Assessment) <br />
            Tahap terakhir adalah evaluasi model yang telah dibangun untuk
            memastikan kualitas dan keefektifan prediksinya. Model dievaluasi
            menggunakan metrik kinerja yang relevan, seperti akurasi, presisi,
            recall, atau AUC (Area Under the Curve), dan dianalisis apakah
            memenuhi tujuan bisnis atau tidak.
            <br />
            Kerangka kerja SEMMA membantu para profesional dalam Data Mining
            untuk menjalankan proyek dengan cara yang sistematis dan
            terstruktur, mulai dari pengambilan sampel data hingga pengujian
            model dan evaluasi hasilnya. Ini membantu dalam menghasilkan model
            prediktif yang lebih kuat dan relevan dengan tujuan bisnis yang
            diinginkan.
          </p>
        }
      />
    </MainLayout>
  );
};

export default Semma;
