import { prisma } from "#/db";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/trackingdata")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url);
        const apikey = url.searchParams.get("api-key");
        if (apikey != process.env.APIKEY) {
          return Response.json({
            message: "UNAUTHORIZED",
          });
        }
        const data = await prisma.user.groupBy({
          by: ["userAgent", "visitedAt"],
          _count: {
            userAgent: true,
          },
        });

        return new Response(JSON.stringify(data), {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
        });
      },
    },
  },
});
