import { SectionLabel } from "./section-label";

export const HowToUse = () => {
  return (
    <section id="how-to" className="py-16 sm:py-20 bg-stone-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="reveal mb-12">
          <SectionLabel>Guidance</SectionLabel>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-stone-900 mb-3">
            <span>How to use</span>
          </h2>
          <p className="text-stone-500 text-lg max-w-2xl">
            <span>
              A little care goes a long way. Follow these steps to make every
              chew session safe, enjoyable, and stress-free for you and your dog.
            </span>
          </p>
        </div>
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="reveal step-line bg-white rounded-2xl border border-stone-200 p-6 flex gap-5 items-start shadow-sm relative">
            <div className="shrink-0 w-14 h-14 rounded-2xl bg-linear-to-br from-peak-50 to-peak-100 border border-peak-200 flex items-center justify-center text-peak-700 font-display font-black text-xl">
              1
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-stone-900 mb-1">
                <span>Pick the right size for your dog</span>
              </h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                <span>
                  Select a chew that matches your dog's breed, weight, and
                  chewing strength. A chew that's too small can be a choking
                  hazard — when in doubt, go one size up.
                </span>
              </p>
            </div>
          </div>
          <div
            className="reveal step-line bg-white rounded-2xl border border-stone-200 p-6 flex gap-5 items-start shadow-sm relative"
            style={{ transitionDelay: ".1s" }}
          >
            <div className="shrink-0 w-14 h-14 rounded-2xl bg-linear-to-br from-amber-50 to-amber-100 border border-amber-200 flex items-center justify-center text-amber-700 font-display font-black text-xl">
              2
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-stone-900 mb-1">
                <span>Always supervise chewing</span>
              </h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                <span>
                  Never leave your dog unsupervised with any chew. When the
                  stick gets small enough to swallow whole, take it away — or
                  pop the nub in the microwave for 45–60 seconds to turn it into
                  a light, puffed snack.
                </span>
              </p>
            </div>
          </div>
          <div
            className="reveal bg-white rounded-2xl border border-stone-200 p-6 flex gap-5 items-start shadow-sm"
            style={{ transitionDelay: ".2s" }}
          >
            <div className="shrink-0 w-14 h-14 rounded-2xl bg-linear-to-br from-stone-50 to-stone-100 border border-stone-200 flex items-center justify-center text-ember font-display font-black text-xl">
              3
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-stone-900 mb-1">
                <span>Store in a cool, dry place</span>
              </h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                <span>
                  Keep unused chews sealed and away from direct sunlight, heat,
                  and humidity. Proper storage preserves freshness and extends
                  shelf life — no refrigeration needed.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};