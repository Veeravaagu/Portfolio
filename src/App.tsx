import { useCallback, useState } from "react";
import { BootScreen } from "./components/BootScreen";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Experience } from "./sections/Experience";
import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";

function App() {
  const [booted, setBooted] = useState(false);
  const handleBootDone = useCallback(() => setBooted(true), []);

  return (
    <div className="theme-shell min-h-screen bg-background text-[rgb(var(--color-text))]">
      {!booted ? <BootScreen onDone={handleBootDone} /> : null}
      <div className="crt-grid" aria-hidden="true" />
      <div className="scanline-sweep" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
