-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "visitedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userAgent" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);
