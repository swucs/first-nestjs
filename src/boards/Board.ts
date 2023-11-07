import { BoardStatus } from './BoardStatus';

export interface Board {
  id: string;
  title: string;
  description: string;
  status: BoardStatus;
}
