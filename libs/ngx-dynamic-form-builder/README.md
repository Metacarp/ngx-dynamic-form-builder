[![Greenkeeper badge](https://badges.greenkeeper.io/EndyKaufman/ngx-dynamic-form-builder.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/EndyKaufman/ngx-dynamic-form-builder.svg?branch=master)](https://travis-ci.org/EndyKaufman/ngx-dynamic-form-builder)
[![npm version](https://badge.fury.io/js/ngx-dynamic-form-builder.svg)](https://badge.fury.io/js/ngx-dynamic-form-builder)


[FormBuilder](https://angular.io/api/forms/FormBuilder) + [class-transformer](https://github.com/typestack/class-transformer) + [class-validator](https://github.com/typestack/class-validator) = dynamic form group builder for [Angular7+](https://angular.io)

## Installation

```bash
npm i --save ngx-dynamic-form-builder
```

## Links

[Demo](https://endykaufman.github.io/ngx-dynamic-form-builder) - Demo application with ngx-dynamic-form-builder.

[Stackblitz](https://stackblitz.com/edit/ngx-dynamic-form-builder) - Simply sample of usage on https://stackblitz.com

## Usage

app.module.ts
```js 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompanyPanelComponent } from './company-panel.component';

@NgModule({
  imports: [
    ...
    FormsModule,
    ReactiveFormsModule,
    ...
  ],
  declarations: [
    ...
    CompanyPanelComponent,
    ...
  ],
  ...
})
export class AppModule {}
```

company.ts
```js 
import { Validate, IsNotEmpty } from 'class-validator';
import { plainToClassFromExist } from 'class-transformer';
import { TextLengthMore15 } from '../utils/custom-validators';

export class Company {
    id: number = undefined;
    @Validate(TextLengthMore15, {
        message: 'The company name must be longer than 15'
    })
    @IsNotEmpty()
    name: string = undefined;

    constructor(data?: any) {
        plainToClassFromExist(this, data);
    }
}
```

company-panel.component.html
```html
<form [formGroup]="form" *ngIf="form?.formErrors as errors" novalidate>
    <input formControlName="name" placeholder="Name">
    <p *ngIf="errors.name?.length">
      Error: {{errors.name[0]}}
    </p>
    <p>Form status: {{ form.status | json }}</p>
    <p>
      Form class-validator errors: {{errors|json}}
    </p>
    <p>
      Form native errors: {{form?.nativeValidateErrors|async|json}}
    </p>
    <p *ngIf="savedItem">
      Saved item: {{savedItem|json}}
    </p>
    <button (click)="onLoadClick()">Load</button>
    <button (click)="onClearClick()">Clear</button>
    <button (click)="onSaveClick()" [disabled]="!form.valid">Save</button>
</form>
```

company-panel.component.ts
```js
import { DynamicFormGroup, DynamicFormBuilder } from 'ngx-dynamic-form-builder';
import { Company } from './../../shared/models/company';
import { Input, Component } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'company-panel',
  templateUrl: './company-panel.component.html'
})
export class CompanyPanelComponent {
  
  form: DynamicFormGroup<Company>;

  @Input()
  item = new Company({
    'id': 11,
    'name': '123456789012345'
  });

  fb = new DynamicFormBuilder();

  savedItem: Company;

  constructor() {
    this.form = this.fb.group(Company, {
      name: ''
    });
  }
  onLoadClick(): void {
    this.savedItem = undefined;
    this.form.object = this.item;
    this.form.validateAllFormFields();
  }
  onClearClick(): void {
    this.savedItem = undefined;
    this.form.object = new Company();
    this.form.validateAllFormFields();
  }
  onSaveClick(): void {
    this.form.validateAllFormFields();
    if (this.form.valid) {
      this.savedItem = this.form.object;
    }
  }
}
```

custom-validators.ts
```js
import {
    ValidatorConstraintInterface, ValidatorConstraint
} from 'class-validator';

@ValidatorConstraint()
export class TextLengthMore15 implements ValidatorConstraintInterface {
    validate(text: string) {
        return text ? text.length > 15 : false;
    }
}
```

## Observable Errors
the customValidateErrors property can be subscribed for cases in which your code should act on changes in errors

company-panel.component.html
```html
<form [formGroup]="form" *ngIf="form?.customValidateErrors | async as errors" novalidate>
    <input formControlName="name" placeholder="Name">
    <p *ngIf="errors.name?.length">
      Error: {{errors.name[0]}}
    </p>
    <p>Form status: {{ form.status | json }}</p>
    <p>
      Observable validation errors: {{errors|json}}
    </p>
    <p *ngIf="savedItem">
      Saved item: {{savedItem|json}}
    </p>
    <button (click)="onLoadClick()">Load</button>
    <button (click)="onClearClick()">Clear</button>
    <button (click)="onSaveClick()" [disabled]="!form.valid">Save</button>
</form>
```

company-panel.component.ts
```js
import { DynamicFormGroup, DynamicFormBuilder } from 'ngx-dynamic-form-builder';
import { Company } from './../../shared/models/company';
import { Input, Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'company-panel',
  templateUrl: './company-panel.component.html'
})
export class CompanyPanelComponent implements onDestroy {

  form: DynamicFormGroup<Company>;

  @Input()
  item = new Company({
    'id': 11,
    'name': '123456789012345'
  });

  @Input()
  strings = Company.strings;

  fb = new DynamicFormBuilder();

  savedItem: Company;

  errorChangeSubscription: Subscription;

  constructor() {
    this.form = this.fb.group(Company, {
      name: ''
    });

    this.errorChangeSubscription = this.form.customValidateErrors.subscribe((allErrors) => {
       console.log(`Errors changed: ${allErrors}`);
    })
  }
  ngOnDestroy() {
    if(this.errorChangeSubscription != null && this.errorChangeSubscription.closed === false) {
      this.errorChangeSubscription.unsubscribe();
    }
  }
  onLoadClick(): void {
    this.savedItem = undefined;
    this.form.object = this.item;
    this.form.validateAllFormFields();
  }
  onClearClick(): void {
    this.savedItem = undefined;
    this.form.object = new Company();
    this.form.validateAllFormFields();
  }
  onSaveClick(): void {
    this.form.validateAllFormFields();
    if (this.form.valid) {
      this.savedItem = this.form.object;
    }
  }
}
```

## License

MIT
