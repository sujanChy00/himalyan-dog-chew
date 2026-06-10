import { FeaturedProducts } from "#/components/featured-products";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/products")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="pt-20">
      <FeaturedProducts className="bg-brand/10 **:data-[card='product']:bg-white" />
    </div>
  );
}
