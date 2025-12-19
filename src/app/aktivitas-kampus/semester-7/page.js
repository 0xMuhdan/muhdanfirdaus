'use client';

import SemesterArticle from '@/components/SemesterArticle';
import { semesterContent } from '@/lib/data';

export default function Semester7Page() {
  return <SemesterArticle semesterNumber={7} data={semesterContent[7]} />;
}