import { IsString, IsNotEmpty } from 'class-validator';
import { Taskstatus } from '../task.entity';

export class TaskDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}

export class UpdateTaskDto {
  title?: string;
  description?: string;
  status?: Taskstatus;
}
