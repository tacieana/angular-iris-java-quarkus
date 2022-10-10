import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
    UntypedFormBuilder,
    UntypedFormGroup,
    Validators,
} from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import Client from '../../models/client.model';
import { ClientService } from '../../services/client.service';

@Component({
    selector: 'frontend-angular-client-form',
    templateUrl: './client-form.component.html',
    styleUrls: ['./client-form.component.scss'],
})
export class ClientFormComponent implements OnInit {
    @Input() client: Client | undefined;

    @Output() saveEvent = new EventEmitter<string>();

    validateForm!: UntypedFormGroup;

    constructor(
        private fb: UntypedFormBuilder,
        private service: ClientService,
        private translate: TranslateService
    ) {}

    submitForm(): void {
        if (this.validateForm.valid) {
            this.save(this.validateForm.value);
        } else {
            Object.values(this.validateForm.controls).forEach((control) => {
                if (control.invalid) {
                    control.markAsDirty();
                    control.updateValueAndValidity({ onlySelf: true });
                }
            });
        }
    }

    ngOnInit(): void {
        this.validateForm = this.fb.group({
            firstName: [this.client?.firstName, [Validators.required]],
            lastName: [this.client?.lastName, [Validators.required]],
            cpf: [this.client?.cpf, [Validators.required]],
        });
    }

    save(data: Client) {
        if (this.client?.id) {
            this.service.update(this.client.id, data).subscribe(() => {
                const msg = this.translate.instant('client.updateClientSuccess', {
                    id: this.client?.id,
                });
                this.saveEvent.emit(msg);
            });
        } else {
            this.service.save(data).subscribe(() => {
                const msg = this.translate.instant('client.saveClientSuccess');
                this.saveEvent.emit(msg);
            });
        }
    }
}
