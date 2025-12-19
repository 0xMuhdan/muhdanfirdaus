'use client';

import SemesterArticle from '@/components/SemesterArticle';
import { semesterContent } from '@/lib/data';

export default function Semester6Page() {
  return <SemesterArticle semesterNumber={6} data={semesterContent[6]} />;
}