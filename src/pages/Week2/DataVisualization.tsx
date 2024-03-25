import { dataVisual } from "@/assets/images";
import { LinkTreeWeek2 } from "@/components/LinkTree";
import Body from "@/layout/Body";
import MainLayout from "@/layout/MainLayout";

const DataVisualization = () => {
  return (
    <MainLayout>
      <LinkTreeWeek2 />
      <Body
        title="DATA VISUALIZATION"
        img={dataVisual}
        date="25 Maret 2024"
        article={
          <p>
            Setelah tahapan data preparation di data mining, langkah selanjutnya
            adalah melakukan data analysis. Data analysis melibatkan penggunaan
            teknik dan algoritma data mining untuk menggali wawasan yang
            berharga dari data yang telah dipersiapkan. Setelah data analysis
            dilakukan, barulah dilakukan data visualization. Data visualization
            dilakukan setelah langkah data analysis karena visualisasi data
            bertujuan untuk menyajikan hasil analisis dengan cara yang mudah
            dimengerti dan informatif. Visualisasi membantu dalam memahami
            pola-pola yang ditemukan dalam data, mengidentifikasi tren, dan
            menyoroti temuan penting kepada pemangku kepentingan yang mungkin
            tidak memiliki latar belakang analitis. Dengan kata lain Data
            visualization (visualisasi data) adalah proses menyajikan data
            secara visual melalui grafik, diagram, peta, atau plot lainnya. Ini
            adalah komponen penting dalam proses data mining karena memungkinkan
            pemahaman yang lebih baik tentang pola, tren, dan hubungan dalam
            data yang kompleks. Berikut adalah beberapa alasan mengapa data
            visualization penting dalam data mining:
            <br />
            <br />
            <strong>1. Pemahaman yang Lebih Baik</strong>
            <br />
            Visualisasi data membantu dalam pemahaman yang lebih baik tentang
            struktur dan karakteristik data. Grafik dan plot memungkinkan analis
            untuk dengan cepat mengidentifikasi pola dan anomali yang mungkin
            tidak terlihat dalam data mentah.
            <br />
            <br />
            <strong>2. Komunikasi yang efektif</strong>
            <br />
            Visualisasi data memungkinkan analis untuk mengkomunikasikan temuan
            mereka dengan lebih efektif kepada pemangku kepentingan yang mungkin
            tidak memiliki latar belakang analitis. Grafik dan diagram dapat
            menyederhanakan informasi kompleks menjadi format yang mudah
            dimengerti.
            <br />
            <br />
            <strong>3. Penemuan Insight</strong>
            <br />
            Dengan menggunakan teknik visualisasi yang tepat, analis dapat
            menemukan wawasan yang tidak terduga atau hubungan yang tersembunyi
            dalam data. Ini dapat membuka peluang baru atau membantu dalam
            pengambilan keputusan yang lebih baik.
            <br />
            <br />
            <strong>4. Pemilihan Fitur</strong>
            <br />
            Visualisasi dapat membantu dalam pemilihan fitur yang tepat untuk
            model prediktif atau analisis lanjutan. Melalui visualisasi, analis
            dapat mengidentifikasi fitur-fitur yang paling bermakna atau
            mempengaruhi target yang ingin diprediksi.
            <br />
            <br />
            <strong>5. Evaluasi Model</strong>
            <br />
            Selain membantu dalam membangun model prediktif, visualisasi juga
            dapat digunakan untuk mengevaluasi kinerja model. Grafik seperti
            kurva ROC atau confusion matrix dapat memberikan pemahaman yang
            lebih baik tentang kekuatan dan kelemahan dari model yang
            dikembangkan.
            <br />
            <br />
            <strong>6. Pembuatan Keputusan yang berbasis Data</strong>
            <br />
            Visualisasi data memungkinkan pemangku kepentingan untuk membuat
            keputusan yang berbasis data dengan lebih percaya diri. Melalui
            visualisasi, mereka dapat melihat bukti yang mendukung atau
            menentang hipotesis atau keputusan tertentu.
            <br />
            <br />
            Dengan menggunakan visualisasi data yang tepat, analis dapat
            menggali wawasan yang berharga dari data yang ada dan mendukung
            pengambilan keputusan yang lebih baik dan lebih efektif.
          </p>
        }
      />
    </MainLayout>
  );
};

export default DataVisualization;
