import { footerLinks } from "#/constants";
import { Link } from "@tanstack/react-router";
import { Container } from "./container";
import { InstagramIcon } from "./icons/instagram";
import { MailIcon } from "./icons/mail";

export const Footer = () => {
  return (
    <footer>
      <Container className="grid grid-cols-1 md:grid-cols-4 gap-10 md:divide-x pb-6">
        <section className="space-y-1">
          <Link to="/">
            <img src="/logo.webp" alt="" />
          </Link>

          <div className="text-sm text-gray-700 leading-relaxed">
            <p> Sierra Japan Enterprises LLC</p>
            <p> 1-34-10 Chuo-ku, Saitama-shi,</p>
            <p> Saitama 338-0012, Japan</p>
            <a href="tel:+81488653396">Phone: +81-48-865-3396</a>
            <br />
            <a href="mailto:info@sierrajapan.com">
              Email: info@sierrajapan.com
            </a>
          </div>
        </section>
        <section className="space-y-1">
          <h4 className="font-bold text-sm mb-4 uppercase tracking-wide">
            Menu
          </h4>
          <ul className="space-y-2 text-sm text-gray-700">
            {footerLinks.map((link, index) => (
              <li key={String(link.to) + String(index)}>
                <Link
                  activeProps={{
                    className:
                      "underline text-creamy-text decoration-creamy-text",
                  }}
                  to={link.to}
                  className="hover:text-creamy-text hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <section className="space-y-1">
          <h4 className="font-bold text-sm mb-4 uppercase tracking-wide">
            Contact Us
          </h4>
          <p className="text-sm text-gray-700 mb-4">
            We are here to help!
            <br />
            Feel free to reach out to us.
          </p>
          <Link
            to="/contact"
            className="bg-creamy-dark text-white inline-flex items-center gap-2 px-5 py-2 rounded text-sm font-bold"
          >
            <MailIcon />
            <span>Contact Form</span>
          </Link>
        </section>
        <section className="space-y-1">
          <h4 className="font-bold text-sm mb-4 uppercase tracking-wide">
            Follow Us
          </h4>
          <a
            href="#"
            className="flex items-center gap-2 text-pink-500 font-semibold hover:opacity-80 transition mb-2"
          >
            <InstagramIcon />
            <span>Instagram</span>
          </a>
          <p className="text-xs text-gray-700">
            Follow us for updates and cute dog moments!
          </p>
        </section>
      </Container>
      <div className="bg-creamy-dark">
        <Container className="text-brand flex flex-wrap items-center gap-3 justify-between py-4">
          <div className="flex gap-4">
            <a href="#" className="hover:underline hover:text-creamy">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:underline hover:text-creamy">
              Terms of Use
            </a>
          </div>
          <p>© Sierra Japan Enterprises LLC. All Rights Reserved.</p>
        </Container>
      </div>
    </footer>
  );
};
