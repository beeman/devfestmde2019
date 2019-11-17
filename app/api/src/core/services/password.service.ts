import { Injectable } from '@nestjs/common';
import { hash, compare } from 'bcrypt';
import { CoreConfig } from '../core.config';

@Injectable()
export class PasswordService {
  validatePassword(password: string, hashedPassword: string): Promise<boolean> {
    return compare(password, hashedPassword);
  }

  hashPassword(password: string): Promise<string> {
    return hash(password, CoreConfig.bcryptSaltRounds);
  }
}
