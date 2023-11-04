export enum Taskstatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}
export class Task {
  id: string;
  title: string;
  description: string;
  status: Taskstatus;
}

