import { prisma } from "#/db";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/tracking.html")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const userAgent = request.headers.get("user-agent");
        await prisma.user.create({
          data: {
            userAgent,
          },
        });
        return new Response(null, {
          status: 307,
          headers: {
            Location: "https://amzn.asia/d/02u325F7",
          },
        });
      },
    },
  },
});
