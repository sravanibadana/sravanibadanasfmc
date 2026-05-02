import { Link } from "react-router-dom";
import { Mail, Linkedin, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t-2 border-ink bg-ink text-cream mt-24">
      <div className="container py-16 grid gap-12 md:grid-cols-3">
        <div>
          <h3 className="font-display text-2xl font-bold mb-3">
            Let's build something <span className="text-lime">that ships</span>.
          </h3>
          <p className="text-cream/70 text-sm">
            Open to Marketing Cloud, CRM and automation roles across Australia.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <span className="text-cream/50 uppercase tracking-wider text-xs mb-1">Navigate</span>
          <Link to="/about" className="hover:text-lime transition-colors">About</Link>
          <Link to="/projects" className="hover:text-lime transition-colors">Projects</Link>
          <Link to="/data-cloud" className="hover:text-lime transition-colors">Data Cloud</Link>
          <Link to="/contact" className="hover:text-lime transition-colors">Contact</Link>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <span className="text-cream/50 uppercase tracking-wider text-xs mb-1">Reach me</span>
          <a href="mailto:sravani.badana99@gmail.com" className="inline-flex items-center gap-2 hover:text-lime">
            <Mail className="w-4 h-4" /> sravani.badana99@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/sravanibadana" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-lime">
            <Linkedin className="w-4 h-4" /> /in/sravanibadana
          </a>
          <a href="https://www.salesforce.com/trailblazer/sravanibadana" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-lime">
            <ExternalLink className="w-4 h-4" /> Trailhead profile
          </a>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="container py-6 flex flex-col md:flex-row justify-between gap-2 text-xs text-cream/50">
          <span>© {new Date().getFullYear()} Sravani Badana. Built with intent in Australia.</span>
          <span>Marketing Cloud · Data Cloud · Journey Builder · SQL · AMPscript</span>
        </div>
      </div>
    </footer>
  );
}