/*
  Warnings:

  - You are about to drop the column `topicId` on the `Quotes` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Quotes" DROP CONSTRAINT "Quotes_topicId_fkey";

-- AlterTable
ALTER TABLE "Quotes" DROP COLUMN "topicId";
