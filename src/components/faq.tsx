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
              Everything you need to know before your dog takes their first
              chew.
            </span>
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          <article className="reveal lift bg-white rounded-3xl border border-stone-100 p-7 shadow-sm">
            <div className="text-2xl mb-3">🐕</div>
            <h3 className="font-display font-bold text-lg text-stone-900 mb-2">
              <span>Is it suitable for all dogs?</span>
            </h3>
            <p className="text-stone-500 text-sm leading-relaxed">
              <span>
                Yes — we offer multiple sizes to suit small, medium, and large
                breeds. We recommend choosing a size larger than you think you
                need, especially for aggressive chewers. Not recommended for
                puppies under 6 months or dogs with dental sensitivities.
              </span>
            </p>
          </article>
          <article
            className="reveal lift bg-white rounded-3xl border border-stone-100 p-7 shadow-sm"
            style={{ transitionDelay: ".08s" }}
          >
            <div className="text-2xl mb-3">⏱️</div>
            <h3 className="font-display font-bold text-lg text-stone-900 mb-2">
              <span>How long does one chew last?</span>
            </h3>
            <p className="text-stone-500 text-sm leading-relaxed">
              <span>
                Our chews are designed to last significantly longer than soft
                treats — typically hours to days depending on your dog's size
                and chewing intensity. The harder the chewer, the more
                satisfying and extended the session.
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
                Our chews are available through select retailers in Japan and
                via international wholesale and distribution partners worldwide.
                Get in touch through our contact form for purchasing options
                near you.
              </span>
            </p>
          </article>
          <article
            className="reveal lift bg-white rounded-3xl border border-stone-100 p-7 shadow-sm"
            style={{ transitionDelay: ".24s" }}
          >
            <div className="text-2xl mb-3">🛡️</div>
            <h3 className="font-display font-bold text-lg text-stone-900 mb-2">
              <span>Are they safe?</span>
            </h3>
            <p className="text-stone-500 text-sm leading-relaxed">
              <span>
                Himalayan cheese chews are naturally hard and low-risk when used
                correctly. Always supervise your dog, remove the chew when it
                becomes small enough to swallow whole, and consult your vet if
                your dog has any dietary concerns. Made with no artificial
                additives — just natural ingredients.
              </span>
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};