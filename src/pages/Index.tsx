import { Link } from "react-router-dom";
import { ArrowRight, Mail, Sparkles, Zap, Database, GitBranch, Workflow, BarChart3 } from "lucide-react";
import { projects, featuredSlugs, categories } from "@/data/projects";

const skills = [
  { name: "Marketing Cloud", level: 92, color: "bg-lime" },
  { name: "Journey Builder", level: 90, color: "bg-coral" },
  { name: "SQL", level: 80, color: "bg-cobalt" },
  { name: "AMPscript", level: 72, color: "bg-lime" },
  { name: "Data Cloud", level: 68, color: "bg-coral" },
  { name: "Email Studio", level: 90, color: "bg-cobalt" },
];

const featured = featuredSlugs
  .map((s) => projects.find((p) => p.slug === s)!)
  .filter(Boolean);

export default function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grain pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-[28rem] h-[28rem] bg-lime/40 animate-blob animate-float" />
        <div className="absolute top-40 -left-24 w-72 h-72 bg-coral/40 animate-blob" style={{ animationDelay: "2s" }} />

        <div className="container relative pt-16 md:pt-24 pb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-ink bg-cream pop-shadow-sm font-mono-display text-xs uppercase tracking-wider mb-8">
            <span className="w-2 h-2 rounded-full bg-coral animate-pulse" />
            Available · Australia · Marketing Cloud Specialist
          </div>

          <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-5xl">
            I design <span className="relative inline-block">
              <span className="relative z-10">data-driven</span>
              <span className="absolute inset-x-0 bottom-2 h-4 bg-lime -z-0" />
            </span>{" "}
            customer journeys that <span className="text-coral italic">actually</span> move metrics.
          </h1>

          <p className="mt-8 text-lg md:text-xl text-ink/70 max-w-2xl">
            I'm <strong className="text-ink">Sravani Badana</strong> — a Salesforce Marketing Cloud Email Specialist who treats automation like product engineering. I came up running 10,000+ servers; I bring that reliability mindset to every campaign I ship.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 px-6 py-4 rounded-full bg-ink text-cream font-semibold border-2 border-ink pop-shadow hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0_0_hsl(var(--lime))] transition-all"
            >
              View Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-cream border-2 border-ink font-semibold pop-shadow hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0_0_hsl(var(--coral))] transition-all"
            >
              <Mail className="w-4 h-4" /> Contact Me
            </Link>
          </div>

          {/* Mini stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { v: "10,000+", l: "Servers automated at DXC" },
              { v: "12", l: "Audience DEs refreshed nightly" },
              { v: "+5.6pts", l: "Open rate lift via A/B" },
              { v: "97.4%", l: "Inbox placement restored" },
            ].map((s) => (
              <div key={s.l} className="border-l-4 border-ink pl-4">
                <div className="font-display font-bold text-3xl">{s.v}</div>
                <div className="text-sm text-ink/60 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y-2 border-ink bg-ink text-cream overflow-hidden py-5">
        <div className="flex marquee whitespace-nowrap font-display font-bold text-3xl md:text-4xl">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-4">
              {["Journey Builder", "Email Studio", "Automation Studio", "Data Cloud", "AMPscript", "SQL", "Contact Builder", "Identity Resolution"].map((t) => (
                <span key={t} className="flex items-center gap-8">
                  <span className="text-cream">{t}</span>
                  <span className="text-lime">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="container py-24">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <span className="font-mono-display text-xs uppercase tracking-wider text-coral">// About</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl mt-3">
              From <span className="line-through text-ink/40">servers</span> to <span className="text-coral">subscribers</span>.
            </h2>
          </div>
          <div className="space-y-4 text-lg text-ink/70">
            <p>
              I spent two years at <strong className="text-ink">DXC Technology</strong> keeping global infrastructure reliable for enterprise clients. Then I followed the data — into Marketing Cloud, where the same systems thinking unlocks customer engagement instead of server uptime.
            </p>
            <p>
              Today I build journeys, write SQL, and ship campaigns. Tomorrow, Data Cloud.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 font-semibold underline underline-offset-4 hover:text-coral transition-colors">
              Read the full story <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="bg-secondary border-y-2 border-ink py-24">
        <div className="container">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <div>
              <span className="font-mono-display text-xs uppercase tracking-wider text-cobalt">// Stack</span>
              <h2 className="font-display font-bold text-4xl md:text-5xl mt-3">The toolkit.</h2>
            </div>
            <p className="text-ink/60 max-w-md">Levels reflect production confidence, not certifications. I learn fast and ship faster.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((s) => (
              <div key={s.name} className="bg-cream border-2 border-ink rounded-2xl p-5 pop-shadow-sm">
                <div className="flex justify-between items-baseline mb-3">
                  <span className="font-display font-bold text-lg">{s.name}</span>
                  <span className="font-mono-display text-sm text-ink/60">{s.level}%</span>
                </div>
                <div className="h-3 bg-ink/10 rounded-full overflow-hidden">
                  <div className={`h-full ${s.color} rounded-full transition-all duration-700`} style={{ width: `${s.level}%` }} />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {["Email Studio", "Journey Builder", "Automation Studio", "Contact Builder", "Content Builder", "Data Extensions", "AMPscript", "SSJS", "SQL", "REST API", "SOAP API", "HTML/CSS Email", "Google Analytics", "CM360", "GDPR", "CAN-SPAM"].map((t) => (
              <span key={t} className="px-3 py-1.5 rounded-full bg-cream border border-ink/20 text-sm font-medium hover:bg-lime hover:border-ink transition-colors">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES TEASER */}
      <section className="container py-24">
        <span className="font-mono-display text-xs uppercase tracking-wider text-coral">// What I build</span>
        <h2 className="font-display font-bold text-4xl md:text-5xl mt-3 mb-12 max-w-2xl">
          Three categories. One mindset: <span className="text-coral">automate the boring, amplify the human</span>.
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { key: "journeys", icon: GitBranch, color: "bg-lime" },
            { key: "automation", icon: Workflow, color: "bg-coral" },
            { key: "analytics", icon: BarChart3, color: "bg-cobalt text-cream" },
          ].map(({ key, icon: Icon, color }) => {
            const c = categories[key as keyof typeof categories];
            return (
              <Link
                key={key}
                to="/projects"
                className="group block p-6 rounded-2xl border-2 border-ink bg-cream hover:bg-ink hover:text-cream transition-colors pop-shadow-sm hover:-translate-y-1"
              >
                <div className={`w-12 h-12 grid place-items-center rounded-xl ${color} border-2 border-ink mb-5`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl mb-2">{c.label}</h3>
                <p className="text-sm opacity-70">{c.tagline}</p>
                <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold">
                  Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="container pb-24">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <span className="font-mono-display text-xs uppercase tracking-wider text-cobalt">// Featured</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl mt-3">Selected case studies.</h2>
          </div>
          <Link to="/projects" className="inline-flex items-center gap-2 font-semibold underline underline-offset-4 hover:text-coral">
            See all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((p, i) => (
            <Link
              key={p.slug}
              to={`/projects/${p.slug}`}
              className="group flex flex-col rounded-2xl border-2 border-ink bg-cream overflow-hidden pop-shadow-sm hover:pop-shadow hover:-translate-y-1 transition-all"
            >
              <div className={`h-40 ${i === 0 ? "bg-lime" : i === 1 ? "bg-coral" : "bg-cobalt"} border-b-2 border-ink relative overflow-hidden`}>
                <div className="absolute inset-0 grain opacity-40" />
                <div className="absolute bottom-3 left-4 font-mono-display text-xs uppercase tracking-wider">
                  Case 0{i + 1}
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-cream border-2 border-ink rounded-full grid place-items-center">
                  {i === 0 ? <GitBranch className="w-8 h-8" /> : i === 1 ? <Workflow className="w-8 h-8" /> : <Database className="w-8 h-8" />}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-display font-bold text-xl leading-tight">{p.title}</h3>
                <p className="text-sm text-ink/60 mt-2 flex-1">{p.shortDescription}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold">
                  View case study <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container pb-24">
        <div className="rounded-3xl border-2 border-ink bg-lime p-10 md:p-16 pop-shadow relative overflow-hidden">
          <div className="absolute -bottom-20 -right-10 w-64 h-64 bg-coral rounded-full opacity-60 animate-blob" />
          <div className="relative max-w-2xl">
            <Zap className="w-10 h-10 mb-4" />
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">Got a journey that needs building?</h2>
            <p className="text-lg text-ink/70 mb-6">I'm looking for Marketing Cloud, CRM and automation roles where data and creativity actually shake hands.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-ink text-cream font-semibold border-2 border-ink hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
              Start a conversation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
