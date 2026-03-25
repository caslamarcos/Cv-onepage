import { motion } from "framer-motion";

const projects = [
  {
    name: "Umbrelland Group",
    desc: "Gestor e inmobiliaria. UI clara + lógica sólida.",
    stack: "JavaScript · DOM · CSS",
    demo: "https://umbrelland-group.vercel.app/",
    repo: null,
  },
  {
    name: "Grupo Gioca | Internet",
    desc: "Servicio de Internet. Landing page",
    stack: "React · Hooks · Router",
    demo: "https://www.gioca.com.ar",
    repo: null,
  },
  {
    name: "MC · CV",
    desc: "Portfolio personal. SPA con animaciones y deploy en Vercel.",
    stack: "React · Tailwind · Framer Motion · Vite",
    demo: "https://cv-onepage-woad.vercel.app/",
    repo: "https://github.com/caslamarcos/Cv-onepage",
  },
];

export default function Projects() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold">
          Proyectos <span className="text-blue-500">reales</span>
        </h2>
        <p className="mt-4 text-zinc-400 max-w-2xl">
          Pocos, bien hechos. Con estructura, lógica y UI limpia.
        </p>
      </motion.div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ y: -4 }}
            className="rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl p-8 hover:border-white/20 transition"
          >
            <h3 className="text-2xl font-medium">{p.name}</h3>
            <p className="mt-3 text-zinc-300">{p.desc}</p>
            <p className="mt-4 text-sm text-zinc-400">{p.stack}</p>

            <div className="mt-6 flex gap-3">
              {p.demo ? (
                <a href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-white/5 px-4 py-2 text-sm text-zinc-200 hover:bg-white/10 transition"
                >
                  Demo
                </a>
              ) : (
                <span className="rounded-xl bg-white/5 px-4 py-2 text-sm text-zinc-500 cursor-not-allowed">
                  Sin demo
                </span>
              )}

              {p.repo ? (
                <a href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-blue-600/20 px-4 py-2 text-sm text-blue-200 hover:bg-blue-600/30 transition border border-blue-500/20"
                >
                  Repo
                </a>
              ) : (
                <span className="rounded-xl bg-blue-600/10 px-4 py-2 text-sm text-zinc-500 cursor-not-allowed border border-blue-500/10">
                  Sin repo
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}