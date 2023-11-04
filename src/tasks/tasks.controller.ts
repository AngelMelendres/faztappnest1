import {
  Body,
  Param,
  Controller,
  Get,
  Post,
  Delete,
  Put,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskDto } from './dto/task.dto';
import { Task } from './task.entity';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}
  @Get()
  async getAllTasks(): Promise<Task[]> {
    return this.taskService.getAllTasks();
  }
  @Get(':id')
  async getTaskById(@Param('id') id: string): Promise<Task> {
    return this.taskService.getTaskById(id);
  }
  @Post()
  async createTask(@Body() newTask: TaskDto): Promise<Task> {
    return this.taskService.createTask(newTask);
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: string): Promise<void> {
    await this.taskService.deleteTask(id);
  }

  @Put(':id')
  async updateTask(
    @Param('id') id: string,
    @Body() updatedTask: TaskDto,
  ): Promise<Task> {
    return this.taskService.updateTask(id, updatedTask);
  }
}
