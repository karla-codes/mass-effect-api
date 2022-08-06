/*
  Warnings:

  - You are about to drop the column `categoryName` on the `Subject` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Subject" DROP CONSTRAINT "Subject_categoryName_fkey";

-- AlterTable
ALTER TABLE "Subject" DROP COLUMN "categoryName";

-- CreateTable
CREATE TABLE "_CategoryToSubject" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToSubject_AB_unique" ON "_CategoryToSubject"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToSubject_B_index" ON "_CategoryToSubject"("B");

-- AddForeignKey
ALTER TABLE "_CategoryToSubject" ADD CONSTRAINT "_CategoryToSubject_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToSubject" ADD CONSTRAINT "_CategoryToSubject_B_fkey" FOREIGN KEY ("B") REFERENCES "Subject"("id") ON DELETE CASCADE ON UPDATE CASCADE;
