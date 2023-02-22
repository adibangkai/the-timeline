-- CreateTable
CREATE TABLE "Saran" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "masukan" TEXT NOT NULL,

    CONSTRAINT "Saran_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Kontribusi" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "masukan" TEXT NOT NULL,
    "sourceLink" TEXT NOT NULL,

    CONSTRAINT "Kontribusi_pkey" PRIMARY KEY ("id")
);
