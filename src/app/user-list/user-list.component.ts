import { Component } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-user-list',
  imports: [FormsModule, NgIf, NgFor],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  users: User[] = [];
  filteredUsers: User[] = [];
  searchTerm: string = '';
  selectedStatus: string = 'all';
  selectedUser: User | null = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users = this.userService.getUsers();
    this.filteredUsers = [...this.users];
  }

  onSearch(): void {
    this.filterUsers();
  }

  onStatusChange(): void {
    this.filterUsers();
  }

  filterUsers(): void {
    this.filteredUsers = this.users.filter((user) => {
      const matchesSearch = user.name
        .toLowerCase()
        .includes(this.searchTerm.toLowerCase());
      let matchesStatus = true;

      if (this.selectedStatus === 'active') {
        matchesStatus = user.active;
      } else if (this.selectedStatus === 'inactive') {
        matchesStatus = !user.active;
      }

      return matchesSearch && matchesStatus;
    });
  }

  selectUser(user: User): void {
    this.selectedUser = user;
  }
}
