import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Subject } from 'rxjs';
import Client from '../../models/client.model';

@Component({
    selector: 'frontend-angular-client-page',
    templateUrl: './client-page.component.html',
    styleUrls: ['./client-page.component.scss'],
})
export class ClientPageComponent {
    public client: Client | undefined;
    public refreshList: Subject<boolean> = new Subject<boolean>();

    constructor(private message: NzMessageService) {}

    new() {
        this.client = { id: 0, firstName: '', lastName: '', cpf: '' };
    }

    edit(client: Client) {
        this.client = client;
    }

    cancelForm() {
        this.client = undefined;
    }

    getTitleForm() {
        return this.client?.id
            ? `Edit Client #${this.client.id}`
            : 'New Client';
    }

    visibleModalForm() {
        return this.client !== undefined;
    }

    saveEvent(event: string) {
        this.client = undefined;
        this.message.create('success', event);
        this.refreshList.next(true);
    }
}
