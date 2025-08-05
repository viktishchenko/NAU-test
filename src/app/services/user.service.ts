import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [
    { id: 1, name: 'Иван Иванов', email: 'ivan@example.com', active: true },
    { id: 2, name: 'Петр Петров', email: 'petr@example.com', active: false },
    {
      id: 3,
      name: 'Сергей Сергеев',
      email: 'sergey@example.com',
      active: true,
    },
    { id: 4, name: 'Анна Сидорова', email: 'anna@example.com', active: false },
    {
      id: 5,
      name: 'Мария Кузнецова',
      email: 'maria@example.com',
      active: true,
    },
    {
      id: 6,
      name: 'Алексей Алексеев',
      email: 'alex@example.com',
      active: true,
    },
  ];

  getUsers(): User[] {
    return this.users;
  }
}
