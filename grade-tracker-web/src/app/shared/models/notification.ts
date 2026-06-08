export interface Notification {
  id: number;
  title: string;
  message: string;
  date: string;
  read: boolean;
  type: 'boleta' | 'comentario' | 'recordatorio';
}
