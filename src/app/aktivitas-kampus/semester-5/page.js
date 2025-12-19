'use client';

import SemesterArticle from '@/components/SemesterArticle';
import { semesterContent } from '@/lib/data';

export default function Semester5Page() {
  return <SemesterArticle semesterNumber={5} data={semesterContent[5]} />;
}