import { Link } from "react-router-dom";

export default function ProfileLayout({
  name,
  studentClass,
  major,
  domicile,
  photo,
  about,
}) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 px-4 py-10 text-white">
      <div className="mx-auto max-w-6xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20"
        >
          ← Kembali ke beranda
        </Link>

        <div className="mt-6 grid gap-8 lg:grid-cols-[340px_1fr]">
          <aside className="rounded-3xl bg-white/10 p-6 shadow-2xl ring-1 ring-white/10 backdrop-blur">
            <img
              src={photo}
              alt={name}
              className="h-80 w-full rounded-2xl object-cover object-center"
            />

            <div className="mt-6 space-y-3">
              <h1 className="text-3xl font-bold">{name}</h1>

              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-sm text-slate-300">Kelas</p>
                <p className="font-semibold">{studentClass}</p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-sm text-slate-300">Jurusan / Prodi</p>
                <p className="font-semibold">{major}</p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-sm text-slate-300">Domisili</p>
                <p className="font-semibold">{domicile}</p>
              </div>
            </div>
          </aside>

          <section className="rounded-3xl bg-white p-8 text-slate-900 shadow-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
              Tentang diri
            </p>
            <h2 className="mt-2 text-3xl font-bold">Profil {name}</h2>

            <div className="mt-6 space-y-4 text-justify leading-8 text-slate-700">
              {about}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}