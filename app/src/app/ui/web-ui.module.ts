import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TimeagoModule } from 'ngx-timeago';

import { WebUiFormsModule } from './web-ui-forms.module';
import { LoadingComponent } from './components/loading/loading.component';
import { PageComponent } from './components/page/page.component';

const MODULES = [
  CommonModule,
  WebUiFormsModule,
];
const COMPONENTS = [
  LoadingComponent,
  PageComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    ...MODULES,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    TimeagoModule.forRoot(),
  ],
  exports: [
    ...COMPONENTS,
    ...MODULES,
    BsDropdownModule,
    ModalModule,
    TabsModule,
    TimeagoModule,
  ],
})
export class WebUiModule {}
