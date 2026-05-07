import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Target, AlertTriangle, Wrench, Database, Workflow, GitBranch, Sparkles, BarChart3, Lightbulb, RefreshCw } from "lucide-react";
import { projects } from "@/data/projects";
import welcomeOnboardingImg from "@/assets/welcome-onboarding-journey.png";

const projectImages: Record<string, string> = {
  "welcome-onboarding-journey": welcomeOnboardingImg,
};

const Section = ({ icon: Icon, title, children, color = "bg-cream" }: any) => (
  <section className={`rounded-2xl border-2 border-ink p-6 md:p-8 pop-shadow-sm ${color}`}>
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 grid place-items-center rounded-xl bg-ink text-cream">
        <Icon className="w-5 h-5" />
      </div>
      <h2 className="font-display font-bold text-2xl">{title}</h2>
    </div>
    <div className="text-ink/80 leading-relaxed">{children}</div>
  </section>
);

export default function CaseStudy() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  if (!project) return <Navigate to="/projects" replace />;

  const idx = projects.findIndex((p) => p.slug === slug);
  const next = projects[(idx + 1) % projects.length];

  const accentBg = project.accent === "lime" ? "bg-lime" : project.accent === "coral" ? "bg-coral" : "bg-cobalt text-cream";
  const heroImage = projectImages[project.slug];

  return (
    <>
      {/* Hero */}
      <section className={`relative ${accentBg} border-b-2 border-ink`}>
        <div className="absolute inset-0 grain pointer-events-none" />
        <div className="container py-12 md:py-20 relative">
          <Link to="/projects" className="inline-flex items-center gap-2 font-semibold mb-8 hover:underline">
            <ArrowLeft className="w-4 h-4" /> All projects
          </Link>
          <span className="font-mono-display text-xs uppercase tracking-wider">// Case Study</span>
          <h1 className="font-display font-bold text-4xl md:text-6xl mt-3 max-w-4xl leading-[0.95]">{project.title}</h1>
          <p className="mt-6 text-lg max-w-2xl">{project.shortDescription}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tools.map((t) => (
              <span key={t} className="px-3 py-1.5 rounded-full bg-ink text-cream text-xs font-semibold">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <div className="container py-16 grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Section icon={Lightbulb} title="Overview">
            <p>{project.overview}</p>
          </Section>

          {heroImage && (
            <figure className="rounded-2xl border-2 border-ink overflow-hidden bg-cream pop-shadow-sm">
              <img src={heroImage} alt={`${project.title} journey diagram`} className="w-full h-auto block" loading="lazy" />
              <figcaption className="px-4 py-3 text-xs font-mono-display text-ink/70 border-t-2 border-ink bg-cream">
                Journey Builder canvas — Salesforce Marketing Cloud
              </figcaption>
            </figure>
          )}

          <Section icon={AlertTriangle} title="Problem Statement" color="bg-coral/10">
            <p>{project.problem}</p>
          </Section>

          <Section icon={Target} title="Objective" color="bg-lime/20">
            <p>{project.objective}</p>
          </Section>

          <Section icon={Database} title="Data Structure & Architecture">
            <ul className="space-y-2">
              {project.architecture.map((a, i) => (
                <li key={i} className="flex gap-3"><span className="font-mono-display text-xs text-coral mt-1">0{i + 1}</span><span>{a}</span></li>
              ))}
            </ul>
          </Section>

          <Section icon={Wrench} title="Approach">
            <ol className="space-y-3">
              {project.approach.map((a, i) => (
                <li key={i} className="flex gap-3">
                  <span className="shrink-0 w-7 h-7 grid place-items-center rounded-full bg-ink text-cream text-sm font-bold">{i + 1}</span>
                  <span>{a}</span>
                </li>
              ))}
            </ol>
          </Section>

          <Section icon={GitBranch} title="Journey Design" color="bg-cobalt/10">
            <ul className="space-y-2">
              {project.journey.map((j, i) => (
                <li key={i} className="flex gap-3"><span className="text-cobalt font-bold">→</span><span>{j}</span></li>
              ))}
            </ul>
          </Section>

          <Section icon={Sparkles} title="Personalisation Strategy">
            <ul className="space-y-2 list-disc list-inside marker:text-coral">
              {project.personalisation.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          </Section>

          <Section icon={Workflow} title="Automation Setup">
            <ul className="space-y-2 list-disc list-inside marker:text-cobalt">
              {project.automation.map((a, i) => <li key={i}>{a}</li>)}
            </ul>
          </Section>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6 lg:sticky lg:top-24 self-start">
          <div className="rounded-2xl border-2 border-ink bg-ink text-cream p-6 pop-shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <BarChart3 className="w-5 h-5 text-lime" />
              <h3 className="font-display font-bold text-xl">Results</h3>
            </div>
            <div className="space-y-4">
              {project.results.map((r) => (
                <div key={r.label} className="border-l-2 border-lime pl-4">
                  <div className="font-display font-bold text-3xl text-lime">{r.value}</div>
                  <div className="text-sm text-cream/70">{r.label}</div>
                  {r.sub && <div className="text-xs text-cream/50 mt-0.5 font-mono-display">{r.sub}</div>}
                </div>
              ))}
            </div>
          </div>

          <Section icon={Lightbulb} title="Key Learnings" color="bg-lime/30">
            <ul className="space-y-2 text-sm">
              {project.learnings.map((l, i) => (
                <li key={i} className="flex gap-2"><span>✦</span><span>{l}</span></li>
              ))}
            </ul>
          </Section>

          <Section icon={RefreshCw} title="What I'd Improve" color="bg-coral/15">
            <ul className="space-y-2 text-sm">
              {project.improvements.map((l, i) => (
                <li key={i} className="flex gap-2"><span>↻</span><span>{l}</span></li>
              ))}
            </ul>
          </Section>
        </aside>
      </div>

      {/* Next */}
      <section className="container pb-24">
        <Link
          to={`/projects/${next.slug}`}
          className="group flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-8 rounded-3xl border-2 border-ink bg-cream pop-shadow hover:-translate-y-1 transition-transform"
        >
          <div>
            <span className="font-mono-display text-xs uppercase tracking-wider text-coral">// Next case</span>
            <div className="font-display font-bold text-2xl md:text-3xl mt-2">{next.title}</div>
          </div>
          <span className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-ink text-cream font-semibold whitespace-nowrap">
            Continue <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </Link>
      </section>
    </>
  );
}