import { useLanguage } from "#//context/language";
import { sendEmail } from "#/utils";
import { LoaderCircle } from "lucide-react";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Container } from "./container";
import { EmailFailureAlert } from "./email-failure-alert";
import { EmailSuccessAlert } from "./email-success-alert";

export const ContactForm = () => {
  const [captchaVerified, setCaptchaVerified] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const { t } = useLanguage();

  const onCaptchaChange = (token: string | null): void => {
    setCaptchaVerified(!!token);
  };

  const onSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!captchaVerified) return;
    const formData = new FormData(e.currentTarget);

    try {
      setIsLoading(true);

      const data = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        subject: formData.get("subject") as string,
        message: formData.get("message") as string,
      };

      const res = await sendEmail({
        data,
      });
      if (res.error) setErrorMessage(res.error.message);
      if (res.data) {
        setSuccess(true);
      }
    } catch (error) {
      setErrorMessage("An error occurred while sending your message.");
    } finally {
      setIsLoading(false);
      setCaptchaVerified(false);
    }
  };

  return (
    <Container className="bg-brand/10 py-10 md:max-w-3xl">
      <h1 className="text-center text-3xl md:text-4xl font-bold mb-2">
        {t("contact_heading")}
      </h1>
      <form
        onSubmit={onSubmit}
        className="grid md:grid-cols-2 grid-cols-1 gap-4 py-10"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            {t("contact_name")}*
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-3 rounded-md border border-creamy-dark focus:outline-none focus:ring-[3px] focus:ring-creamy-text/50"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            {t("contact_email")}*
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-3 rounded-md border border-creamy-dark focus:outline-none focus:ring-[3px] focus:ring-creamy-text/50"
          />
        </div>
        <div className="col-span-full">
          <label htmlFor="subject" className="block text-sm font-medium mb-2">
            {t("contact_subject")}*
          </label>
          <input
            id="subject"
            name="subject"
            className="w-full px-4 py-3 rounded-md border border-creamy-dark focus:outline-none focus:ring-[3px] focus:ring-creamy-text/50"
          />
        </div>

        <div className="col-span-full">
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            {t("contact_message")}*
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="w-full px-4 py-3 rounded-md border border-creamy-dark focus:outline-none focus:ring-[3px] focus:ring-creamy-text/50"
          />
        </div>

        <div className="col-span-full space-y-1">
          {!captchaVerified && (
            <ReCAPTCHA
              sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
              onChange={onCaptchaChange}
            />
          )}
          {errorMessage && <EmailFailureAlert message={errorMessage} />}
          {success && <EmailSuccessAlert />}
          <button
            disabled={isLoading || !captchaVerified}
            type="submit"
            className="w-full bg-creamy-dark text-white disabled:opacity-50 flex items-center justify-center gap-1 px-4 py-3 rounded-md font-medium hover:bg-creamy-dark/90 transition"
          >
            {isLoading && <LoaderCircle className="animate-spin size-4" />}
            <span>{t("contact_submit")}</span>
          </button>
        </div>
      </form>
    </Container>
  );
};
