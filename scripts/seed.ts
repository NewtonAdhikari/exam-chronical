import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  const admin = await prisma.user.upsert({
    where: { email: 'admin@examchronicle.com' },
    update: {},
    create: { email: 'admin@examchronicle.com', name: 'Admin User', role: 'ADMIN' },
  })

  await prisma.user.upsert({
    where: { email: 'student@example.com' },
    update: {},
    create: { email: 'student@example.com', name: 'Rahul Sharma', role: 'USER', phone: '+91-9876543210', bio: 'Preparing for SSC CGL 2026' },
  })

  const sscCat = await prisma.jobCategory.upsert({ where: { slug: 'ssc' }, update: {}, create: { name: 'SSC', slug: 'ssc', description: 'Staff Selection Commission', icon: 'briefcase' } })
  const bankingCat = await prisma.jobCategory.upsert({ where: { slug: 'banking' }, update: {}, create: { name: 'Banking', slug: 'banking', description: 'Bank PO & Clerk Jobs', icon: 'landmark' } })
  const railwayCat = await prisma.jobCategory.upsert({ where: { slug: 'railway' }, update: {}, create: { name: 'Railway', slug: 'railway', description: 'Indian Railway Jobs', icon: 'train-front' } })
  const defenceCat = await prisma.jobCategory.upsert({ where: { slug: 'defence' }, update: {}, create: { name: 'Defence', slug: 'defence', description: 'Defence & Military Jobs', icon: 'shield' } })
  const teachingCat = await prisma.jobCategory.upsert({ where: { slug: 'teaching' }, update: {}, create: { name: 'Teaching', slug: 'teaching', description: 'Teaching & Education Jobs', icon: 'graduation-cap' } })
  const stateCat = await prisma.jobCategory.upsert({ where: { slug: 'state-govt' }, update: {}, create: { name: 'State Govt', slug: 'state-govt', description: 'State Government Jobs', icon: 'building-2' } })

  const sscExamCat = await prisma.examCategory.upsert({ where: { slug: 'ssc-exams' }, update: {}, create: { name: 'SSC Exams', slug: 'ssc-exams', description: 'All SSC Examinations', icon: 'file-text' } })
  const bankingExamCat = await prisma.examCategory.upsert({ where: { slug: 'banking-exams' }, update: {}, create: { name: 'Banking Exams', slug: 'banking-exams', description: 'IBPS, SBI, RBI Exams', icon: 'landmark' } })
  const railwayExamCat = await prisma.examCategory.upsert({ where: { slug: 'railway-exams' }, update: {}, create: { name: 'Railway Exams', slug: 'railway-exams', description: 'RRB & RRC Examinations', icon: 'train-front' } })
  const upscExamCat = await prisma.examCategory.upsert({ where: { slug: 'upsc-exams' }, update: {}, create: { name: 'UPSC Exams', slug: 'upsc-exams', description: 'Civil Services Examination', icon: 'scroll' } })
  const defenceExamCat = await prisma.examCategory.upsert({ where: { slug: 'defence-exams' }, update: {}, create: { name: 'Defence Exams', slug: 'defence-exams', description: 'CDS, NDA, AFCAT', icon: 'shield' } })
  const teachingExamCat = await prisma.examCategory.upsert({ where: { slug: 'teaching-exams' }, update: {}, create: { name: 'Teaching Exams', slug: 'teaching-exams', description: 'CTET, KVS, NVS', icon: 'graduation-cap' } })

  const jobsData = [
    { title: 'SSC CGL 2026 - Combined Graduate Level Examination', slug: 'ssc-cgl-2026', department: 'Staff Selection Commission', vacancies: 14582, location: 'All India', qualification: 'Graduation from recognized university', ageLimit: '18-32 years', salary: 'Pay Level 4-7 (₹25,500 - ₹81,100)', applicationFee: '₹100 (Free for SC/ST)', selectionProcess: 'Tier-I, Tier-II, Tier-III, Tier-IV', officialWebsite: 'https://ssc.nic.in', applyLink: 'https://ssc.nic.in', status: 'PUBLISHED', isFeatured: true, isUrgent: true, publishedAt: new Date(), categoryId: sscCat.id, authorId: admin.id },
    { title: 'IBPS PO 2026 - Probationary Officer Recruitment', slug: 'ibps-po-2026', department: 'Institute of Banking Personnel Selection', vacancies: 4455, location: 'All India', qualification: 'Graduation in any discipline', ageLimit: '20-30 years', salary: '₹36,000 - ₹63,840', applicationFee: '₹850 (SC/ST: ₹175)', selectionProcess: 'Prelims, Mains, Interview', officialWebsite: 'https://ibps.in', applyLink: 'https://ibps.in', status: 'PUBLISHED', isFeatured: true, isUrgent: false, publishedAt: new Date(), categoryId: bankingCat.id, authorId: admin.id },
    { title: 'RRB NTPC 2026 - Non-Technical Popular Categories', slug: 'rrb-ntpc-2026', department: 'Railway Recruitment Board', vacancies: 35208, location: 'All India', qualification: '12th Pass / Graduate', ageLimit: '18-33 years', salary: 'Level 2-5 (₹19,900 - ₹29,200)', applicationFee: '₹500 (SC/ST: ₹250)', selectionProcess: 'CBT-1, CBT-2, Skill Test, DV', officialWebsite: 'https://rrcb.gov.in', status: 'PUBLISHED', isFeatured: true, isUrgent: false, publishedAt: new Date(), categoryId: railwayCat.id, authorId: admin.id },
    { title: 'Indian Army Agniveer Recruitment 2026', slug: 'indian-army-agniveer-2026', department: 'Indian Army', vacancies: 40000, location: 'All India', qualification: '10th / 12th Pass', ageLimit: '17.5-21 years', salary: '₹30,000 per month', applicationFee: '₹250', selectionProcess: 'CEE, Physical Fitness Test, Medical', officialWebsite: 'https://joinindianarmy.nic.in', status: 'PUBLISHED', isFeatured: false, isUrgent: true, publishedAt: new Date(), categoryId: defenceCat.id, authorId: admin.id },
    { title: 'CTET 2026 - Central Teacher Eligibility Test', slug: 'ctet-2026', department: 'CBSE', vacancies: 0, location: 'All India', qualification: '12th + Diploma / B.Ed', ageLimit: 'Min 18 years', salary: 'Eligibility Test', applicationFee: '₹1000 (Gen), ₹500 (SC/ST)', selectionProcess: 'Written Exam (Paper I & II)', officialWebsite: 'https://ctet.nic.in', status: 'PUBLISHED', isFeatured: false, isUrgent: false, publishedAt: new Date(), categoryId: teachingCat.id, authorId: admin.id },
    { title: 'UP Police Constable Recruitment 2026', slug: 'up-police-constable-2026', department: 'UP Police Recruitment Board', vacancies: 60244, location: 'Uttar Pradesh', qualification: '12th Pass', ageLimit: '18-25 years', salary: '₹21,700 - ₹69,100', applicationFee: '₹400 (SC/ST: ₹200)', selectionProcess: 'Written, PET, DV, Medical', officialWebsite: 'https://uppbpb.gov.in', status: 'PUBLISHED', isFeatured: false, isUrgent: true, publishedAt: new Date(), categoryId: stateCat.id, authorId: admin.id },
  ]

  for (const data of jobsData) { await prisma.job.upsert({ where: { slug: data.slug }, update: data, create: data }) }

  const examsData = [
    { title: 'SSC CGL', slug: 'ssc-cgl', description: 'Combined Graduate Level Examination for Group B and C posts.', eligibility: 'Indian citizen, Graduation', ageLimit: '18-32 years', educationalQualification: 'Bachelor\'s Degree', selectionProcess: 'Tier-I (CBT), Tier-II (CBT), Tier-III (Descriptive), Tier-IV (Skill Test)', examPattern: 'Tier-I: 100 Q, 200 Marks, 60 min', syllabus: 'General Intelligence, General Awareness, Quantitative Aptitude, English', salary: 'Pay Level 4-7 (₹25,500 - ₹81,100)', officialWebsite: 'https://ssc.nic.in', status: 'PUBLISHED', isFeatured: true, publishedAt: new Date(), categoryId: sscExamCat.id, authorId: admin.id },
    { title: 'IBPS PO', slug: 'ibps-po', description: 'IBPS Probationary Officer exam for public sector banks.', eligibility: 'Indian citizen, Graduation', ageLimit: '20-30 years', educationalQualification: 'Graduation in any discipline', selectionProcess: 'Prelims, Mains, Interview', examPattern: 'Prelims: 100 Q, 100 Marks | Mains: 155 Q, 200 Marks', syllabus: 'English, Reasoning, Quant, General Awareness, Computer', salary: '₹36,000 - ₹63,840 + Allowances', officialWebsite: 'https://ibps.in', status: 'PUBLISHED', isFeatured: true, publishedAt: new Date(), categoryId: bankingExamCat.id, authorId: admin.id },
    { title: 'UPSC CSE', slug: 'upsc-cse', description: 'Civil Services Examination for IAS, IPS, IFS.', eligibility: 'Indian citizen, Graduate', ageLimit: '21-32 years', educationalQualification: 'Bachelor\'s Degree', selectionProcess: 'Prelims, Mains (9 Papers), Interview', examPattern: 'Prelims: 400 | Mains: 1750 | Interview: 275 | Total: 2025', syllabus: 'History, Geography, Polity, Economy, Science, Environment, Ethics, Essay', salary: '₹56,100 - ₹2,25,000', officialWebsite: 'https://upsc.gov.in', status: 'PUBLISHED', isFeatured: true, publishedAt: new Date(), categoryId: upscExamCat.id, authorId: admin.id },
    { title: 'RRB NTPC', slug: 'rrb-ntpc', description: 'Non-Technical Popular Categories exam for Indian Railways.', eligibility: 'Indian citizen', ageLimit: '18-33 years', educationalQualification: '12th Pass / Graduate', selectionProcess: 'CBT-1, CBT-2, Skill Test, DV, Medical', examPattern: 'CBT-1: 100 Q, 90 min | CBT-2: 120 Q, 90 min', syllabus: 'Maths, Reasoning, General Awareness, General Science', salary: 'Level 2-5 (₹19,900 - ₹29,200)', officialWebsite: 'https://rrcb.gov.in', status: 'PUBLISHED', isFeatured: false, publishedAt: new Date(), categoryId: railwayExamCat.id, authorId: admin.id },
    { title: 'CDS', slug: 'cds', description: 'Combined Defence Services for IMA, OTA, Naval & Air Force Academy.', eligibility: 'Unmarried male Indian citizen', ageLimit: 'IMA: 19-24, OTA: 19-25', educationalQualification: 'Graduation / B.E./B.Tech', selectionProcess: 'Written Exam, SSB Interview, Medical', examPattern: '3 Papers (English, GK, Maths) - 100 Marks each', syllabus: 'English, General Knowledge, Elementary Mathematics', salary: '₹56,100 (Lieutenant Level 10)', officialWebsite: 'https://upsc.gov.in', status: 'PUBLISHED', isFeatured: false, publishedAt: new Date(), categoryId: defenceExamCat.id, authorId: admin.id },
    { title: 'CTET', slug: 'ctet', description: 'Central Teacher Eligibility Test by CBSE.', eligibility: 'Indian citizen', ageLimit: 'Min 18 years', educationalQualification: '12th + Diploma or Graduation + B.Ed', selectionProcess: 'Paper I (Class I-V) & Paper II (Class VI-VIII)', examPattern: '150 Q, 150 Marks, 150 min per paper', syllabus: 'Child Development, Language I & II, Maths, EVS', salary: 'Eligibility Test', officialWebsite: 'https://ctet.nic.in', status: 'PUBLISHED', isFeatured: false, publishedAt: new Date(), categoryId: teachingExamCat.id, authorId: admin.id },
  ]

  for (const data of examsData) { await prisma.exam.upsert({ where: { slug: data.slug }, update: data, create: data }) }

  const caData = [
    { title: 'India Launches Chandrayaan-4 Mission Planning', slug: 'chandrayaan-4-planning', content: 'ISRO has commenced planning for Chandrayaan-4, aiming to bring lunar samples back to Earth.', date: new Date('2026-08-04'), type: 'DAILY', category: 'Science & Tech', authorId: admin.id },
    { title: 'GDP Growth Rate Reaches 7.8% in Q1 2026-27', slug: 'gdp-growth-q1-2026', content: 'India\'s GDP grew at 7.8% in Q1 FY 2026-27, maintaining fastest-growing major economy status.', date: new Date('2026-08-03'), type: 'DAILY', category: 'Economy', authorId: admin.id },
    { title: 'New National Education Policy Implementation Update', slug: 'nep-implementation-update', content: 'Over 85% of states have adopted the new NEP framework with full implementation targeted by 2027.', date: new Date('2026-08-02'), type: 'DAILY', category: 'Education', authorId: admin.id },
    { title: 'Digital India Programme 2.0 Launched', slug: 'digital-india-2', content: 'Government launched Digital India 2.0 focusing on AI, blockchain, cybersecurity with ₹50,000 crore investment.', date: new Date('2026-08-01'), type: 'DAILY', category: 'Technology', authorId: admin.id },
    { title: 'Weekly Current Affairs Digest: Jul 28 - Aug 3', slug: 'weekly-digest-jul-aug-2026', content: 'Comprehensive weekly summary of important national and international events.', date: new Date('2026-08-03'), type: 'WEEKLY', category: 'Weekly Digest', authorId: admin.id },
    { title: 'Monthly Current Affairs - July 2026', slug: 'monthly-ca-july-2026', content: 'Complete monthly compilation for July 2026.', date: new Date('2026-07-31'), type: 'MONTHLY', category: 'Monthly Digest', authorId: admin.id },
  ]

  for (const data of caData) { await prisma.currentAffair.upsert({ where: { slug: data.slug }, update: data, create: data }) }

  const materialsData = [
    { title: 'SSC CGL Tier-I Complete Study Notes', slug: 'ssc-cgl-tier1-notes', description: 'Comprehensive notes for all four sections of SSC CGL Tier-I.', type: 'NOTES', category: 'SSC', examName: 'SSC CGL', downloadCount: 15420, authorId: admin.id },
    { title: 'IBPS PO Reasoning Previous Year Papers', slug: 'ibps-po-reasoning-pyp', description: 'Reasoning questions from IBPS PO 2020-2025.', type: 'PREVIOUS_PAPER', category: 'Banking', examName: 'IBPS PO', downloadCount: 8932, authorId: admin.id },
    { title: 'Current Affairs 2026 Monthly PDF Bundle', slug: 'ca-2026-monthly-pdf', description: 'All monthly current affairs PDFs for 2026.', type: 'PDF', category: 'Current Affairs', examName: 'All Exams', downloadCount: 23456, authorId: admin.id },
    { title: 'Quantitative Aptitude Short Tricks', slug: 'quant-short-tricks', description: 'Quick calculation methods for competitive exams.', type: 'SHORT_NOTES', category: 'Mathematics', examName: 'All Exams', downloadCount: 19876, authorId: admin.id },
    { title: 'English Grammar Rules', slug: 'english-grammar-rules', description: 'Essential grammar rules with examples.', type: 'NOTES', category: 'English', examName: 'All Exams', downloadCount: 12450, authorId: admin.id },
    { title: 'General Science Practice Set - 500 Q', slug: 'general-science-practice', description: '500 practice questions on Physics, Chemistry, Biology.', type: 'PRACTICE_SET', category: 'General Science', examName: 'SSC CGL', downloadCount: 7890, authorId: admin.id },
  ]

  for (const data of materialsData) { await prisma.studyMaterial.upsert({ where: { slug: data.slug }, update: data, create: data }) }

  const mock1 = await prisma.mockTest.upsert({ where: { slug: 'ssc-cgl-mock-1' }, update: {}, create: { title: 'SSC CGL Tier-I Mock Test 1', slug: 'ssc-cgl-mock-1', description: 'Full-length mock test for SSC CGL Tier-I.', examCategory: 'SSC CGL', totalQuestions: 10, totalMarks: 20, negativeMarking: true, negativeMarkValue: 0.5, duration: 60, difficulty: 'MEDIUM', isFree: true, authorId: admin.id } })
  await prisma.mockTest.upsert({ where: { slug: 'ibps-po-mock-1' }, update: {}, create: { title: 'IBPS PO Prelims Mock Test 1', slug: 'ibps-po-mock-1', description: 'Full-length mock test for IBPS PO Prelims.', examCategory: 'IBPS PO', totalQuestions: 100, totalMarks: 100, negativeMarking: true, negativeMarkValue: 0.25, duration: 60, difficulty: 'MEDIUM', isFree: true, authorId: admin.id } })
  await prisma.mockTest.upsert({ where: { slug: 'rrb-ntpc-mock-1' }, update: {}, create: { title: 'RRB NTPC CBT-1 Mock Test 1', slug: 'rrb-ntpc-mock-1', description: 'Full-length mock test for RRB NTPC CBT-1.', examCategory: 'RRB NTPC', totalQuestions: 100, totalMarks: 100, negativeMarking: true, negativeMarkValue: 0.33, duration: 90, difficulty: 'EASY', isFree: true, authorId: admin.id } })
  await prisma.mockTest.upsert({ where: { slug: 'upsc-cse-prelims-mock-1' }, update: {}, create: { title: 'UPSC CSE Prelims GS Mock Test 1', slug: 'upsc-cse-prelims-mock-1', description: 'General Studies mock test for UPSC CSE Prelims.', examCategory: 'UPSC CSE', totalQuestions: 100, totalMarks: 200, negativeMarking: true, negativeMarkValue: 0.67, duration: 120, difficulty: 'HARD', isFree: false, authorId: admin.id } })

  const questionsData = [
    { mockTestId: mock1.id, text: 'If the ratio of A to B is 3:5 and B to C is 5:7, what is A:C?', optionA: '3:7', optionB: '3:5', optionC: '5:7', optionD: '7:3', correctAnswer: 'A', explanation: 'A:B=3:5, B:C=5:7, so A:C=3:7', marks: 2, negativeMarks: 0.5, order: 1 },
    { mockTestId: mock1.id, text: 'Who was the first Governor-General of free India?', optionA: 'Lord Mountbatten', optionB: 'C. Rajagopalachari', optionC: 'Dr. Rajendra Prasad', optionD: 'Jawaharlal Nehru', correctAnswer: 'A', explanation: 'Lord Mountbatten was the first Governor-General of independent India.', marks: 2, negativeMarks: 0.5, order: 2 },
    { mockTestId: mock1.id, text: 'Find the missing number: 2, 6, 12, 20, 30, ?', optionA: '40', optionB: '42', optionC: '44', optionD: '38', correctAnswer: 'B', explanation: 'Pattern: n(n+1). 6×7=42', marks: 2, negativeMarks: 0.5, order: 3 },
    { mockTestId: mock1.id, text: 'Choose the synonym of "ELOQUENT".', optionA: 'Fluent', optionB: 'Silent', optionC: 'Rude', optionD: 'Dull', correctAnswer: 'A', explanation: 'Eloquent means fluent or persuasive.', marks: 2, negativeMarks: 0.5, order: 4 },
    { mockTestId: mock1.id, text: 'Right to Education is under which Article?', optionA: 'Article 19', optionB: 'Article 21', optionC: 'Article 21A', optionD: 'Article 14', correctAnswer: 'C', explanation: 'Article 21A provides Right to Education.', marks: 2, negativeMarks: 0.5, order: 5 },
    { mockTestId: mock1.id, text: 'A train 150m long passes a pole in 15 seconds. Speed?', optionA: '30 km/h', optionB: '36 km/h', optionC: '40 km/h', optionD: '45 km/h', correctAnswer: 'B', explanation: 'Speed = 150/15 = 10 m/s = 36 km/h', marks: 2, negativeMarks: 0.5, order: 6 },
    { mockTestId: mock1.id, text: 'Which vitamin is Ascorbic Acid?', optionA: 'Vitamin A', optionB: 'Vitamin B', optionC: 'Vitamin C', optionD: 'Vitamin D', correctAnswer: 'C', explanation: 'Vitamin C is Ascorbic Acid.', marks: 2, negativeMarks: 0.5, order: 7 },
    { mockTestId: mock1.id, text: 'The pH of pure water is:', optionA: '0', optionB: '7', optionC: '14', optionD: '1', correctAnswer: 'B', explanation: 'Pure water has neutral pH of 7.', marks: 2, negativeMarks: 0.5, order: 8 },
    { mockTestId: mock1.id, text: 'Who wrote "Discovery of India"?', optionA: 'Mahatma Gandhi', optionB: 'Jawaharlal Nehru', optionC: 'Sardar Patel', optionD: 'Subhash Chandra Bose', correctAnswer: 'B', explanation: 'Jawaharlal Nehru wrote "Discovery of India".', marks: 2, negativeMarks: 0.5, order: 9 },
    { mockTestId: mock1.id, text: 'What is the chemical formula of common salt?', optionA: 'NaCl', optionB: 'KCl', optionC: 'NaOH', optionD: 'HCl', correctAnswer: 'A', explanation: 'Common salt is Sodium Chloride (NaCl).', marks: 2, negativeMarks: 0.5, order: 10 },
  ]

  for (const q of questionsData) { await prisma.question.create({ data: q }) }

  const resultsData = [
    { title: 'SSC CGL 2025 Tier-I Result', slug: 'ssc-cgl-2025-tier1-result', examName: 'SSC CGL 2025', resultDate: new Date('2026-07-15'), resultUrl: '#', status: 'PUBLISHED' },
    { title: 'IBPS PO 2025 Mains Result', slug: 'ibps-po-2025-mains-result', examName: 'IBPS PO 2025', resultDate: new Date('2026-06-20'), resultUrl: '#', status: 'PUBLISHED' },
    { title: 'RRB NTPC 2025 CBT-2 Result', slug: 'rrb-ntpc-2025-cbt2-result', examName: 'RRB NTPC 2025', resultDate: new Date('2026-05-10'), resultUrl: '#', status: 'PUBLISHED' },
  ]
  for (const data of resultsData) { await prisma.result.upsert({ where: { slug: data.slug }, update: data, create: data }) }

  const admitCardsData = [
    { title: 'SSC CGL 2026 Tier-I Admit Card', slug: 'ssc-cgl-2026-tier1-admit', examName: 'SSC CGL 2026', releaseDate: new Date('2026-08-20'), downloadUrl: '#', status: 'PUBLISHED' },
    { title: 'IBPS PO 2026 Prelims Admit Card', slug: 'ibps-po-2026-prelims-admit', examName: 'IBPS PO 2026', releaseDate: new Date('2026-09-01'), downloadUrl: '#', status: 'PUBLISHED' },
  ]
  for (const data of admitCardsData) { await prisma.admitCard.upsert({ where: { slug: data.slug }, update: data, create: data }) }

  const answerKeysData = [
    { title: 'SSC CGL 2025 Tier-I Answer Key', slug: 'ssc-cgl-2025-tier1-key', examName: 'SSC CGL 2025', releaseDate: new Date('2026-06-01'), downloadUrl: '#', status: 'PUBLISHED' },
    { title: 'IBPS PO 2025 Prelims Answer Key', slug: 'ibps-po-2025-prelims-key', examName: 'IBPS PO 2025', releaseDate: new Date('2026-05-15'), downloadUrl: '#', status: 'PUBLISHED' },
  ]
  for (const data of answerKeysData) { await prisma.answerKey.upsert({ where: { slug: data.slug }, update: data, create: data }) }

  const postsData = [
    { title: 'SSC CGL 2026 Preparation Strategy - Complete Guide', slug: 'ssc-cgl-2026-preparation-strategy', excerpt: 'Comprehensive preparation strategy for SSC CGL 2026 covering study plans and tips.', content: 'Preparing for SSC CGL 2026 requires a well-structured approach. Focus on building strong fundamentals in Quantitative Aptitude and Reasoning. For General Awareness, maintain daily current affairs habit. English section demands consistent grammar practice. Create a realistic study schedule with 3-4 hours daily. Take weekly mock tests to track progress. Solve at least 5 years of previous papers. Remember, consistency beats intensity.', category: 'Preparation Tips', status: 'PUBLISHED', isFeatured: true, publishedAt: new Date(), authorId: admin.id },
    { title: 'Top 10 Tips to Crack Banking Exams in First Attempt', slug: 'tips-crack-banking-exams', excerpt: 'Expert tips to clear IBPS PO, SBI PO in your first attempt.', content: 'Banking exams demand speed and accuracy. Master approximation in Quant, develop reading speed for English, practice puzzles daily, stay updated with banking awareness, take sectional tests, learn keyboard shortcuts, focus on high-weightage topics, maintain a formula notebook, analyze mock tests, and stay positive.', category: 'Banking', status: 'PUBLISHED', isFeatured: true, publishedAt: new Date(), authorId: admin.id },
    { title: 'How to Stay Motivated During Exam Preparation', slug: 'stay-motivated-exam-prep', excerpt: 'Strategies to maintain motivation during long preparation journeys.', content: 'Set small daily goals, create a dedicated study space, use Pomodoro technique, join study groups, visualize success, take proper breaks, track progress, remind yourself why you started, read topper stories, and remember every day brings you closer to your goal.', category: 'Motivation', status: 'PUBLISHED', isFeatured: false, publishedAt: new Date(), authorId: admin.id },
  ]
  for (const data of postsData) { await prisma.post.upsert({ where: { slug: data.slug }, update: data, create: data }) }

  console.log('✅ Seeding complete!')
}

main().catch((e) => { console.error(e); process.exit(1) }).finally(async () => { await prisma.$disconnect() })
