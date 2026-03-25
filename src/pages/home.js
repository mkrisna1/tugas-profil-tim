import { Link } from "react-router-dom";

const profiles = [
  {
    name: "Muhammad Krisna Nugraha",
    slug: "/krisna",
    desc: "Profil Krisna",
  },
  {
    name: "Timothy",
    slug: "/timothy",
    desc: "Profil Timothy",
  },
  {
    name: "Bintang Putra",
    slug: "/putra",
    desc: "Profil Putra",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-12 text-white">
      <div className="mx-auto max-w-6xl">
        <header className="rounded-3xl bg-gradient-to-r from-indigo-600 to-cyan-500 p-8 shadow-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em]">
            Tugas ReactJS + Tailwind
          </p>
          <h1 className="mt-2 text-4xl font-bold">
            Website Profil Anggota Tim
          </h1>
          <p className="mt-4 max-w-2xl text-white/90">
            Halaman ini berisi profil masing-masing anggota tim dengan URL yang
            berbeda, styling Tailwind CSS, dan struktur yang mudah disinkronkan
            lewat GitHub branch.
          </p>
        </header>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {profiles.map((item) => (
            <Link
              key={item.slug}
              to={item.slug}
              className="group rounded-3xl bg-white/10 p-6 ring-1 ring-white/10 transition hover:-translate-y-1 hover:bg-white/15"
            >
              <div className="flex h-full flex-col justify-between gap-6">
                <div>
                  <p className="text-sm text-slate-300">{item.desc}</p>
                  <h2 className="mt-2 text-2xl font-bold">{item.name}</h2>
                </div>
                <span className="inline-flex w-fit rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900">
                  Buka profil
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}    