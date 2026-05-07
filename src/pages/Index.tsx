import { Link } from "react-router-dom";
import { ArrowRight, Mail, Sparkles, Zap, Database, GitBranch, Workflow, BarChart3, Palette, BookOpen, Camera, Search, Video } from "lucide-react";
import { projects, featuredSlugs, categories } from "@/data/projects";

const skills = [
  { name: "Marketing Cloud", level: 92, color: "bg-sun" },
  { name: "Journey Builder", level: 90, color: "bg-coral" },
  { name: "SQL", level: 80, color: "bg-cobalt" },
  { name: "AMPscript", level: 72, color: "bg-sun" },
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
      <section className="relative overflow-hidden min-h-[100svh] flex items-center">
        {/* Mesh gradient base */}
        <div className="absolute inset-0 mesh-hero pointer-events-none" />
        {/* Soft blobs */}
        <div className="absolute -top-32 -right-24 w-[28rem] h-[28rem] bg-sun/50 blur-3xl animate-blob animate-float pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-[26rem] h-[26rem] bg-coral/30 blur-3xl animate-blob pointer-events-none" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-cobalt/20 blur-3xl rounded-full pointer-events-none" />
        {/* Grain overlay for texture */}
        <div className="absolute inset-0 grain opacity-60 pointer-events-none" />
        {/* Abstract shapes */}
        <div className="absolute top-24 right-12 w-3 h-3 rounded-full bg-cobalt animate-float pointer-events-none" />
        <div className="absolute bottom-24 right-24 w-4 h-4 rotate-45 bg-coral animate-float pointer-events-none" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/3 left-10 w-6 h-6 border-2 border-ink rounded-full animate-float pointer-events-none" style={{ animationDelay: "1.4s" }} />
        <svg className="absolute bottom-16 left-1/4 w-10 h-10 text-ink/70 animate-float pointer-events-none" style={{ animationDelay: "0.6s" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" />
        </svg>

        <div className="container relative py-20">
          <div className="max-w-5xl xl:max-w-6xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border-2 border-ink bg-cream pop-shadow-sm font-mono-display text-[10px] md:text-xs uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-coral animate-pulse" />
              Available · Australia · Marketing Cloud
            </div>

            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] tracking-tight">
              Turning <span className="relative inline-block">
                <span className="relative z-10">data</span>
                <span className="absolute inset-x-0 bottom-1 h-3 md:h-4 bg-sun -z-0" />
              </span> into{" "}
              <span className="italic font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl" style={{ color: "#ff5722" }}>journeys</span>
              <span className="block mt-1">that people <span className="underline decoration-cobalt decoration-[3px] underline-offset-4">actually</span> engage with.</span>
            </h1>

            <p className="mt-6 text-base md:text-lg text-ink/70 max-w-2xl leading-relaxed">
              Salesforce Marketing Cloud Email Specialist exploring lifecycle, automation, and how small optimizations drive big impact.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-ink text-cream font-semibold border-2 border-ink pop-shadow-sm hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_hsl(var(--lime))] transition-all text-sm"
              >
                View Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-cream border-2 border-ink font-semibold pop-shadow-sm hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_hsl(var(--coral))] transition-all text-sm"
              >
                <Mail className="w-4 h-4" /> Contact
              </Link>
            </div>
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
        <span className="font-mono-display text-xs uppercase tracking-wider text-coral">// About</span>
        <div className="mt-3 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <h2 className="font-display font-black text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tighter">
            From <span className="relative inline-block">
              <span className="line-through decoration-coral decoration-[6px] text-ink/40">servers</span>
            </span>{" "}
            <span className="inline-block animate-float">→</span>{" "}
            <span className="bg-coral text-cream px-3 inline-block -rotate-1">subscribers.</span>
          </h2>

          <div className="rounded-3xl border-2 border-ink bg-cream p-8 pop-shadow-sm">
            <p className="text-lg md:text-xl text-ink/80 leading-relaxed">
              I spent two years at <strong>DXC Technology</strong> keeping global infrastructure reliable for enterprise clients. Then I followed the data — into Marketing Cloud, where the same systems thinking unlocks customer engagement instead of server uptime.
            </p>
            <p className="mt-4 text-lg md:text-xl text-ink/80 leading-relaxed">
              Today I build journeys, write SQL, and ship campaigns. Tomorrow, <span className="bg-sun px-1">Data Cloud</span>.
            </p>
            <Link to="/about" className="mt-6 inline-flex items-center gap-2 font-semibold underline underline-offset-4 hover:text-coral transition-colors">
              Read the full story <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="bg-ink text-cream border-y-2 border-ink py-24 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-sun/20 animate-blob" />
        <div className="absolute -bottom-32 -left-20 w-96 h-96 bg-coral/20 animate-blob" style={{ animationDelay: "3s" }} />
        <div className="container relative">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <div>
              <span className="font-mono-display text-xs uppercase tracking-wider text-sun">// Stack</span>
              <h2 className="font-display font-black text-5xl md:text-7xl mt-3 tracking-tighter">The <span className="text-sun">toolkit.</span></h2>
            </div>
            <p className="text-cream/60 max-w-md">Levels reflect production confidence, not certifications. I learn fast and ship faster.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((s) => (
              <div key={s.name} className="bg-cream/5 backdrop-blur border-2 border-cream/20 rounded-2xl p-5 hover:border-sun transition-colors">
                <div className="flex justify-between items-baseline mb-3">
                  <span className="font-display font-bold text-lg">{s.name}</span>
                  <span className="font-mono-display text-sm text-cream/60">{s.level}%</span>
                </div>
                <div className="h-3 bg-cream/10 rounded-full overflow-hidden">
                  <div className={`h-full ${s.color} rounded-full transition-all duration-700`} style={{ width: `${s.level}%` }} />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {["Email Studio", "Journey Builder", "Automation Studio", "Contact Builder", "Content Builder", "Data Extensions", "AMPscript", "SSJS", "SQL", "REST API", "SOAP API", "HTML/CSS Email", "Google Analytics", "CM360", "GDPR", "CAN-SPAM"].map((t) => (
              <span key={t} className="px-3 py-1.5 rounded-full bg-cream/5 border border-cream/20 text-sm font-medium hover:bg-sun hover:text-ink hover:border-sun transition-colors">{t}</span>
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
            { key: "journeys", icon: GitBranch, color: "bg-sun" },
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
              <div className={`h-40 ${i === 0 ? "bg-sun" : i === 1 ? "bg-coral" : "bg-cobalt"} border-b-2 border-ink relative overflow-hidden`}>
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

      {/* BEYOND WORK */}
      <section className="container py-24">
        <span className="font-mono-display text-xs uppercase tracking-wider text-cobalt">// Off the clock</span>
        <h2 className="font-display font-black text-5xl md:text-7xl mt-3 tracking-tighter leading-[0.9]">
          Beyond <span className="bg-sun px-2 inline-block -rotate-1">work.</span>
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-ink/70">
          When I'm not building customer journeys, I spend time exploring creativity and ideas that shape how I think about people, behaviour, and storytelling.
        </p>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { icon: Palette, emoji: "🎨", title: "Painting", color: "bg-coral", text: "I enjoy painting as a way to slow down and focus on detail. It strengthens my visual thinking, which reflects in how I design clean, structured, and engaging email experiences." },
            { icon: BookOpen, emoji: "✍️", title: "Journaling", color: "bg-sun", text: "Journaling helps me organise my thoughts and reflect on patterns, ideas, and experiences. It has improved how I think through problems, structure strategies, and communicate clearly — especially when planning customer journeys and campaign flows." },
            { icon: Camera, emoji: "📸", title: "Photography", color: "bg-cobalt text-cream", text: "I enjoy capturing everyday moments and visual compositions through photography. It sharpens my eye for detail, layout, and storytelling, which influences how I approach visual hierarchy and design in emails." },
            { icon: Search, emoji: "🧠", title: "Research & Trend Exploration", color: "bg-sun", text: "I regularly analyse brand campaigns, funnels, and digital experiences to understand what drives engagement. This habit helps me continuously refine how I approach segmentation, messaging, and lifecycle marketing." },
            { icon: Video, emoji: "🎥", title: "Content Creation", color: "bg-coral", text: "I create content around marketing, storytelling, and consumer behaviour. It allows me to break down complex ideas into simple, engaging narratives — something I apply when designing campaigns and customer experiences." },
          ].map((h) => (
            <div key={h.title} className="rounded-3xl border-2 border-ink bg-cream p-6 pop-shadow-sm hover:-translate-y-1 hover:pop-shadow transition-all">
              <div className={`w-14 h-14 grid place-items-center rounded-2xl ${h.color} border-2 border-ink text-2xl mb-4`}>
                {h.emoji}
              </div>
              <h3 className="font-display font-bold text-xl mb-2">{h.title}</h3>
              <p className="text-sm text-ink/70 leading-relaxed">{h.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container pb-24">
        <div className="rounded-3xl border-2 border-ink bg-sun p-10 md:p-16 pop-shadow relative overflow-hidden">
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
