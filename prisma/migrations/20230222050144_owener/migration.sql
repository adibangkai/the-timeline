/*
  Warnings:

  - You are about to drop the column `tokohId` on the `Quotes` table. All the data in the column will be lost.
  - Added the required column `ownerId` to the `Quotes` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Quotes" DROP CONSTRAINT "Quotes_tokohId_fkey";

-- DropIndex
DROP INDEX "Quotes_tokohId_dateQuote_idx";

-- AlterTable
ALTER TABLE "Quotes" DROP COLUMN "tokohId",
ADD COLUMN     "ownerId" TEXT NOT NULL,
ALTER COLUMN "topicId" DROP DEFAULT;

-- CreateIndex
CREATE INDEX "Quotes_ownerId_idx" ON "Quotes"("ownerId");

-- AddForeignKey
ALTER TABLE "Quotes" ADD CONSTRAINT "Quotes_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "Tokoh"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
