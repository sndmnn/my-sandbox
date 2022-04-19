export type ToastType = 'success' | 'error' | 'info';

export default interface ToastMessage {
  id: string;
  type?: ToastType;
  title: string;
  description?: string;
}
