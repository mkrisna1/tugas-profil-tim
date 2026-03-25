import ProfileLayout from "../layout/layout";
import krisnaPhoto from "../images/krisna.png";

export default function krisna() {
  return (
    <ProfileLayout
      name="Muhammad Krisna Nugraha"
      studentClass="T2B"
      major="Teknologi Informasi"
      domicile="Indramayu"
      photo={krisnaPhoto}
      about={
        <>
          <p>
            Saya adalah mahasiswa yang memiliki ketertarikan besar pada dunia
            teknologi, terutama pengembangan web dan desain antarmuka. Sejak
            awal masuk kuliah, saya senang mempelajari bagaimana sebuah aplikasi
            dibuat, mulai dari tampilan depan sampai logika di belakangnya. Hal
            itu membuat saya semakin ingin memahami ReactJS, komponen, dan cara
            kerja state dengan lebih dalam.
          </p>
          <p>
            Di luar kuliah, saya cukup aktif mencari referensi baru, mencoba
            membuat proyek kecil, dan memperbaiki tampilan supaya lebih rapi dan
            nyaman digunakan. Saya juga suka bekerja dalam tim karena dari
            kolaborasi saya bisa belajar pembagian tugas, komunikasi, dan
            penyelesaian masalah bersama. Bagi saya, proses belajar yang
            konsisten jauh lebih penting daripada hasil yang instan.
          </p>
        </>
      }
    />
  );
}