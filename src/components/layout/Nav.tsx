import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, Sparkles, Linkedin } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/data-cloud", label: "Data Cloud" },
  { to: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-cream/85 backdrop-blur-md border-b border-ink/10" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="grid place-items-center w-9 h-9 rounded-full bg-ink text-cream font-display font-bold transition-transform group-hover:rotate-12">
            S
          </span>
          <span className="font-display font-bold text-lg">
            Sravani <span className="text-coral">Badana</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-ink text-cream"
                    : "hover:bg-ink/5 text-ink/80"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a
            href="https://www.linkedin.com/in/sravani-badana/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cobalt text-cream font-semibold text-sm border-2 border-ink pop-shadow-sm hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_hsl(var(--ink))] transition-all"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
          <a
            href="/SravaniBadana-Resume.pdf"
            download
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime text-ink font-semibold text-sm border-2 border-ink pop-shadow-sm hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_hsl(var(--ink))] transition-all"
          >
            <Sparkles className="w-4 h-4" />
            Resume
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded-full bg-ink text-cream"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-ink/10 bg-cream">
          <div className="container py-4 flex flex-col gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl font-medium ${
                    isActive ? "bg-ink text-cream" : "hover:bg-ink/5"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <a
              href="/SravaniBadana-Resume.pdf"
              download
              className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-lime text-ink font-semibold border-2 border-ink"
            >
              <Sparkles className="w-4 h-4" /> Download Resume
            </a>
            <a
              href="https://www.linkedin.com/in/sravani-badana/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-cobalt text-cream font-semibold border-2 border-ink"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
          </div>
        </div>
      )}
    </header>
  );
}