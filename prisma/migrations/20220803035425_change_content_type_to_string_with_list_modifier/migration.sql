/*
  Warnings:

  - The `content` column on the `Entry` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Entry" DROP COLUMN "content",
ADD COLUMN     "content" TEXT[];
