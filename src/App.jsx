import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-[#070A10] text-zinc-100">
      {/* Background grid + glow */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 opacity-[0.35] [background-image:radial-gradient(ellipse_at_top,rgba(59,130,246,0.22),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:42px_42px]" />
      </div>

      <Navbar />

      <main className="relative mx-auto max-w-6xl px-6 pt-28 pb-20 space-y-24">
        <section id="top">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>

        <footer className="pt-10 text-xs text-zinc-500">
          © {new Date().getFullYear()} Marcos Corbalán · Construido con React + Tailwind
        </footer>
      </main>
    </div>
  );
}