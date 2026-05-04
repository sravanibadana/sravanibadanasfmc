import { Link } from "react-router-dom";
import { ArrowRight, Mail, Sparkles, Zap, Database, GitBranch, Workflow, BarChart3, Palette, BookOpen, Camera, Search, Video } from "lucide-react";
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
      <section className="px-4 md:px-6 pt-6 pb-10">
        <div
          className="relative overflow-hidden border-2 mx-auto"
          style={{
            background: "#fff9f0",
            borderColor: "#111",
            borderRadius: "28px",
            minHeight: "min(86svh, 760px)",
          }}
        >
          {/* Decorative SVGs */}
          {/* Top-left dashed squiggle with pink echo */}
          <svg className="absolute top-6 left-6 w-40 h-12 pointer-events-none" viewBox="0 0 160 40" fill="none">
            <path d="M2 20 Q 20 2, 40 20 T 80 20 T 120 20 T 158 20" stroke="#f8c2d4" strokeWidth="3" strokeDasharray="6 5" strokeLinecap="round" transform="translate(2 4)" />
            <path d="M2 20 Q 20 2, 40 20 T 80 20 T 120 20 T 158 20" stroke="#111" strokeWidth="2" strokeDasharray="6 5" strokeLinecap="round" />
          </svg>

          {/* Lime star mid-right */}
          <svg className="absolute top-1/2 right-10 w-14 h-14 pointer-events-none animate-float" viewBox="0 0 24 24" fill="#c8f135" stroke="#111" strokeWidth="1.5" strokeLinejoin="round">
            <path d="M12 1.5 L14.2 9.6 L22.5 12 L14.2 14.4 L12 22.5 L9.8 14.4 L1.5 12 L9.8 9.6 Z" />
          </svg>

          {/* Dashed square bottom-right */}
          <svg className="absolute bottom-8 right-16 w-16 h-16 pointer-events-none" viewBox="0 0 60 60" fill="none">
            <rect x="3" y="3" width="54" height="54" rx="8" stroke="#111" strokeWidth="2" strokeDasharray="5 4" />
          </svg>

          {/* Three colored dots bottom-left */}
          <div className="absolute bottom-8 left-8 flex items-center gap-2 pointer-events-none">
            <span className="w-3 h-3 rounded-full" style={{ background: "#ffd166", border: "2px solid #111" }} />
            <span className="w-3 h-3 rounded-full" style={{ background: "#e0407a", border: "2px solid #111" }} />
            <span className="w-3 h-3 rounded-full" style={{ background: "#c8f135", border: "2px solid #111" }} />
          </div>

          {/* Vertical fading dot trail top-center */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none">
            {[0, 1, 2, 3, 4].map((i) => (
              <span
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-[#111] animate-dot-trail"
                style={{ animationDelay: `${i * 0.15}s`, opacity: 1 - i * 0.18 }}
              />
            ))}
          </div>

          {/* Floating sticky-note tags (right side) */}
          <div
            className="hidden md:block absolute top-20 right-12 px-4 py-2 font-nunito font-bold text-sm"
            style={{ background: "#ffffff", border: "2px solid #111", borderRadius: "10px", transform: "rotate(-4deg)", boxShadow: "3px 3px 0 0 #111" }}
          >
            lifecycle ✦
          </div>
          <div
            className="hidden md:block absolute top-44 right-32 px-4 py-2 font-nunito font-bold text-sm"
            style={{ background: "#ffd166", border: "2px solid #111", borderRadius: "10px", transform: "rotate(5deg)", boxShadow: "3px 3px 0 0 #111" }}
          >
            automation
          </div>
          <div
            className="hidden md:block absolute bottom-24 right-28 px-4 py-2 font-nunito font-bold text-sm"
            style={{ background: "#e0f0ff", border: "2px solid #111", borderRadius: "10px", transform: "rotate(-3deg)", boxShadow: "3px 3px 0 0 #111" }}
          >
            email specialist ✉
          </div>

          {/* CONTENT */}
          <div className="relative px-6 md:px-14 pt-8 pb-10 md:pt-14 md:pb-16 max-w-6xl">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 text-[11px] md:text-xs font-nunito font-bold uppercase tracking-wider"
              style={{ background: "#111", color: "#fff", borderRadius: "99px" }}
            >
              <span className="w-2 h-2 rounded-full bg-[#c8f135] animate-pulse" />
              AVAILABLE · AUSTRALIA · MARKETING CLOUD
            </div>

            {/* Headline */}
            <h1 className="mt-7 leading-[1] text-[#111] max-w-3xl">
              {/* Line 1 */}
              <span className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <span className="font-unbounded font-black text-[32px] md:text-[44px]">Turning</span>
                <span
                  className="inline-block font-unbounded font-black text-[26px] md:text-[36px] px-3 py-0.5"
                  style={{ background: "#ffd166", border: "2px solid #111", borderRadius: "12px", transform: "rotate(-2deg)", boxShadow: "3px 3px 0 0 #111" }}
                >
                  data
                </span>
                <span className="font-unbounded font-black text-[32px] md:text-[44px]">into</span>
              </span>

              {/* Line 2 */}
              <span className="block mt-2 md:mt-3 relative">
                <span
                  className="font-caveat italic font-bold leading-none"
                  style={{ color: "#e0407a", fontSize: "clamp(72px, 11vw, 110px)" }}
                >
                  journeys
                </span>
                <svg
                  className="inline-block ml-2 -mb-2 animate-wobble-rot"
                  width="56" height="48" viewBox="0 0 56 48" fill="none"
                >
                  <path d="M4 30 Q 18 4, 42 14" stroke="#111" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                  <path d="M34 8 L 44 14 L 38 24" stroke="#111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </span>

              {/* Line 3 */}
              <span className="flex flex-wrap items-center gap-x-3 gap-y-2 mt-3">
                <span className="font-unbounded font-black text-[24px] md:text-[34px]">that people</span>
                <span
                  className="inline-block font-unbounded font-black text-[20px] md:text-[28px] px-3 py-0.5"
                  style={{ background: "#c8f135", border: "2px solid #3b6d11", borderRadius: "12px", transform: "rotate(1.5deg)", boxShadow: "3px 3px 0 0 #111" }}
                >
                  actually
                </span>
                <span className="font-unbounded font-black text-[24px] md:text-[34px] relative">
                  engage with.
                  <svg className="absolute left-0 -bottom-3 w-full h-3" viewBox="0 0 200 12" preserveAspectRatio="none" fill="none">
                    <path d="M2 6 Q 15 0, 30 6 T 60 6 T 90 6 T 120 6 T 150 6 T 198 6" stroke="#e0407a" strokeWidth="2.5" strokeDasharray="5 4" strokeLinecap="round" fill="none" />
                  </svg>
                </span>
              </span>
            </h1>

            {/* Bottom row: subtext + buttons */}
            <div className="mt-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <p className="font-nunito font-bold text-[14px] leading-relaxed" style={{ color: "#666", maxWidth: "340px" }}>
                Salesforce Marketing Cloud Email Specialist exploring lifecycle, automation, and how small optimisations drive big impact.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  to="/projects"
                  className="group inline-flex items-center gap-2 px-6 py-3 font-nunito font-black text-sm transition-transform hover:-translate-y-[3px] hover:-rotate-1"
                  style={{ background: "#111", color: "#fff", borderRadius: "99px", border: "2px solid #111" }}
                >
                  View Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 font-nunito font-black text-sm transition-transform hover:-translate-y-[3px] hover:rotate-1"
                  style={{ background: "transparent", color: "#111", borderRadius: "99px", border: "2px solid #111" }}
                >
                  <Mail className="w-4 h-4" /> Contact
                </Link>
              </div>
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
        <h2 className="font-display font-black text-5xl md:text-7xl lg:text-8xl mt-3 leading-[0.9] tracking-tighter">
          From <span className="relative inline-block">
            <span className="line-through decoration-coral decoration-[6px] text-ink/40">servers</span>
          </span>{" "}
          <span className="inline-block animate-float">→</span>{" "}
          <span className="bg-coral text-cream px-3 inline-block -rotate-1">subscribers.</span>
        </h2>

        <div className="mt-12">
          <div className="rounded-3xl border-2 border-ink bg-cream p-8 pop-shadow-sm max-w-3xl">
            <p className="text-lg md:text-xl text-ink/80 leading-relaxed">
              I spent two years at <strong>DXC Technology</strong> keeping global infrastructure reliable for enterprise clients. Then I followed the data — into Marketing Cloud, where the same systems thinking unlocks customer engagement instead of server uptime.
            </p>
            <p className="mt-4 text-lg md:text-xl text-ink/80 leading-relaxed">
              Today I build journeys, write SQL, and ship campaigns. Tomorrow, <span className="bg-lime px-1">Data Cloud</span>.
            </p>
            <Link to="/about" className="mt-6 inline-flex items-center gap-2 font-semibold underline underline-offset-4 hover:text-coral transition-colors">
              Read the full story <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="bg-ink text-cream border-y-2 border-ink py-24 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-lime/20 animate-blob" />
        <div className="absolute -bottom-32 -left-20 w-96 h-96 bg-coral/20 animate-blob" style={{ animationDelay: "3s" }} />
        <div className="container relative">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <div>
              <span className="font-mono-display text-xs uppercase tracking-wider text-lime">// Stack</span>
              <h2 className="font-display font-black text-5xl md:text-7xl mt-3 tracking-tighter">The <span className="text-lime">toolkit.</span></h2>
            </div>
            <p className="text-cream/60 max-w-md">Levels reflect production confidence, not certifications. I learn fast and ship faster.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((s) => (
              <div key={s.name} className="bg-cream/5 backdrop-blur border-2 border-cream/20 rounded-2xl p-5 hover:border-lime transition-colors">
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
              <span key={t} className="px-3 py-1.5 rounded-full bg-cream/5 border border-cream/20 text-sm font-medium hover:bg-lime hover:text-ink hover:border-lime transition-colors">{t}</span>
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

      {/* BEYOND WORK */}
      <section className="container py-24">
        <span className="font-mono-display text-xs uppercase tracking-wider text-cobalt">// Off the clock</span>
        <h2 className="font-display font-black text-5xl md:text-7xl mt-3 tracking-tighter leading-[0.9]">
          Beyond <span className="bg-lime px-2 inline-block -rotate-1">work.</span>
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-ink/70">
          When I'm not building customer journeys, I spend time exploring creativity and ideas that shape how I think about people, behaviour, and storytelling.
        </p>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { icon: Palette, emoji: "🎨", title: "Painting", color: "bg-coral", text: "I enjoy painting as a way to slow down and focus on detail. It strengthens my visual thinking, which reflects in how I design clean, structured, and engaging email experiences." },
            { icon: BookOpen, emoji: "✍️", title: "Journaling", color: "bg-lime", text: "Journaling helps me organise my thoughts and reflect on patterns, ideas, and experiences. It has improved how I think through problems, structure strategies, and communicate clearly — especially when planning customer journeys and campaign flows." },
            { icon: Camera, emoji: "📸", title: "Photography", color: "bg-cobalt text-cream", text: "I enjoy capturing everyday moments and visual compositions through photography. It sharpens my eye for detail, layout, and storytelling, which influences how I approach visual hierarchy and design in emails." },
            { icon: Search, emoji: "🧠", title: "Research & Trend Exploration", color: "bg-lime", text: "I regularly analyse brand campaigns, funnels, and digital experiences to understand what drives engagement. This habit helps me continuously refine how I approach segmentation, messaging, and lifecycle marketing." },
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
