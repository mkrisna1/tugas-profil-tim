// =====================================================
// GANTI semua informasi di bawah ini dengan data kamu!
// =====================================================

const profileData = {
  namaLengkap: "Nama Lengkap Kamu",
  kelas: "TIF-A 2023",
  jurusan: "Teknik Informatika",
  prodi: "S1 Teknik Informatika",
  domisili: "Malang, Jawa Timur",
  fotoProfil: "https://api.dicebear.com/7.x/avataaars/svg?seed=NamaAnda", // ganti dengan URL foto kamu
  tentangDiri: `
    Halo! Saya adalah mahasiswa Teknik Informatika di Universitas Brawijaya angkatan 2023.
    Saya memiliki ketertarikan yang besar di bidang pengembangan web, khususnya pada teknologi
    front-end seperti ReactJS, Vue.js, dan ekosistem JavaScript modern. Selain itu, saya juga
    aktif mempelajari desain UI/UX untuk menciptakan pengalaman pengguna yang menarik dan intuitif.

    Di luar akademik, saya suka berkontribusi pada proyek open source dan mengikuti komunitas
    developer lokal. Saya percaya bahwa belajar bersama dan berbagi ilmu adalah cara terbaik
    untuk berkembang di dunia teknologi yang terus bergerak maju.

    Visi saya ke depan adalah menjadi seorang full-stack developer yang mampu membangun
    produk digital berdampak nyata bagi masyarakat Indonesia. Saya terus mengasah kemampuan
    dengan mengerjakan proyek-proyek nyata dan mengikuti kursus online di bidang pemrograman.
    Jika kamu ingin berkolaborasi atau sekadar berdiskusi, jangan ragu untuk menghubungi saya!
  `,
  skills: ["ReactJS", "JavaScript", "Tailwind CSS", "Git & GitHub", "HTML & CSS"],
  sosmed: {
    github: "https://github.com/username",
    linkedin: "https://linkedin.com/in/username",
    email: "email@student.ub.ac.id",
  },
};

// =====================================================
// Komponen Profile — tidak perlu diubah di bawah ini
// =====================================================

export default function NamaAnda() {
  const { namaLengkap, kelas, jurusan, prodi, domisili, fotoProfil, tentangDiri, skills, sosmed } =
    profileData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 font-sans">
      {/* Decorative Background Circles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-cyan-400 rounded-full opacity-10 blur-3xl" />
        <div className="absolute -bottom-40 right-1/3 w-72 h-72 bg-indigo-500 rounded-full opacity-10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 py-16">
        {/* Header Card */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden mb-6 shadow-2xl">
          {/* Banner */}
          <div className="h-36 bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 relative">
            <div className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 11px)`
              }}
            />
          </div>

          {/* Avatar + Info */}
          <div className="px-8 pb-8">
            <div className="flex flex-col sm:flex-row sm:items-end gap-4 -mt-14 mb-6">
              <div className="w-28 h-28 rounded-2xl overflow-hidden border-4 border-slate-900 shadow-xl flex-shrink-0 bg-slate-800">
                <img
                  src={fotoProfil}
                  alt={namaLengkap}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="sm:pb-2">
                <h1 className="text-2xl font-bold text-white tracking-tight">{namaLengkap}</h1>
                <p className="text-blue-300 text-sm font-medium mt-0.5">{jurusan} · {kelas}</p>
              </div>
            </div>

            {/* Meta badges */}
            <div className="flex flex-wrap gap-3">
              <Badge icon="🎓" label={prodi} />
              <Badge icon="🏛️" label="Universitas Brawijaya" />
              <Badge icon="📍" label={domisili} />
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 mb-6 shadow-xl">
          <SectionTitle>Tentang Saya</SectionTitle>
          <p className="text-slate-300 leading-relaxed text-sm whitespace-pre-line">
            {tentangDiri.trim()}
          </p>
        </div>

        {/* Skills Section */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 mb-6 shadow-xl">
          <SectionTitle>Skills</SectionTitle>
          <div className="flex flex-wrap gap-2 mt-4">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-1.5 rounded-full text-sm font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30 hover:bg-blue-500/30 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 shadow-xl">
          <SectionTitle>Hubungi Saya</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
            <ContactLink href={sosmed.github} icon="🐙" label="GitHub" />
            <ContactLink href={sosmed.linkedin} icon="💼" label="LinkedIn" />
            <ContactLink href={`mailto:${sosmed.email}`} icon="✉️" label="Email" />
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-slate-500 text-xs mt-8">
          Universitas Brawijaya · {kelas} · {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}

// ─── Helper Components ────────────────────────────────────

function Badge({ icon, label }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-slate-300 text-xs border border-white/10">
      <span>{icon}</span> {label}
    </span>
  );
}

function SectionTitle({ children }) {
  return (
    <h2 className="text-white font-semibold text-base flex items-center gap-2 mb-3">
      <span className="w-1 h-4 rounded-full bg-blue-400 inline-block" />
      {children}
    </h2>
  );
}

function ContactLink({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-sm hover:bg-white/10 hover:text-white transition-all"
    >
      <span className="text-lg">{icon}</span>
      <span>{label}</span>
    </a>
  );
}