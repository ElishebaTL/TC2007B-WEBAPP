export interface Student {
  id: number;
  name: string;
  groupId: number;
  groupName: string;
  average: number;
  performance: 'Alto' | 'Medio' | 'Bajo';
}
