import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormBuilder } from '@ngx-formly/core';

@Component({
  selector: 'web-form',
  template: `
    <form [formGroup]="form" novalidate (ngSubmit)="submit()">
      <formly-form
        [model]="model"
        [fields]="fields"
        [form]="form"
        [options]="options"
      >
      </formly-form>
      <button
        type="submit"
        style="display: none;"
        [disabled]="form.touched && !form.valid"
      >
        submit
      </button>
    </form>
  `,
})
export class WebFormComponent implements OnInit {
  @Input() public fields: FormlyFieldConfig[];
  @Input() public form = new FormGroup({});
  @Input() public model = {};
  @Input() public options = {};
  @Output() public action = new EventEmitter();

  constructor(private builder: FormlyFormBuilder) {}

  ngOnInit() {
    this.builder.buildForm(this.form, this.fields, this.model, this.options);
  }

  submit() {
    this.action.emit({ type: 'SUBMIT', payload: this.model });
  }
}
