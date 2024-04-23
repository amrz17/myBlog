import { preprocessing } from "@/assets/images";
import { LinkTreeWeek3 } from "@/components/LinkTree";
import Body from "@/layout/Body";
import MainLayout from "@/layout/MainLayout";

const DataPreprocessing = () => {
  return (
    <MainLayout>
      <LinkTreeWeek3 />
      <Body
        title="Data Preprocessing"
        img={preprocessing}
        date="25 Maret 2024"
        article={
          <p>
            Data preprocessing adalah proses persiapan data sebelum dilakukan
            analisis atau pemodelan. Tujuan utama dari data preprocessing adalah
            untuk memastikan bahwa data yang akan digunakan untuk analisis lebih
            bersih, lebih akurat, dan lebih siap untuk dieksplorasi menggunakan
            teknik-teknik analisis data. Proses ini melibatkan berbagai teknik
            dan langkah-langkah untuk membersihkan, mentransformasi, dan
            mempersiapkan data agar dapat digunakan secara efektif oleh
            algoritma pembelajaran mesin atau analisis statistik. Proses data
            preprocessing melibatkan langkah-langkah seperti:
            <br />
            <br />
            <strong>1. Data Cleansing</strong>
            <br />
            Mengidentifikasi dan mengatasi data yang tidak lengkap, tidak
            akurat, atau tidak konsisten. Dalam data mining, data yang tidak
            bersih atau cacat dapat menghasilkan hasil analisis yang tidak dapat
            diandalkan atau model yang tidak akurat.
            <br />
            <br />
            <strong>2. Data Collection</strong>
            <br />
            Proses pengumpulan dan akuisisi data mentah dari berbagai sumber
            untuk digunakan dalam analisis lebih lanjut. Ini adalah langkah
            pertama dan kritis dalam siklus analisis data yang melibatkan
            identifikasi, perolehan, dan penyimpanan data yang relevan dan
            bermakna untuk tujuan analisis.
            <br />
            <br />
            <strong>3. Data Transform</strong>
            <br />
            Mengubah format atau representasi data menjadi bentuk yang lebih
            sesuai untuk analisis, misalnya, mengubah format tanggal,
            mengonversi variabel kategorikal menjadi bentuk numerik, atau
            melakukan normalisasi pada data numerik. Tujuan dari data transform
            adalah untuk meningkatkan kualitas dan relevansi data serta
            mempersiapkannya untuk pemodelan dan analisis.
            <br />
            <br />
            <strong>4. Data Reduction</strong>
            <br />
            Proses mengurangi volume atau kompleksitas data yang ada tanpa
            mengorbankan informasi yang penting. Tujuannya adalah untuk membuat
            data lebih mudah dikelola, dipahami, dan diproses oleh algoritma
            data mining, tanpa mengorbankan kualitas analisis atau pemahaman
            tentang data tersebut. Data reduction dapat dilakukan pada berbagai
            tahap dalam proses analisis data, mulai dari pra-pemrosesan hingga
            pengambilan keputusan.
          </p>
        }
      />
    </MainLayout>
  );
};

export default DataPreprocessing;
