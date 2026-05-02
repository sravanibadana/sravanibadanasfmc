import { Mail, Linkedin, ExternalLink, MapPin, Phone, Send } from "lucide-react";
import { useState, FormEvent } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Portfolio enquiry — ${data.get("name")}`);
    const body = encodeURIComponent(`${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`);
    window.location.href = `mailto:sravani.badana99@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setSending(false);
      toast.success("Opening your email client…");
    }, 400);
  };

  return (
    <>
      <section className="container pt-16 md:pt-24 pb-12">
        <span className="font-mono-display text-xs uppercase tracking-wider text-coral">// Contact</span>
        <h1 className="font-display font-bold text-5xl md:text-7xl mt-3 max-w-4xl leading-[0.95]">
          Let's talk about your <span className="bg-lime px-2">next campaign</span>.
        </h1>
        <p className="mt-6 text-lg text-ink/70 max-w-2xl">
          Open to Marketing Cloud, CRM and automation roles across Australia. Also up for a coffee chat about Data Cloud, journey design, or how to wrangle a stubborn AMPscript block.
        </p>
      </section>

      <section className="container pb-24">
        <div className="grid lg:grid-cols-5 gap-6">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="mailto:sravani.badana99@gmail.com" className="flex items-start gap-4 p-5 rounded-2xl border-2 border-ink bg-lime pop-shadow-sm hover:-translate-y-1 transition-transform">
              <Mail className="w-6 h-6 mt-0.5" />
              <div>
                <div className="font-mono-display text-xs uppercase tracking-wider opacity-70">Email</div>
                <div className="font-display font-bold text-lg break-all">sravani.badana99@gmail.com</div>
              </div>
            </a>
            <a href="tel:+61426128370" className="flex items-start gap-4 p-5 rounded-2xl border-2 border-ink bg-coral pop-shadow-sm hover:-translate-y-1 transition-transform">
              <Phone className="w-6 h-6 mt-0.5" />
              <div>
                <div className="font-mono-display text-xs uppercase tracking-wider opacity-70">Phone</div>
                <div className="font-display font-bold text-lg">0426 128 370</div>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/sravanibadana" target="_blank" rel="noreferrer" className="flex items-start gap-4 p-5 rounded-2xl border-2 border-ink bg-cobalt text-cream pop-shadow-sm hover:-translate-y-1 transition-transform">
              <Linkedin className="w-6 h-6 mt-0.5" />
              <div>
                <div className="font-mono-display text-xs uppercase tracking-wider opacity-70">LinkedIn</div>
                <div className="font-display font-bold text-lg">/in/sravanibadana</div>
              </div>
            </a>
            <a href="https://www.salesforce.com/trailblazer/sravanibadana" target="_blank" rel="noreferrer" className="flex items-start gap-4 p-5 rounded-2xl border-2 border-ink bg-cream pop-shadow-sm hover:-translate-y-1 transition-transform">
              <ExternalLink className="w-6 h-6 mt-0.5" />
              <div>
                <div className="font-mono-display text-xs uppercase tracking-wider opacity-70">Trailhead</div>
                <div className="font-display font-bold text-lg">@sravanibadana</div>
              </div>
            </a>
            <div className="flex items-start gap-4 p-5 rounded-2xl border-2 border-ink bg-cream pop-shadow-sm">
              <MapPin className="w-6 h-6 mt-0.5" />
              <div>
                <div className="font-mono-display text-xs uppercase tracking-wider opacity-70">Based in</div>
                <div className="font-display font-bold text-lg">Australia · Full work rights (PR)</div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={onSubmit} className="lg:col-span-3 rounded-3xl border-2 border-ink bg-ink text-cream p-8 md:p-10 pop-shadow space-y-5">
            <h2 className="font-display font-bold text-3xl">Send a message.</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="font-mono-display text-xs uppercase tracking-wider text-cream/60">Your name</label>
                <input name="name" required className="w-full mt-1 px-4 py-3 rounded-xl bg-cream/10 border-2 border-cream/20 focus:border-lime focus:outline-none text-cream" />
              </div>
              <div>
                <label className="font-mono-display text-xs uppercase tracking-wider text-cream/60">Email</label>
                <input name="email" type="email" required className="w-full mt-1 px-4 py-3 rounded-xl bg-cream/10 border-2 border-cream/20 focus:border-lime focus:outline-none text-cream" />
              </div>
            </div>
            <div>
              <label className="font-mono-display text-xs uppercase tracking-wider text-cream/60">What's on your mind?</label>
              <textarea name="message" required rows={6} className="w-full mt-1 px-4 py-3 rounded-xl bg-cream/10 border-2 border-cream/20 focus:border-lime focus:outline-none text-cream resize-none" />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-lime text-ink font-semibold border-2 border-lime hover:bg-cream hover:border-cream transition-colors"
            >
              <Send className="w-4 h-4" />
              {sending ? "Opening…" : "Send message"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}