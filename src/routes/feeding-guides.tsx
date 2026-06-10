import { Container } from "#/components/container";
import { FeedingGuide } from "#/components/feeding-guide";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/feeding-guides")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="pb-20 pt-40">
      <Container className="md:max-w-3xl">
        <FeedingGuide />
      </Container>
    </div>
  );
}
