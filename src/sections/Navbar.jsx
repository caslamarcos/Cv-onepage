import { motion } from "framer-motion";

const links = [
  { href: "#top", label: "Inicio" },
  { href: "#about", label: "Perfil" },
  { href: "#projects", label: "Proyectos" },
  { href: "#contact", label: "Contacto" },
];

export default function Navbar() {
  return (
    <div className="fixed top-5 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-6">
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl px-4 py-3"
        >
          <a href="#top" className="font-semibold tracking-wide">
            <span className="text-blue-500">MC</span> · CV
          </a>

          <div className="hidden sm:flex items-center gap-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-xl px-3 py-2 text-sm text-zinc-300 hover:text-white hover:bg-white/5 transition"
              >
                {l.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500 transition shadow-[0_0_30px_rgba(59,130,246,0.25)]"
          >
            Disponible
          </a>
        </motion.nav>
      </div>
    </div>
  );
}