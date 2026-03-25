import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex items-center gap-5 mb-6">
            <img
              src="/avatar.jpeg"
              alt="Marcos Corbalan"
              className="w-16 h-16 rounded-full object-cover border-2 border-blue-500/40 shadow-[0_0_20px_rgba(59,130,246,0.2)]"
            />
            <p className="text-xs tracking-[0.35em] text-zinc-400">
              FULL STACK · REACT · BACKEND
            </p>
          </div>

          <h1 className="text-5xl md:text-6xl font-semibold leading-[1.05]">
            Marcos <span className="text-blue-500">Corbalán</span>
          </h1>

          <p className="mt-5 text-lg text-zinc-300 max-w-xl">
            Desarrollo aplicaciones web claras, escalables y con foco en resultados reales.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-2xl bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-500 transition shadow-[0_0_40px_rgba(59,130,246,0.28)]">
              Ver proyectos
            </a>
            <a href="#contact" className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-medium text-zinc-100 hover:bg-white/10 transition">
              Contacto
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-2 text-sm text-zinc-400">
            <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1">
              Buenos Aires
            </span>
            <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1">
              Remoto / Hibrido
            </span>
            <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1">
              En transicion 2026
            </span>
          </div>
        </motion.div>

        {/* Right card */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.06 }}
          className="relative"
        >
          <div className="absolute -inset-2 rounded-3xl bg-blue-500/10 blur-2xl" />
          <div className="relative rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl p-8">
            <p className="text-xs tracking-[0.35em] text-zinc-400">RESUMEN</p>

            <div className="mt-5 space-y-4 text-zinc-200">
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                <p>React + Tailwind para UI premium, microinteracciones y performance.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                <p>Backend con Node/Express, estructura clara y foco en escalabilidad.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                <p>Perfil disciplinado: entregas, consistencia y comunicación simple.</p>
              </div>
            </div>

            <div className="mt-7 h-px w-full bg-white/10" />

            <div className="mt-6 flex flex-wrap gap-2">
              {["React", "JavaScript", "Node", "Express", "MongoDB", "Git"].map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-zinc-200">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-14 text-xs text-zinc-500 tracking-widest">
        SCROLL DOWN
      </div>
    </div>
  );
}
