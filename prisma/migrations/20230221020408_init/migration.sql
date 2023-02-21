-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,
    "level" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tokoh" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nick" TEXT NOT NULL,
    "fullname" TEXT NOT NULL,
    "partai" TEXT NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Tokoh_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Quotes" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tokohId" TEXT NOT NULL,
    "quote" TEXT NOT NULL,
    "dateQuote" TIMESTAMP(3) NOT NULL,
    "sourceQuote" TEXT NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Quotes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "Quotes_tokohId_dateQuote_idx" ON "Quotes"("tokohId", "dateQuote" DESC);

-- AddForeignKey
ALTER TABLE "Quotes" ADD CONSTRAINT "Quotes_tokohId_fkey" FOREIGN KEY ("tokohId") REFERENCES "Tokoh"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
