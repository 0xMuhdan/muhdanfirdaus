'use client';

import SemesterArticle from '@/components/SemesterArticle';
import { semesterContent } from '@/lib/data';

export default function Semester1Page() {
  return <SemesterArticle semesterNumber={1} data={semesterContent[1]} />;
}