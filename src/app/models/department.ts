import { User } from './user';
export class Department {
    id: number;
    department_name: string;
    department_description: string;
    status: number;
    manager: number;
    departmentManager: User;
}