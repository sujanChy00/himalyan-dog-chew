import { Container } from "./container";

export const Footer = () => {
  return (
    <footer className="py-10 border-t border-stone-200">
      <Container className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-linear-to-br from-peak-500 to-peak-700 flex items-center justify-center text-white text-sm">
            🐕
          </div>
          <div>
            <div className="font-display font-bold text-stone-900 text-sm">
              Himalayan Dog Cheese
            </div>
            <div className="text-stone-400 text-xs">
              <span>Distributed in Japan by Sierra Japan Enterprises LLC</span>
            </div>
          </div>
        </div>
        <div className="text-stone-400 text-sm">
          <span>© 2026 Sierra Japan Enterprises LLC. All rights reserved.</span>
        </div>
      </Container>
    </footer>
  );
};
