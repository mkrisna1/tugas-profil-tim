import ProfileLayout from "../layout/layout";
import putraPhoto from "../images/Putra.png";

export default function Krisna() {
  const skills = ["ReactJS", "JavaScript", "HTML & CSS", "UI/UX Design"];
  const experiences = [
    { role: "Web Developer Intern", company: "PT Tekno Indramayu", year: "2024" },
    { role: "UI/UX Project", company: "Proyek Kampus", year: "2023" }
  ];

  return (
    <ProfileLayout
      name="Ahmad Bintang Putra Fajariyanto"
      studentClass="T2B"
      major="Teknologi Informasi"
      domicile="Pasuruan"
      photo={putraPhoto}
      about={
        <>
          <p>
            Saya adalah mahasiswa Universitas Brawijaya dengan minat yang kuat dalam dunia teknologi,
            Khususnya pengembangan web dan desain antarmuka. Sejak awal kuliah, saya antusias
            Mengeksplorasi proses pemuatan aplikasi dari desain ui hingga logika di baliknya.
            Ketertarikan ini mendorong saya untuk mendalami ReactJS, memahami komponen secara mendetail
            serta menguasi manejemen state untuk membangun aplikasi yang efisien dan 
            interaktif
          </p>
          <p>
            Biodata
            Nama : Ahmad bintang putra fajariyanto
            Universitas : Universitas Brawijaya 
            Program studi : Teknologi Inforamasi
            Minat : Pengembangan web, Teknologi interaktif 
            Deskripsi singkat : 
            Mahasiwa Universitas brawijaya dengan minat kuat dalam belajar tentang teknologi
            Antusias membangun aplikasi yang efisien dan interaktif. 
          </p>
        </>
      }
    />
  );
}