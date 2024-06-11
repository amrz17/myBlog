import { SL } from "@/assets/images";
import { LinkTreeWeek10 } from "@/components/LinkTree";
import Body from "@/layout/Body";
import MainLayout from "@/layout/MainLayout";

const SupervisedLearning = () => {
  return (
    <MainLayout>
      <LinkTreeWeek10 />
      <Body
        title="Supervised Learning"
        img={SL}
        date="04 Juni 2024"
        article={
          <p>
            Supervised learning (pembelajaran terawasi) adalah pendekatan
            pembelajaran mesin di mana model dilatih menggunakan dataset yang
            sudah dilabeli. Dataset ini terdiri dari pasangan input-output, di
            mana setiap input memiliki label atau output yang sesuai. Tujuan
            dari supervised learning adalah untuk belajar memetakan input ke
            output yang benar, sehingga model dapat memprediksi output untuk
            data baru yang tidak dikenal.
            <br />
            <br />
            Dalam supervised learning, terdapat dua jenis utama tugas:
            klasifikasi dan regresi. Klasifikasi digunakan ketika output adalah
            kategori diskrit, sementara regresi digunakan ketika output adalah
            nilai kontinu.
            <br />
            <br />
            Berikut adalah daftar 30 algoritma supervised learning yang umum
            digunakan dalam tugas prediksi, baik untuk klasifikasi maupun
            regresi:
            <br />
            1. Linear Regression: Algoritma dasar untuk tugas regresi yang
            memodelkan hubungan linier antara input dan output.
            <br />
            2. Logistic Regression: Algoritma untuk tugas klasifikasi yang
            memprediksi probabilitas kelas tertentu.
            <br />
            3. k-Nearest Neighbors (k-NN): Algoritma untuk klasifikasi dan
            regresi yang memprediksi nilai atau kelas berdasarkan tetangga
            terdekat.
            <br />
            4. Support Vector Machines (SVM): Algoritma untuk klasifikasi dan
            regresi yang mencari hyperplane terbaik untuk memisahkan kelas.
            <br />
            5. Decision Trees: Algoritma yang memisahkan data berdasarkan fitur
            hingga mencapai keputusan akhir.
            <br />
            6. Random Forest: Algoritma ensemble yang menggunakan banyak
            decision tree untuk meningkatkan akurasi prediksi.
            <br />
            7. Gradient Boosting Machines (GBM): Algoritma ensemble yang
            membangun model prediksi dengan menggabungkan banyak weak learners
            secara bertahap.
            <br />
            8. AdaBoost: Algoritma ensemble yang meningkatkan kinerja dengan
            menggabungkan beberapa weak classifiers.
            <br />
            9. XGBoost: Versi yang dioptimalkan dari GBM, sangat populer dan
            efisien.
            <br />
            10.LightGBM: Algoritma boosting yang efisien dan cepat, cocok untuk
            dataset besar.
            <br />
            11.CatBoost: Algoritma boosting yang mengatasi masalah dengan data
            kategorikal secara efisien.
            <br />
            12.Neural Networks: Model yang terdiri dari banyak layer neuron,
            cocok untuk tugas yang kompleks.
            <br />
            13.Convolutional Neural Networks (CNN): Neural network yang cocok
            untuk tugas pengenalan gambar.
            <br />
            14.Recurrent Neural Networks (RNN): Neural network yang cocok untuk
            data urutan atau time series.
            <br />
            15.Long Short-Term Memory Networks (LSTM): Tipe RNN yang mengatasi
            masalah vanishing gradient, cocok untuk time series.
            <br />
            16.Gated Recurrent Unit (GRU): Tipe RNN yang lebih sederhana
            daripada LSTM tetapi tetap efektif.
            <br />
            17.Naive Bayes: Algoritma klasifikasi yang didasarkan pada Teorema
            Bayes dengan asumsi independensi antar fitur.
            <br />
            18.Linear Discriminant Analysis (LDA): Algoritma klasifikasi yang
            mencari kombinasi fitur yang memaksimalkan pemisahan antar kelas.
            <br />
            19.Quadratic Discriminant Analysis (QDA): Versi LDA yang lebih
            fleksibel dengan asumsi distribusi Gaussian untuk setiap kelas.
            <br />
            20.K-Means Clustering: Meskipun umumnya digunakan untuk clustering,
            bisa digunakan dalam supervised learning melalui teknik
            semi-supervised.
            <br />
            21.Elastic Net: Kombinasi dari Lasso dan Ridge Regression, baik
            untuk tugas regresi.
            <br />
            22.Lasso Regression: Regresi dengan regularisasi L1 yang dapat
            menghasilkan model spars.
            <br />
            23.Ridge Regression: Regresi dengan regularisasi L2 untuk mencegah
            overfitting.
            <br />
            24.Polynomial Regression: Regresi yang memodelkan hubungan
            non-linear dengan menambahkan fitur polinomial.
            <br />
            25.Bayesian Linear Regression: Regresi linear dengan pendekatan
            probabilistik.
            <br />
            26.Stepwise Regression: Teknik yang memilih fitur secara iteratif
            untuk memasukkan atau mengeluarkan dari model.
            <br />
            27.Partial Least Squares Regression (PLSR): Teknik untuk mengatasi
            multikolinearitas dalam data regresi.
            <br />
            28.Stochastic Gradient Descent (SGD): Algoritma optimisasi yang
            efisien untuk regresi dan klasifikasi.
            <br />
            29.Passive Aggressive Algorithms: Algoritma untuk klasifikasi online
            dan regresi, yang sangat efisien.
            <br />
            30.Multi-Layer Perceptron (MLP): Jenis neural network feedforward
            yang dapat digunakan untuk tugas klasifikasi dan regresi.
            <br />
            <br />
            Dengan memahami algoritma-algoritma ini, kita dapat memilih metode
            yang tepat untuk berbagai jenis tugas supervised learning, baik
            klasifikasi maupun regresi.
          </p>
        }
      />
    </MainLayout>
  );
};

export default SupervisedLearning;
