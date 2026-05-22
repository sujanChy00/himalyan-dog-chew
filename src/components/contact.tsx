import { SectionLabel } from "./section-label";

export const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="reveal bg-linear-to-br from-stone-900 to-stone-800 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-10 sm:p-14">
              <SectionLabel className=" text-peak-300 mb-3">
                Get in touch
              </SectionLabel>
              <h2 className="font-display text-4xl font-bold text-white mb-4">
                <span>Ready to partner with us?</span>
              </h2>
              <p className="text-stone-400 mb-8 leading-relaxed text-sm sm:text-base">
                <span>
                  Sierra Japan Enterprises LLC is the official importer of
                  Himalayan Dog Cheese in Japan. We welcome inquiries from pet
                  shops, retailers, and wholesale distributors.
                </span>
              </p>
              <ul className="space-y-4 text-stone-300 text-sm">
                <li className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-base">
                    📞
                  </span>
                  <div>
                    <div className="text-xs text-stone-500 font-semibold uppercase tracking-wider">
                      <span>Phone</span>
                    </div>
                    <a
                      href="tel:048-865-3396"
                      className="hover:text-peak-300 transition-colors font-medium"
                    >
                      <span>048 865 3396</span>
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-base">
                    ✉️
                  </span>
                  <div>
                    <div className="text-xs text-stone-500 font-semibold uppercase tracking-wider">
                      <span>Email</span>
                    </div>
                    <a
                      href="mailto:info@sierrajapan.com"
                      className="hover:text-peak-300 transition-colors font-medium"
                    >
                      <span>info@sierrajapan.com</span>
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-base">
                    ⏰
                  </span>
                  <div>
                    <div className="text-xs text-stone-500 font-semibold uppercase tracking-wider">
                      <span>Business Hours</span>
                    </div>
                    <span>Mon - Fri, 9:00 AM - 6:00 PM</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="p-10 sm:p-14 bg-white/5 border-l border-white/10 flex flex-col justify-between">
              <div>
                <h3 className="font-display font-bold text-white text-xl mb-6">
                  <span>Company Profile</span>
                </h3>
                <div className="space-y-5 text-stone-300 text-sm">
                  <div>
                    <div className="text-xs text-stone-500 font-semibold uppercase tracking-wider mb-1">
                      <span>Company Name</span>
                    </div>
                    <div className="font-semibold text-white">
                      <span>Sierra Japan Enterprises LLC</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-stone-500 font-semibold uppercase tracking-wider mb-1">
                      <span>Address</span>
                    </div>
                    <div>
                      <a
                        href="https://maps.google.com/?q=埼玉県さいたま市桜区西堀2-4-2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-peak-300 transition-colors inline-flex items-center gap-1 font-medium"
                      >
                        <span>
                          Saitama Shi, Sakura Ku, Nishibori 2-4-2, Saitama,
                          Japan ↗
                        </span>
                      </a>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-stone-500 font-semibold uppercase tracking-wider mb-1">
                      <span>Phone</span>
                    </div>
                    <div>
                      <a
                        href="tel:048-865-3396"
                        className="hover:text-peak-300 transition-colors font-semibold"
                      >
                        <span>048-865-3396</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-stone-300 border border-white/20">
                  <span>Official Importer</span>
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-peak-500/40 text-peak-200 border border-peak-500/30">
                  <span>Wholesale Partnership</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
