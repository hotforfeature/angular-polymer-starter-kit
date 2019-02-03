import { Component, ElementRef } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { polymerHost } from '@codebakery/origami/templates';
import '@polymer/iron-list/iron-list';
import '@polymer/paper-checkbox/paper-checkbox';
import '@polymer/paper-input/paper-input';
import '@polymer/paper-item/paper-item';
import '@polymer/paper-listbox/paper-listbox';
import '@vaadin/vaadin-combo-box';

@Component({
  selector: 'app-demo',
  templateUrl: 'demo.component.html',
  styleUrls: ['demo.component.css', '../shared-styles.css'],
  providers: [
    polymerHost(DemoComponent)
  ]
})
export class DemoComponent {
  formGroup: FormGroup;
  inputNgModel = 'ngModel value';
  checkboxNgModel = true;
  items = [1, 2, 3];
  selectedItem = 1;
  selectedItems = [1, 3];
  hostOneWay = 'DemoComponent property';
  hostTwoWay = false;

  constructor(fb: FormBuilder) {
    this.formGroup = fb.group({
      inputControl: ['formControl value'],
      inputNamed: ['formControlName value'],
      checkboxControl: [true],
      checkboxNamed: [true],
      selectControl: [2],
      selectNamed: [3],
      multiSelectControl: [[1, 2]],
      multiSelectNamed: [[2, 3]]
    });
  }

  getStatusAndValue(control: AbstractControl): string {
    return `(${control.status}) ${JSON.stringify(control.value)}`;
  }

  getHostComputed(item: number) {
    return `# ${item}`;
  }

  itemClicked(event: Event) {
    console.log(event);
  }
}
