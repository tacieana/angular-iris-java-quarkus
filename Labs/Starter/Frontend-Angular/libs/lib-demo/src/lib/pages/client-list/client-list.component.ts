import { ClientService } from './../../services/client.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Client from '../../models/client.model';


@Component({
    selector: 'frontend-angular-client-list',
    templateUrl: './client-list.component.html',
    styleUrls: ['./client-list.component.scss'],
})
export class ClientListComponent implements OnInit {
    
    @Input() listOfData: Client[]=[];
    @Output() clientEdit = new EventEmitter<Client>();


    constructor(private service: ClientService) {}

    ngOnInit(): void {
        this.service.listAll().subscribe(result=>{
            this.listOfData = result;
        });
    }

    edit(client:Client){
        this.clientEdit.emit(client);
    }

    delete(id:number){
        this.service.delete(id).subscribe(()=>{
            this.listOfData = this.listOfData.filter(obj => obj.id !== id);
        });
    }
}
