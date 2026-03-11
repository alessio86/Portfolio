import { Injectable } from '@angular/core';
import { db } from '../db/database';
import { User, DEFAULT_USER_SETTINGS } from '../models/user.model';
import { v4 as uuidv4 } from 'uuid';
import * as bcrypt from 'bcryptjs';

@Injectable({ providedIn: 'root' })
export class UserRepository {

  async findByUsername(username: string): Promise<User | undefined> {
    return db.users.where('username').equalsIgnoreCase(username).first();
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return db.users.where('email').equalsIgnoreCase(email).first();
  }

  async findById(id: string): Promise<User | undefined> {
    return db.users.get(id);
  }

  async create(username: string, email: string, password: string, displayName: string): Promise<User> {
    const salt = bcrypt.genSaltSync(10);
    const passwordHash = bcrypt.hashSync(password, salt);
    const now = new Date();

    const user: User = {
      id: uuidv4(),
      username: username.toLowerCase().trim(),
      email: email.toLowerCase().trim(),
      passwordHash,
      displayName: displayName.trim(),
      createdAt: now,
      updatedAt: now,
      settings: { ...DEFAULT_USER_SETTINGS }
    };

    await db.users.add(user);
    return user;
  }

  async verifyPassword(user: User, password: string): Promise<boolean> {
    return bcrypt.compareSync(password, user.passwordHash);
  }

  async updateSettings(userId: string, settings: Partial<User['settings']>): Promise<void> {
    const user = await this.findById(userId);
    if (!user) throw new Error('User not found');

    await db.users.update(userId, {
      settings: { ...user.settings, ...settings },
      updatedAt: new Date()
    });
  }

  async updateProfile(userId: string, data: { displayName?: string; email?: string }): Promise<void> {
    await db.users.update(userId, {
      ...data,
      updatedAt: new Date()
    });
  }

  async changePassword(userId: string, newPassword: string): Promise<void> {
    const salt = bcrypt.genSaltSync(10);
    const passwordHash = bcrypt.hashSync(newPassword, salt);
    await db.users.update(userId, {
      passwordHash,
      updatedAt: new Date()
    });
  }
}
