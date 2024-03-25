import { dataPrep, dataVisual } from "@/assets/images";
import { LinkTreeWeek2 } from "@/components/LinkTree";
import Body from "@/layout/Body";
import { CardLayout } from "@/layout/CardLayout";
import MainLayout from "@/layout/MainLayout";

const DataPreparation = () => {
  return (
    <MainLayout>
      <LinkTreeWeek2 />
      <Body
        title="Data Preparation dan Data Visualization"
        img={dataPrep}
        date="25 Maret 2024"
        article={
          <p>
            Data preparation adalah proses pengumpulan, penggabungan, penataan,
            dan pengorganisasian data sehingga dapat digunakan dalam aplikasi
            business intelligence (BI), analitik, dan visualisasi data. Data
            preparation (persiapan data) adalah tahap penting dalam proses data
            mining yang melibatkan persiapan dan pembersihan data untuk
            memastikan bahwa data tersebut siap untuk analisis. Berikut adalah
            beberapa langkah yang umum dilakukan dalam data preparation:
            <br />
            <br />
            <strong>1. DATA COLLECTION</strong>
            <br />
            Data yang relevan dikumpulkan dari sistem operasional, data
            warehouse, data lake, dan sumber data lainnya. Selama langkah
            pengumpulan data, data scientist, anggota tim BI, professional data
            lainnya, serta pengguna akhir yang mengumpulkan data harus
            mengonfirmasi bahwa data tersebut sesuai dengan tujuan aplikasi
            analitik yang direncanakan.
            <br />
            <br />
            <strong>2. DATA DISCOVERY AND PROFILING</strong>
            <br />
            Langkah selanjutnya adalah data discovery dan profiling yang berguna
            untuk mengeksplorasi data yang dikumpulkan. Dari eksplorasi
            tersebut, apa yang terkandung dalam data akan lebih mudah dipahami.
            Langkah-langkah yang perlu dilakukan untuk mempersiapkan data sesuai
            tujuan penggunaannya juga bisa ditentukan. Langkah profiling atau
            pembuatan profil data bisa membantu mengidentifikasi pola, hubungan,
            dan atribut lain dalam data, serta mengatasi inkonsistensi, anomali,
            nilai yang hilang, dan masalah lain yang terdapat pada data.
            <br />
            <br />
            <strong>3. DATA CLEANSING</strong>
            <br />
            Data cleansing adalah proses memperbaiki kesalahan dan masalah data
            yang teridentifikasi guna membuat kumpulan data yang lengkap dan
            akurat. Misalnya, sebagai bagian dari data cleansing, data yang
            salah akan dihapus atau diperbaiki, nilai yang hilang akan diisi,
            dan entri yang tidak konsisten akan diselaraskan.
            <br />
            <br />
            <strong>4. DATA FORMATTING</strong>
            <br />
            Setelah kumpulan data dibersihkan, data perlu diformat. Langkah ini
            mencakup penyelesaian masalah seperti beberapa format tanggal dalam
            data atau singkatan yang tidak konsisten. Ada juga kemungkinan bahwa
            beberapa variabel data tidak diperlukan untuk analisis, sehingga
            harus dihapus dari kumpulan data analisis. Langkah data preparation
            ini akan mendapat manfaat dari automasi. Langkah cleansing dan
            formatting harus disimpan ke dalam strategi berulang yang dapat
            diterapkan oleh para ilmuwan atau insinyur data ke kumpulan data
            serupa di masa mendatang. Misalnya, analisis bulanan data penjualan
            dan support kemungkinan akan memiliki sumber yang sama, sehingga
            langkah pembersihan dan pemformatan yang diperlukan juga akan sama
            setiap bulannya.
            <br />
            <br />
            <strong>5. DATA COMBINING DAN ANALYZING</strong>
            <br />
            Saat kumpulan data telah dibersihkan dan diformat, data kemudian
            dapat diubah dengan digabungkan bersama kumpulan input. Setelah
            langkah penggabungan selesai, data siap untuk dipindahkan ke staging
            area data warehouse. Begitu data dimuat ke dalam staging area, ada
            kesempatan kedua untuk validasi. Setelah analisis dimulai, perubahan
            pada kumpulan data hanya boleh dilakukan dengan sangat hati-hati.
            Selama analisis, algoritma biasanya disesuaikan dan dibandingkan
            dengan hasil lainnya. Perubahan pada data dapat mengubah hasil
            analisis sehingga sulit untuk menentukan apakah perbedaan hasil
            tersebut disebabkan oleh perubahan pada data atau algoritma.
            <br />
            <br />
            <strong>6. DATA VALIDATION</strong>
            <br />
            Pada langkah terakhir ini, rutinitas otomatis dijalankan terhadap
            data untuk memvalidasi konsistensi, kelengkapan, dan akurasinya.
            Data yang disiapkan kemudian disimpan pada data warehouse, data
            lake, atau repositori lain dan digunakan secara langsung oleh siapa
            pun yang menyiapkannya. Bisa juga tersedia untuk diakses pengguna
            lain.
            <br />
            <br />
            Melalui persiapan data yang cermat, analisis data mining dapat
            menghasilkan wawasan yang lebih akurat dan berguna untuk mendukung
            pengambilan keputusan yang lebih baik dalam berbagai bidang.
          </p>
        }
      />
      <div className="flex flex-col justify-center items-center gap-2">
        <CardLayout
          to="/data-mining/week2/data-visual"
          imgMk={dataVisual}
          title="Data Visualization"
        />
      </div>
    </MainLayout>
  );
};

export default DataPreparation;
