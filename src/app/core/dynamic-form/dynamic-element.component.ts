import { Component, Input, OnInit } from '@angular/core';
import { FormGroup }        from '@angular/forms';
import { ExpenseBase }     from '../../models/form-builder/expense-base';
@Component({
  selector: 'df-question',
  templateUrl: './dynamic-element.component.html'
})
export class DynamicElementComponent implements OnInit {
  @Input() formelement: ExpenseBase<any>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.formelement.field_column_name].valid; }
  ngOnInit() {
    
  }
  deleteElement() {
    
  }
}
