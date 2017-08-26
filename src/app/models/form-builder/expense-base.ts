export class ExpenseBase<T>{
  id: number;
  value: T;
  field_column_name: string;
  field_name: string;
  field_is_required: boolean;
  sort_order: number;
  field_type: string;
  show_on_expense: boolean;
  show_on_distance: boolean;
	show_on_time:  boolean;
  is_delete_allowed: boolean;
  field_options: string[];
  constructor(options: {
      value?: T,
      field_column_name?: string,
      field_name?: string,
      field_is_required?: boolean,
      sort_order?: number,
      field_type?: string
    } = {}) {
    this.value = options.value;
    this.field_column_name = options.field_column_name || '';
    this.field_name = options.field_name || '';
    this.field_is_required = !!options.field_is_required;
    this.sort_order = options.sort_order === undefined ? 1 : options.sort_order;
    this.field_type = options.field_type || '';
  }
}