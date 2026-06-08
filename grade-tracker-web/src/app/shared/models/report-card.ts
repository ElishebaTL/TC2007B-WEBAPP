import { Grade } from './grade';

export interface ReportCard {
  id: number;
  studentId: number;
  studentName: string;
  groupName: string;
  trimester: string;
  month: string;
  average: number;
  signed: boolean;
  grades: Grade[];
  teacherComment?: string;
}
