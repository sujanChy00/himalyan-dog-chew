import { OurStory } from "#/components/our-story";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/our-story")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="pt-20">
      <OurStory />
    </div>
  );
}
