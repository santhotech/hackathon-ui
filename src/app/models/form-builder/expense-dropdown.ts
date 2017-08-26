import { ExpenseBase } from './expense-base';

export class ExpenseDropdown extends ExpenseBase<string> {
  controlType = 'dropdown';
  options: {key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}