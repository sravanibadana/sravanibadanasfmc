import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowRight, GitBranch, Workflow, BarChart3, Database } from "lucide-react";
import { projects, categories, Category } from "@/data/projects";

const filters: { key: Category | "all"; label: string; icon: any }[] = [
  { key: "all", label: "All", icon: ArrowRight },
  { key: "journeys", label: "Journeys", icon: GitBranch },
  { key: "automation", label: "Automation", icon: Workflow },
  { key: "analytics", label: "Analytics", icon: BarChart3 },
  { key: "datacloud", label: "Data Cloud", icon: Database },
];

const accentBg = (a: string) =>
  a === "lime" ? "bg-lime" : a === "coral" ? "bg-coral" : "bg-cobalt text-cream";

export default function Projects() {
  const [active, setActive] = useState<Category | "all">("all");
  const list = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <section className="container pt-16 md:pt-24 pb-12">
        <span className="font-mono-display text-xs uppercase tracking-wider text-coral">// Projects</span>
        <h1 className="font-display font-bold text-5xl md:text-7xl mt-3 max-w-4xl leading-[0.95]">
          Real work. Realistic <span className="bg-lime px-2">numbers</span>. Documented end to end.
        </h1>
        <p className="mt-6 text-lg text-ink/70 max-w-2xl">
          Each project below opens into a full case study — problem, architecture, journey, automation, results, learnings, and what I'd improve next time.
        </p>
      </section>

      {/* Filters */}
      <section className="container pb-8">
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={`px-5 py-2.5 rounded-full border-2 border-ink font-semibold text-sm transition-all ${
                active === f.key ? "bg-ink text-cream" : "bg-cream hover:bg-lime"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      {/* Categories grouped */}
      {(["journeys", "automation", "analytics", "datacloud"] as Category[]).map((catKey) => {
        const items = list.filter((p) => p.category === catKey);
        if (items.length === 0) return null;
        const c = categories[catKey];
        return (
          <section key={catKey} className="container pb-16">
            <div className="flex items-end justify-between flex-wrap gap-3 mb-8 mt-8">
              <div>
                <span className="font-mono-display text-xs uppercase tracking-wider text-coral">// {catKey}</span>
                <h2 className="font-display font-bold text-3xl md:text-4xl mt-2">{c.label}</h2>
                <p className="text-ink/60 mt-1 max-w-2xl">{c.tagline}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {items.map((p) => (
                <Link
                  key={p.slug}
                  to={`/projects/${p.slug}`}
                  className="group flex flex-col rounded-2xl border-2 border-ink bg-cream overflow-hidden pop-shadow-sm hover:pop-shadow hover:-translate-y-1 transition-all"
                >
                  <div className={`h-2 ${accentBg(p.accent)} border-b-2 border-ink`} />
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-display font-bold text-2xl leading-tight">{p.title}</h3>
                    <p className="text-ink/60 mt-3 flex-1">{p.shortDescription}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {p.tools.slice(0, 4).map((t) => (
                        <span key={t} className="px-2.5 py-1 text-xs font-semibold rounded-md bg-ink/5 border border-ink/10">{t}</span>
                      ))}
                      {p.tools.length > 4 && (
                        <span className="px-2.5 py-1 text-xs font-semibold rounded-md bg-ink/5 border border-ink/10">+{p.tools.length - 4}</span>
                      )}
                    </div>
                    <div className="mt-6 inline-flex items-center gap-2 font-semibold">
                      View Case Study <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        );
      })}
    </>
  );
}