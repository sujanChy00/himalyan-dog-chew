import { SectionLabel } from "./section-label";

export const Benefits = () => {
  return (
    <section
      id="benefits"
      className="py-16 sm:py-20 bg-stone-900 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
      ></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="reveal mb-12">
          <SectionLabel className="text-peak-300">Why choose us</SectionLabel>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-3">
            Why dogs (and owners) love it
          </h2>
          <p className="text-stone-400 text-lg max-w-2xl">
            <span>
              Pure Himalayan tradition, zero compromise. Here's what makes our
              chews a cut above the rest.
            </span>
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          <article className="reveal lift bg-white/5 border border-white/10 rounded-3xl p-7 hover:bg-white/10 transition-colors">
            <div className="text-3xl mb-4">⏳</div>
            <h3 className="font-display font-bold text-xl text-white mb-2">
              <span>Hours of chewing</span>
            </h3>
            <p className="text-stone-400 text-sm leading-relaxed">
              <span>
                Unlike soft treats that vanish in seconds, our hard cheese chews
                are dense and long-lasting — keeping your dog focused, satisfied,
                and happily occupied for hours.
              </span>
            </p>
          </article>
          <article
            className="reveal lift bg-white/5 border border-white/10 rounded-3xl p-7 hover:bg-white/10 transition-colors"
            style={{ transitionDelay: ".1s" }}
          >
            <div className="text-3xl mb-4">🌿</div>
            <h3 className="font-display font-bold text-xl text-white mb-2">
              <span>Just 4 ingredients</span>
            </h3>
            <p className="text-stone-400 text-sm leading-relaxed">
              <span>
                Yak milk, cow milk, salt, and lime juice — that's it. No
                artificial preservatives, no fillers, no mystery additives. Clean
                chews you can feel good about giving your dog every day.
              </span>
            </p>
          </article>
          <article
            className="reveal lift bg-peak-600/30 border border-peak-500/30 rounded-3xl p-7 hover:bg-peak-600/40 transition-colors"
            style={{ transitionDelay: ".2s" }}
          >
            <div className="text-3xl mb-4">🛡️</div>
            <h3 className="font-display font-bold text-xl text-white mb-2">
              <span>Safe chewing, every time</span>
            </h3>
            <p className="text-stone-400 text-sm leading-relaxed">
              <span>
                Always supervise your dog while chewing, choose the right size
                for their breed, and store in a cool, dry place. When the chew
                gets small, microwave the nub into a puffy snack — nothing goes
                to waste.
              </span>
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};