import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'advanced-page',
  templateUrl: './advanced-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdvancedPageComponent {
  source = {
    html: require('!!raw-loader!./../../panels/user-panel/user-panel.component.html'),
    ts: require('!!raw-loader!./../../panels/user-panel/user-panel.component.ts'),
    launch: {
      location: 'https://stackblitz.com/edit/ngx-dynamic-form-builder',
      tooltip: `Edit in http://stackblitz.com`
    }
  };

  otherFiles: { name: string; language: string; content: string }[] = [
    {
      name: 'user.ts',
      language: 'javascript',
      content: require('!!raw-loader!../../shared/models/user.ts')
    },
    {
      name: 'department.ts',
      language: 'javascript',
      content: require('!!raw-loader!../../shared/models/department.ts')
    },
    {
      name: 'company.ts',
      language: 'javascript',
      content: require('!!raw-loader!../../shared/models/company.ts')
    },
    {
      name: 'custom-transforms.ts',
      language: 'javascript',
      content: require('!!raw-loader!../../shared/utils/custom-transforms.ts')
    },
    {
      name: 'custom-validators.ts',
      language: 'javascript',
      content: require('!!raw-loader!../../shared/utils/custom-validators.ts')
    }
  ];
}
