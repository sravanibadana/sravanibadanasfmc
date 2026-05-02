import { Link } from "react-router-dom";
import { Database, Fingerprint, Target, ArrowRight, Zap } from "lucide-react";
import { projects } from "@/data/projects";

const pillars = [
  {
    icon: Database,
    title: "Data Modelling & Ingestion",
    color: "bg-lime",
    points: [
      "Configured Data Streams, Data Lake Objects (DLOs) and Data Model Objects (DMOs)",
      "Mapped Marketing Cloud + external sources into unified profiles",
      "Applied batch and streaming ingestion patterns in project scenarios",
    ],
  },
  {
    icon: Fingerprint,
    title: "Identity Resolution",
    color: "bg-coral",
    points: [
      "Configured identity rulesets to unify customers across CRM, web, and ecom",
      "Defined match + reconciliation priority for conflicting attributes",
      "Treated identity resolution as 80% data hygiene, 20% configuration",
    ],
  },
  {
    icon: Target,
    title: "Segmentation & Activation",
    color: "bg-cobalt text-cream",
    points: [
      "Built attribute-based and calculated-insight segments",
      "Activated audiences into Marketing Cloud Data Extensions",
      "Applied data governance — consent management and classification",
    ],
  },
];

const dcProjects = projects.filter((p) => p.category === "datacloud");

export default function DataCloud() {
  return (
    <>
      <section className="container pt-16 md:pt-24 pb-12">
        <span className="font-mono-display text-xs uppercase tracking-wider text-coral">// Data Cloud</span>
        <h1 className="font-display font-bold text-5xl md:text-7xl mt-3 max-w-4xl leading-[0.95]">
          Unified profiles. Real-time <span className="text-cobalt">activation</span>. One source of truth.
        </h1>
        <p className="mt-6 text-lg text-ink/70 max-w-2xl">
          Marketing Cloud is the executor. Data Cloud is the brain. I'm building both — currently working through the Data Cloud Consultant certification while running hands-on project scenarios.
        </p>
      </section>

      {/* Pillars */}
      <section className="container pb-16">
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-2xl border-2 border-ink bg-cream p-6 pop-shadow-sm">
              <div className={`w-12 h-12 grid place-items-center rounded-xl ${p.color} border-2 border-ink mb-4`}>
                <p.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl mb-3">{p.title}</h3>
              <ul className="space-y-2 text-sm text-ink/70">
                {p.points.map((pt, i) => (
                  <li key={i} className="flex gap-2"><span className="text-coral">→</span>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="container pb-16">
        <div className="rounded-3xl border-2 border-ink bg-secondary p-8 md:p-12 pop-shadow-sm">
          <span className="font-mono-display text-xs uppercase tracking-wider text-coral">// Architecture</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl mt-2 mb-8">From source systems to send.</h2>

          <div className="grid lg:grid-cols-5 gap-3 items-stretch">
            {[
              { label: "Sources", items: ["CRM", "Ecommerce", "Web Events"], color: "bg-cream" },
              { label: "Data Streams", items: ["Batch", "Streaming"], color: "bg-lime" },
              { label: "DLOs → DMOs", items: ["Individual", "Contact Point Email", "Order"], color: "bg-coral" },
              { label: "Identity + Insights", items: ["Resolved Profile", "LTV90", "PreferredChannel"], color: "bg-cobalt text-cream" },
              { label: "Activation", items: ["Marketing Cloud DE", "Journeys", "Personalisation"], color: "bg-cream" },
            ].map((step, i, arr) => (
              <div key={step.label} className="relative">
                <div className={`h-full rounded-2xl border-2 border-ink ${step.color} p-4 pop-shadow-sm`}>
                  <div className="font-mono-display text-[10px] uppercase tracking-wider opacity-60">Step 0{i + 1}</div>
                  <div className="font-display font-bold mt-1 mb-3">{step.label}</div>
                  <ul className="space-y-1 text-sm">
                    {step.items.map((it) => (
                      <li key={it} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-ink" />{it}</li>
                    ))}
                  </ul>
                </div>
                {i < arr.length - 1 && (
                  <div className="hidden lg:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="container pb-16">
        <span className="font-mono-display text-xs uppercase tracking-wider text-coral">// Case studies</span>
        <h2 className="font-display font-bold text-3xl md:text-4xl mt-2 mb-8">Data Cloud projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {dcProjects.map((p) => (
            <Link key={p.slug} to={`/projects/${p.slug}`} className="group rounded-2xl border-2 border-ink bg-cream p-6 pop-shadow-sm hover:pop-shadow hover:-translate-y-1 transition-all flex flex-col">
              <Zap className="w-8 h-8 text-coral mb-3" />
              <h3 className="font-display font-bold text-2xl">{p.title}</h3>
              <p className="text-ink/60 mt-2 flex-1">{p.shortDescription}</p>
              <div className="mt-5 inline-flex items-center gap-2 font-semibold">
                Read case study <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}