import { createServerFn } from "@tanstack/react-start";
import { Resend } from "resend";

interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const CAN_USE_DOM = typeof window !== "undefined";
export const CAN_USE_LOCAL_STORAGE =
  CAN_USE_DOM && typeof localStorage !== "undefined";

export const sendEmail = createServerFn({ method: "POST" })
  .inputValidator((data: EmailData) => data)
  .handler(async ({ data }) => {
    try {
      if (!process.env.RESEND_API_KEY) {
        throw new Error("RESEND_API_KEY is not set");
      }
      const resend = new Resend(process.env.RESEND_API_KEY);

      const response = await resend.emails.send({
        to: process.env.EMAIL!,
        from: "support@sierrajapan.com",
        replyTo: data.email,
        subject: data.subject,
        text: `
      Name: ${data.name}
      Email: ${data.email}
      Subject: ${data.subject}

      ${data.message}
      `,
      });

      if (response.error) {
        console.error("Resend API error:", response.error);
        return { error: { message: response.error.message } };
      }

      return { data: response.data };
    } catch (error: any) {
      console.error("sendEmail server function error:", error);
      return { error: { message: error.message || "Internal server error" } };
    }
  });
