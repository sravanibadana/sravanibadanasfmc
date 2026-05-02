import { Link } from "react-router-dom";
import { Award, Heart, Server, Workflow, Database, Sparkles, ArrowRight } from "lucide-react";

const certs = [
  "Salesforce Marketing Cloud Email Specialist",
  "Salesforce Data Cloud Consultant (In Progress)",
  "Google Digital Marketing & E-commerce Professional",
  "Campaign Manager 360 — Google Skillshop",
  "Fundamentals of Digital Marketing — Google",
];

const tools = [
  { name: "Email Studio", color: "bg-lime" },
  { name: "Journey Builder", color: "bg-coral" },
  { name: "Automation Studio", color: "bg-cobalt text-cream" },
  { name: "Contact Builder", color: "bg-lime" },
  { name: "Content Builder", color: "bg-coral" },
  { name: "Data Extensions", color: "bg-cobalt text-cream" },
  { name: "AMPscript", color: "bg-lime" },
  { name: "SQL", color: "bg-coral" },
  { name: "Data Cloud", color: "bg-cobalt text-cream" },
  { name: "Salesforce CRM", color: "bg-lime" },
  { name: "REST / SOAP APIs", color: "bg-coral" },
  { name: "Google Analytics", color: "bg-cobalt text-cream" },
];

const leadership = [
  "University Innovation Fellow — Stanford d.school",
  "AIESEC Global Youth Leadership Program",
  "President — Women's Association (Elected)",
  "Brand Ambassador — Aspire 2020",
  "Volunteer — Project Management Institute Queensland (current)",
];

export default function About() {
  return (
    <>
      <section className="container pt-16 md:pt-24 pb-16">
        <span className="font-mono-display text-xs uppercase tracking-wider text-coral">// About</span>
        <h1 className="font-display font-bold text-5xl md:text-7xl mt-3 max-w-4xl leading-[0.95]">
          I came up in <span className="text-cobalt">infrastructure</span>. I stayed for the <span className="bg-lime px-2">data</span>.
        </h1>
        <p className="mt-8 text-lg md:text-xl text-ink/70 max-w-3xl">
          Two years administering 10,000+ servers taught me one thing: systems that scale are systems that automate. That mindset is exactly what modern marketing needs — and exactly what I bring to Marketing Cloud.
        </p>
      </section>

      {/* STORY */}
      <section className="container pb-24">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="rounded-3xl border-2 border-ink bg-cream p-8 pop-shadow-sm">
            <Server className="w-10 h-10 mb-4" />
            <h2 className="font-display font-bold text-2xl mb-3">Then — Infrastructure Analyst, DXC Technology</h2>
            <p className="text-ink/70 leading-relaxed">
              I worked across 8 global data centres administering 10,000+ physical and virtual servers at 99.9% uptime. I led the deployment of 800+ servers, migrated 7,000+ VMs with zero data loss, and cut deployment time by 40% through standardised automation templates.
            </p>
            <p className="text-ink/70 leading-relaxed mt-3">
              The job taught me to think in <strong className="text-ink">pipelines, redundancy, and observability</strong>. Boring on paper. Critical in practice.
            </p>
          </div>

          <div className="rounded-3xl border-2 border-ink bg-coral p-8 pop-shadow-sm">
            <Workflow className="w-10 h-10 mb-4" />
            <h2 className="font-display font-bold text-2xl mb-3">Now — Salesforce Marketing Cloud</h2>
            <p className="text-ink/90 leading-relaxed">
              I build journeys, write SQL in Automation Studio, segment audiences in Contact Builder, and personalise sends with AMPscript. The tools changed. The discipline didn't.
            </p>
            <p className="text-ink/90 leading-relaxed mt-3">
              Reliable campaign delivery is reliable infrastructure with a creative brief. I've shipped onboarding journeys, win-back sequences, transactional frameworks, and automated segmentation pipelines.
            </p>
          </div>
        </div>

        {/* CONNECTION */}
        <div className="mt-10 rounded-3xl border-2 border-ink bg-ink text-cream p-10 pop-shadow relative overflow-hidden">
          <Database className="w-10 h-10 text-lime mb-4" />
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4 max-w-2xl">
            Next — Salesforce <span className="text-lime">Data Cloud</span>.
          </h2>
          <p className="text-cream/70 max-w-2xl text-lg">
            Unified profiles, identity resolution, real-time activation. The natural next layer for someone who already lives at the intersection of data and engagement. Currently working through the Data Cloud Consultant certification.
          </p>
        </div>
      </section>

      {/* CERTS + TOOLS */}
      <section className="bg-secondary border-y-2 border-ink py-24">
        <div className="container grid md:grid-cols-2 gap-12">
          <div>
            <span className="font-mono-display text-xs uppercase tracking-wider text-coral">// Credentials</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl mt-3 mb-8">Certifications</h2>
            <ul className="space-y-3">
              {certs.map((c) => (
                <li key={c} className="flex items-start gap-3 p-4 rounded-xl bg-cream border-2 border-ink pop-shadow-sm">
                  <Award className="w-5 h-5 text-coral shrink-0 mt-0.5" />
                  <span className="font-medium">{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="font-mono-display text-xs uppercase tracking-wider text-cobalt">// Stack</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl mt-3 mb-8">Tools I use</h2>
            <div className="flex flex-wrap gap-3">
              {tools.map((t) => (
                <span key={t.name} className={`px-4 py-2 rounded-full ${t.color} border-2 border-ink font-semibold text-sm`}>
                  {t.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="container py-24">
        <span className="font-mono-display text-xs uppercase tracking-wider text-coral">// Beyond the resume</span>
        <h2 className="font-display font-bold text-3xl md:text-4xl mt-3 mb-8">Leadership & community</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {leadership.map((l) => (
            <div key={l} className="flex items-start gap-3 p-5 rounded-xl border-2 border-ink bg-cream pop-shadow-sm">
              <Heart className="w-5 h-5 text-coral shrink-0 mt-1" />
              <span className="font-medium">{l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container pb-24">
        <div className="rounded-3xl border-2 border-ink bg-lime p-10 md:p-14 pop-shadow flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
          <div>
            <Sparkles className="w-8 h-8 mb-3" />
            <h2 className="font-display font-bold text-3xl md:text-4xl">See how it shows up in real work.</h2>
          </div>
          <Link to="/projects" className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-ink text-cream font-semibold border-2 border-ink whitespace-nowrap">
            Explore projects <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}