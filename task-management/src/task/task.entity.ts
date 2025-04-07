import { v4 as uuidv4 } from 'uuid';

export class Task {
  id: string;
  title: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(title: string, description?: string) {
    this.id = uuidv4();
    this.title = title;
    this.description = description;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}