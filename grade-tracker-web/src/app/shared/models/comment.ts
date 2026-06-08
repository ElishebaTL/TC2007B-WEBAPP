export interface Comment {
  id: number;
  studentName: string;
  parentName: string;
  subject: string;
  message: string;
  date: string;
  status: 'Pendiente' | 'Respondido';
}
