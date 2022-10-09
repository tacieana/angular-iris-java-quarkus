import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import Client from "../models/client.model";
import { ClientResource } from "../resources/client.resource";

@Injectable({
    providedIn: 'root'
})
export class ClientService {

    constructor(private resource: ClientResource){

    }

    listAll():Observable<Client[]>{
        return this.resource.listAll();
    }

    delete(id:number){
        return this.resource.delete(id);
    }

}