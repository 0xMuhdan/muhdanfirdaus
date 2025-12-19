'use client';

import SemesterArticle from '@/components/SemesterArticle';
import { semesterContent } from '@/lib/data';

export default function Semester8Page() {
  return <SemesterArticle semesterNumber={8} data={semesterContent[8]} />;
}