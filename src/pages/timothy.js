import ProfileLayout from "../layout/layout";
import timothyPhoto from "../images/timothy.png";

export default function timothy() {
  return (
    <ProfileLayout
      name="Timothy Athlon Pratama Adi"
      studentClass="T2B"
      major="Teknologi Informasi"
      domicile="Kota Malang"
      photo={timothyPhoto}
      about={
        <>
          <p>
            Saya adalah mahasiswa yang memiliki ketertarikan besar pada dunia teknologi, terutama pengembangan web dan desain antarmuka. 
            Sejak awal masuk kuliah, saya senang mempelajari bagaimana sebuah aplikasi dibuat, 
            mulai dari tampilan depan hingga logika di belakangnya. Hal tersebut membuat saya semakin tertarik untuk memahami 
            ReactJS, komponen, serta cara kerja state dengan lebih dalam.
          </p>
          <p>
            Di luar kegiatan perkuliahan, saya juga memiliki pengalaman sebagai teknisi servis laptop dan PC, 
            sehingga cukup terbiasa melakukan perbaikan perangkat keras maupun perangkat lunak. 
            Selain itu, saya juga memiliki pengetahuan dasar di bidang mekanik motor serta pernah menangani beberapa pekerjaan sebagai teknisi jaringan WiFi. 
            Pengalaman-pengalaman tersebut membuat saya terbiasa memecahkan masalah secara teknis dan berpikir sistematis.
            Saya juga senang mencari referensi baru, mencoba membuat proyek kecil, 
            serta memperbaiki tampilan aplikasi agar lebih rapi dan nyaman digunakan. 
            Selain itu, saya menyukai kerja tim karena melalui kolaborasi saya dapat belajar mengenai pembagian tugas, 
            komunikasi yang baik, serta penyelesaian masalah secara bersama. 
            Bagi saya, proses belajar yang konsisten jauh lebih penting daripada hasil yang instan.
          </p>
        </>
      }
    />
  );
}