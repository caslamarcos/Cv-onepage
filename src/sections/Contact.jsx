import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl p-10 md:p-12 text-center"
    >
      <h2 className="text-4xl md:text-5xl font-semibold">
        ¿Hablamos? <span className="text-blue-500">⚡</span>
      </h2>

      <p className="mt-6 text-zinc-300">
        Abierto a oportunidades remotas, híbridas y proyectos freelance.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <a
          className="rounded-2xl bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-500 transition"
          href="https://www.linkedin.com/in/marcosecorbalan"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>

        <a
          className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-medium text-zinc-100 hover:bg-white/10 transition"
          href="https://github.com/caslamarcos"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          className="rounded-2xl border border-blue-500/25 bg-blue-500/10 px-6 py-3 font-medium text-blue-200 hover:text-white hover:bg-blue-500/15 transition"
          href="mailto:marcoscorbalan34@gmail.com"
        >
          Email
        </a>
      </div>
    </motion.div>
  );
}