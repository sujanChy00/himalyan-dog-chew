import { SectionLabel } from "./section-label";

export const Benefits = () => {
  return (
    <section
      id="benefits"
      className="py-16 sm:py-20 bg-stone-900 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        //   style={{ "background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Ccircle cx='30' cy='30' r='1.5' fill='white'/%3E%3C/svg%3E\");"}}
      ></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="reveal mb-12">
          <SectionLabel className=" text-peak-300">Why choose us</SectionLabel>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-3">
            Why people choose it
          </h2>
          <p className="text-stone-400 text-lg max-w-2xl">
            <span>
              These cards mirror the kind of feature-led sections common on
              current reference sites.
            </span>
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          <article className="reveal lift bg-white/5 border border-white/10 rounded-3xl p-7 hover:bg-white/10 transition-colors">
            <div className="text-3xl mb-4">⏳</div>
            <h3 className="font-display font-bold text-xl text-white mb-2">
              <span>Long chewing time</span>
            </h3>
            <p className="text-stone-400 text-sm leading-relaxed">
              <span>
                Position it as a chew that keeps dogs engaged for longer
                sessions.
              </span>
            </p>
          </article>
          <article
            className="reveal lift bg-white/5 border border-white/10 rounded-3xl p-7 hover:bg-white/10 transition-colors"
            style={{ transitionDelay: ".1s" }}
          >
            <div className="text-3xl mb-4">🌿</div>
            <h3 className="font-display font-bold text-xl text-white mb-2">
              <span>Simple ingredients</span>
            </h3>
            <p className="text-stone-400 text-sm leading-relaxed">
              <span>
                Keep the ingredient story easy to understand and visually clean.
              </span>
            </p>
          </article>
          <article
            className="reveal lift bg-peak-600/30 border border-peak-500/30 rounded-3xl p-7 hover:bg-peak-600/40 transition-colors"
            style={{ transitionDelay: ".2s" }}
          >
            <div className="text-3xl mb-4">🛡️</div>
            <h3 className="font-display font-bold text-xl text-white mb-2">
              <span>Clear safety guidance</span>
            </h3>
            <p className="text-stone-400 text-sm leading-relaxed">
              <span>
                Use a visible notice about supervision, size choice, and proper
                storage.
              </span>
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};
