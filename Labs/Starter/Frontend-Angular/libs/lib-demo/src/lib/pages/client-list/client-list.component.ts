import { ClientService } from './../../services/client.service';
import { Component, Input, OnInit } from '@angular/core';
import Client from '../../models/client.model';

@Component({
    selector: 'frontend-angular-client-list',
    templateUrl: './client-list.component.html',
    styleUrls: ['./client-list.component.scss'],
})
export class ClientListComponent implements OnInit {
    
    @Input() listOfData:Client[]=[];

    constructor(private service: ClientService) {}

    ngOnInit(): void {
        this.service.listAll().subscribe(result=>{
            this.listOfData = result;
        });
    }
}
