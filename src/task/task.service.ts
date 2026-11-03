import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './task.interface';
@Injectable()
export class TaskService {
  private tasks: Task[] = [];
  private idCounter = 1;
  // GET ALL
  findAll(): Task[] {
    return this.tasks;
  }
  // Get one
  findTaskById(id: number): Task {
    const task = this.tasks.find((task) => task.id === id);
    if (!task) {
      throw new NotFoundException('Task not found');
    }
    return task;
  }
  create(data: { title: string; description: string }): Task {
    const task: Task = {
      id:this.idCounter++;
      title:data.title
      d
    };
  }
}
