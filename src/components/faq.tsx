import { SectionLabel } from "./section-label";

export const Faq = () => {
  return (
    <section id="faq" className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="reveal mb-12">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-stone-900 mb-3">
            <span>Frequently asked questions</span>
          </h2>
          <p className="text-stone-500 text-lg max-w-2xl">
            <span>
              Short answers help keep a landing page clean and easy to scan.
            </span>
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          <article className="reveal lift bg-white rounded-3xl border border-stone-100 p-7 shadow-sm">
            <div className="text-2xl mb-3">🐕</div>
            <h3 className="font-display font-bold text-lg text-stone-900 mb-2">
              <span>Is it for all dogs?</span>
            </h3>
            <p className="text-stone-500 text-sm leading-relaxed">
              <span>
                Add size guidance and a note that chewing style differs by dog.
              </span>
            </p>
          </article>
          <article
            className="reveal lift bg-white rounded-3xl border border-stone-100 p-7 shadow-sm"
            style={{ transitionDelay: ".08s" }}
          >
            <div className="text-2xl mb-3">⏱️</div>
            <h3 className="font-display font-bold text-lg text-stone-900 mb-2">
              <span>How long does it last?</span>
            </h3>
            <p className="text-stone-500 text-sm leading-relaxed">
              <span>
                Designed to be long-lasting, while exact time depends on the
                dog.
              </span>
            </p>
          </article>
          <article
            className="reveal lift bg-white rounded-3xl border border-stone-100 p-7 shadow-sm"
            style={{ transitionDelay: ".16s" }}
          >
            <div className="text-2xl mb-3">🛒</div>
            <h3 className="font-display font-bold text-lg text-stone-900 mb-2">
              <span>Where can I buy it?</span>
            </h3>
            <p className="text-stone-500 text-sm leading-relaxed">
              <span>
                Use a store locator, online shop link, or retail contact form.
              </span>
            </p>
          </article>
          <article
            className="reveal lift bg-white rounded-3xl border border-stone-100 p-7 shadow-sm"
            style={{ transitionDelay: ".24s" }}
          >
            <div className="text-2xl mb-3">🛡️</div>
            <h3 className="font-display font-bold text-lg text-stone-900 mb-2">
              <span>What about safety?</span>
            </h3>
            <p className="text-stone-500 text-sm leading-relaxed">
              <span>Supervise chewing and stop if the dog bites too hard.</span>
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};
