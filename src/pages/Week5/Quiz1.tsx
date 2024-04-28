import {
  analisis1,
  analisis2,
  analisis3,
  analisis4,
  quiz,
} from "@/assets/images";
import { LinkTreeWeek5 } from "@/components/LinkTree";
import Body from "@/layout/Body";
import MainLayout from "@/layout/MainLayout";
import { Link } from "react-router-dom";

const Quiz1 = () => {
  return (
    <MainLayout>
      <LinkTreeWeek5 />
      <Body
        title="Quiz 1"
        img={quiz}
        date="25 Maret 2024"
        article={
          <p>
            <strong>Soal Quiz 1 : </strong>
            Anda diberikan data transkrip nilai dan data lulusan dari
            universitas melalui API. Data transkrip nilai mencakup detail nilai
            yang diperoleh mahasiswa untuk mata kuliah yang diambil. Data
            lulusan memberikan informasi demografis dan akademik mahasiswa,
            termasuk tanggal masuk dan lulus, serta predikat kelulusan.
            <br />
            <br />
            <strong>1. Integrasi dan Pembersihan Data.</strong>
            <br />
            Link Google Colab :{" "}
            <Link
              target="_blank"
              to="https://drive.google.com/file/d/1YaHtnY0vPT30-CGyNMV9cZWbd7X0HxjQ/view?usp=sharing"
              className="text-blue-600 underline underline-offset-2 hover:text-blue-400 hover:underline-offset-4"
            >
              Quiz_1.pynb
            </Link>
            <br />
            <br />
            <strong>2. Analisis</strong>
            <br />
            Link Google Colab :{" "}
            <Link
              target="_blank"
              to="https://colab.research.google.com/drive/1rx3letXaKZ2Dv-bf9mDxGGqaFMTaGChP?usp=sharing"
              className="text-blue-600 underline underline-offset-2 hover:text-blue-400 hover:underline-offset-4"
            >
              Analisis_Quiz1.pynb
            </Link>
            <br />
            <br />
            <strong>3. Laporan Hasil Analisis</strong>
            <br />
            Link pdf :{" "}
            <Link
              target="_blank"
              to="https://drive.google.com/file/d/1vXX8nKLL1hVWA82v8vrhaQSborGBusct/view?usp=sharing"
              className="text-blue-600 underline underline-offset-2 hover:text-blue-400 hover:underline-offset-4"
            >
              Laporan_quiz1_Data_Maining.pdf
            </Link>
            <br />
            <br />
            1. Analisis apakah ada hubungan antara nilai rata-rata mata kuliah
            atau IPS dengan lulusan tepat waktu.
            <img src={analisis1} />
            1) Korelasi Korelasi antara IPS dan status lulus tepat waktu adalah
            adalah -0.17896346580809233, maka itu menunjukkan adanya korelasi
            negatif yang lemah antara dua variabel yang diamati. Nilai korelasi
            mendekati -1 menunjukkan korelasi negatif yang sempurna, sedangkan
            nilai mendekati 0 menunjukkan korelasi yang lemah atau tidak-ada
            korelasi sama sekali. Dalam hal ini, nilai korelasi -0.1789
            menunjukkan bahwa ada hubungan negatif yang lemah antara variabel
            tersebut. Ini berarti ketika satu variabel meningkat, variabel
            lainnya cenderung menurun, dan sebaliknya, tetapi hubungannya tidak
            terlalu kuat.
            <br /> <br /> 2). Akurasi Model Prediksi Akurasi model prediksi yang
            dikembangkan adalah sebesar 89.65%. Akurasi ini menunjukkan seberapa
            baik model dapat memprediksi apakah seorang mahasiswa akan lulus
            tepat waktu atau tidak berdasarkan nilai IPS mereka. <br />
            <br /> Dengan demikian, berdasarkan analisis tersebut, kita dapat
            menyimpulkan bahwa nilai IPS memiliki korelasi negatif yang lemah
            dengan status lulus tepat waktu, dan model prediktif yang
            dikembangkan memiliki akurasi yang cukup tinggi dalam memprediksi
            status kelulusan tepat waktu berdasarkan nilai IPS.
            <br /> <br />
            2. Analisis apakah ada korelasi positif antara predikat kelulusan
            'Pujian' dengan lulusan tepat waktu.
            <img src={analisis2} />
            1). Korelasi antara Predikat dan Lulus Tepat Waktu: Korelasi antara
            predikat (mungkin dari model klasifikasi) dan status lulus tepat
            waktu adalah sebesar 0.419. Korelasi positif menunjukkan bahwa
            semakin tinggi predikat (mungkin berarti semakin tinggi probabilitas
            lulus tepat waktu), semakin tinggi kemungkinan seseorang lulus tepat
            waktu.
            <br />
            <br />
            2) Akurasi Model Prediksi Akurasi model prediksi yang dikembangkan
            adalah sebesar 89.71%.Akurasi ini menunjukkan seberapa baik model
            dapat memprediksi apakah seorang mahasiswa akan lulus tepat waktu
            atau tidak berdasarkan predikat yang dihasilkan.
            <br />
            <br />
            Dengan demikian, berdasarkan analisis tersebut, kita dapat
            menyimpulkan bahwa predikat memiliki korelasi positif yang sedang
            dengan status lulus tepat waktu, dan model prediktif yang
            dikembangkan memiliki akurasi yang cukup tinggi dalam memprediksi
            status kelulusan tepat waktu berdasarkan predikat yang dihasilkan.
            <br />
            <br />
            3. Analisis untuk melihat apakah durasi studi lebih pendek
            berkorelasi dengan predikat kelulusan yang lebih baik.
            <img src={analisis3} />
            1) Korelasi antara Predikat dan Lama Kuliah: Korelasi antara
            predikat dan lama kuliah adalah sebesar 0.382. Korelasi positif
            menunjukkan bahwa semakin tinggi predikat yang didapat mahasiswayang
            mana predikat pujian itu bernilai 1, maka semakin lama mahasiswa
            tersebut berada di perguruan tinggi.
            <br />
            <br />
            2). Akurasi Model Prediksi Akurasi model prediksi yang dikembangkan
            adalah sebesar 45.91%. Akurasi ini menunjukkan seberapa baik model
            dapat memprediksi predikat berdasarkan lama kuliah mahasiswa.
            <br />
            <br />
            Dengan demikian, berdasarkan analisis tersebut, kita dapat
            menyimpulkan bahwa lama kuliah memiliki korelasi positif yang sedang
            dengan predikat dan model prediktif yang dikembangkan memiliki
            akurasi yang rendah dalam memprediksi predikat berdasarkan lama
            kuliah mahasiswa.
            <br />
            <br />
            4. Hitung rata-rata nilai total untuk masing-masing jenis kelamin
            dan bandingkan untuk melihat apakah ada perbedaan signifikan dalam
            prestasi akademik berdasarkan jenis kelamin.
            <img src={analisis4} />
            1) Rata-rata Predikat Berdasarkan Jenis Kelamin Rata-rata predikat
            yang diperoleh berdasarkan jenis kelamin adalah sebagai berikut:
            <br /> ● Untuk jenis kelamin laki-laki: 1.309 <br /> ● Untuk jenis
            kelamin perempuan: 1.448 Terdapat perbedaan rata-rata predikat yang
            signifikan antara laki-laki dan perempuan.
            <br />
            <br />
            2) Korelasi antara Predikat dan Lama Kuliah Korelasi antara predikat
            dan lama kuliah adalah sebesar 0.133. Korelasi positif yang lemah
            menunjukkan adanya hubungan yang sedikit positif antara predikat dan
            lama kuliah. Namun, korelasi tersebut tidak terlalu kuat.
            <br />
            <br />
            3) Akurasi Model Prediksi: Akurasi model prediksi yang dikembangkan
            adalah sebesar 57.74%. Akurasi ini menunjukkan seberapa baik model
            dapat memprediksi predikat berdasarkan fitur-fitur yang digunakan,
            seperti lama kuliah.
            <br />
            <br />
            Dengan demikian, berdasarkan analisis tersebut, kita dapat
            menyimpulkan bahwa terdapat perbedaan yang signifikan dalam
            rata-rata predikat yang diperoleh antara laki-laki dan perempuan.
            Selain itu, terdapat hubungan yang lemah antara predikat dan lama
            kuliah, serta model prediksi memiliki akurasi yang cukup baik dalam
            memprediksi predikat berdasarkan fitur-fitur yang digunakan.
          </p>
        }
      />
    </MainLayout>
  );
};

export default Quiz1;
