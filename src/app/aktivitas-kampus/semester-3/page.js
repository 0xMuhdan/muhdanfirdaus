'use client';

import SemesterArticle from '@/components/SemesterArticle';
import { semesterContent } from '@/lib/data';

export default function Semester3Page() {
  return <SemesterArticle semesterNumber={3} data={semesterContent[3]} />;
}