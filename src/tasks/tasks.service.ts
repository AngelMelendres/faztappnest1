import { Injectable } from '@nestjs/common';
import { Task, Taskstatus } from './task.entity';
import { error } from 'console';
import { TaskDto } from './dto/task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: '1',
      title: 'Task 1',
      description: 'Description 1',
      status: Taskstatus.DONE,
    },
    {
      id: '2',
      title: 'Task 2',
      description: 'Description 2',
      status: Taskstatus.DONE,
    },
  ];
  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(taskId: string): Task {
    const task = this.tasks.find((task) => task.id === taskId);
    if (!task) {
      throw new error(`Task with id ${taskId} not found`);
    }
    return task;
  }

  createTask(taskDto: TaskDto): Task {
    const newTask: Task = {
      id: Date.now().toString(),
      title: taskDto.title,
      description: taskDto.description,
      status: Taskstatus.OPEN,
    };
    this.tasks.push(newTask);
    return newTask;
  }

  updateTask(id: string, updateTask: TaskDto): Task {
    const taskIndex = this.tasks.findIndex((task) => task.id === id);
    if (taskIndex === -1) {
      throw new error(`Task with id ${id} not found`);
    }

    const updatedTask = {
      ...this.tasks[taskIndex],
      ...updateTask,
    };
    this.tasks[taskIndex] = updatedTask;
    return updatedTask;
  }

  deleteTask(id: string): void {
    const taskIndex = this.tasks.findIndex((task) => task.id === id);
    if (taskIndex === -1) {
      throw new error(`Task with id ${id} not found`);
    }
    this.tasks.splice(taskIndex, 1);
  }
}
