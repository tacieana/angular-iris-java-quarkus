import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientListComponent } from './pages/client-list/client-list.component';
import { ClientFormComponent } from './pages/client-form/client-form.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@NgModule({
    imports: [CommonModule, NzTableModule, NzDividerModule],
    declarations: [ClientListComponent, ClientFormComponent],
    exports: [ClientListComponent, ClientFormComponent],
})
export class LibDemoModule {}
