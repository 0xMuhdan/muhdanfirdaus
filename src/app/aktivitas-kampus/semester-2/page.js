'use client';

import SemesterArticle from '@/components/SemesterArticle';
import { semesterContent } from '@/lib/data';

export default function Semester2Page() {
  return <SemesterArticle semesterNumber={2} data={semesterContent[2]} />;
}