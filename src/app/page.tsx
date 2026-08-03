import { db } from "@/lib/db"
import { HomePage } from "@/components/home-page"

export const revalidate = 300

async function getData() {
  const [jobs, exams, currentAffairs, studyMaterials, mockTests, results, admitCards, answerKeys, posts, examCategories, jobCategories] = await Promise.all([
    db.job.findMany({ where: { status: "PUBLISHED" }, orderBy: { createdAt: "desc" }, take: 8, include: { category: true } }),
    db.exam.findMany({ where: { status: "PUBLISHED" }, orderBy: { createdAt: "desc" }, take: 8, include: { category: true } }),
    db.currentAffair.findMany({ where: { status: "PUBLISHED" }, orderBy: { date: "desc" }, take: 6 }),
    db.studyMaterial.findMany({ where: { status: "PUBLISHED" }, orderBy: { downloadCount: "desc" }, take: 6 }),
    db.mockTest.findMany({ where: { status: "PUBLISHED" }, orderBy: { createdAt: "desc" }, take: 4 }),
    db.result.findMany({ where: { status: "PUBLISHED" }, orderBy: { resultDate: "desc" }, take: 5 }),
    db.admitCard.findMany({ where: { status: "PUBLISHED" }, orderBy: { releaseDate: "desc" }, take: 5 }),
    db.answerKey.findMany({ where: { status: "PUBLISHED" }, orderBy: { releaseDate: "desc" }, take: 5 }),
    db.post.findMany({ where: { status: "PUBLISHED" }, orderBy: { publishedAt: "desc" }, take: 4 }),
    db.examCategory.findMany(),
    db.jobCategory.findMany(),
  ])

  return { jobs, exams, currentAffairs, studyMaterials, mockTests, results, admitCards, answerKeys, posts, examCategories, jobCategories }
}

export default async function Page() {
  const data = await getData()

  return <HomePage data={data} />
}
