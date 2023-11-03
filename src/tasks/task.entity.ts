enum Taskstatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}
class Task {
  id: string;
  title: string;
  description: string;
  status: Taskstatus;
  created_at: string;
  updated_at: string;
}

const tast = new Task();
