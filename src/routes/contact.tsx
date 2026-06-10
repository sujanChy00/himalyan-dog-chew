import { ContactForm } from "#/components/contact-form";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="pt-20">
      <ContactForm />
    </div>
  );
}
