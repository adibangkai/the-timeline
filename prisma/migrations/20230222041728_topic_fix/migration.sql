-- AlterTable
ALTER TABLE "Quotes" ADD COLUMN     "topicId" TEXT NOT NULL DEFAULT 'default';

-- AddForeignKey
ALTER TABLE "Quotes" ADD CONSTRAINT "Quotes_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
