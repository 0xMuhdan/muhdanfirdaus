'use client';

import SemesterArticle from '@/components/SemesterArticle';
import { semesterContent } from '@/lib/data';

export default function Semester4Page() {
  return <SemesterArticle semesterNumber={4} data={semesterContent[4]} />;
}