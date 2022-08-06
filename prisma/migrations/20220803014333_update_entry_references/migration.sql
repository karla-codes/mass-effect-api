/*
  Warnings:

  - You are about to drop the column `categoryName` on the `Entry` table. All the data in the column will be lost.
  - You are about to drop the column `subjectName` on the `Entry` table. All the data in the column will be lost.
  - Added the required column `categoryId` to the `Entry` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subjectId` to the `Entry` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Entry" DROP CONSTRAINT "Entry_categoryName_fkey";

-- DropForeignKey
ALTER TABLE "Entry" DROP CONSTRAINT "Entry_subjectName_fkey";

-- DropIndex
DROP INDEX "Category_name_key";

-- DropIndex
DROP INDEX "Subject_name_key";

-- AlterTable
ALTER TABLE "Entry" DROP COLUMN "categoryName",
DROP COLUMN "subjectName",
ADD COLUMN     "categoryId" INTEGER NOT NULL,
ADD COLUMN     "subjectId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Entry" ADD CONSTRAINT "Entry_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Entry" ADD CONSTRAINT "Entry_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
