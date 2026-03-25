import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="grid md:grid-cols-2 gap-10 items-start">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold">
          Perfil <span className="text-blue-500">profesional</span>
        </h2>

        <p className="mt-6 text-zinc-300 leading-relaxed">
          Soy desarrollador full stack con especialidad en JavaScript y React. Me gusta escribir código
          claro, mantener las cosas simples y construir productos que funcionen de verdad.
        </p>

        <p className="mt-4 text-zinc-400 leading-relaxed">
          Vengo de un entorno donde la disciplina y la responsabilidad son clave. Hoy aplico
          esa mentalidad al desarrollo de software.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl p-8"
      >
        <p className="text-xs tracking-[0.35em] text-zinc-400">ESPECIALIDADES</p>

        <div className="mt-5 space-y-3 text-zinc-200">
          <div className="flex gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-blue-500" />
            <p>UI limpia, responsive y con buena jerarquía visual.</p>
          </div>
          <div className="flex gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-blue-500" />
            <p>Backend ordenado: rutas, controladores y buenas prácticas.</p>
          </div>
          <div className="flex gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-blue-500" />
            <p>Código mantenible: simple, legible y escalable.</p>
          </div>
        </div>

        <div className="mt-7 h-px bg-white/10" />

        <p className="mt-6 text-xs tracking-[0.35em] text-zinc-400">STACK</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {["React", "JavaScript", "Node", "Express", "MongoDB", "CSS"].map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-zinc-200"
            >
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}