import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { EnvironmentConfig, ENV_CONFIG } from '@frontend-angular/shared';
import { Observable } from "rxjs";
import Client from "../models/client.model";

@Injectable({
    providedIn: 'root'
})
export class ClientResource {

    public baseUrlAPI: string;

    constructor(
        private http: HttpClient,
        @Inject(ENV_CONFIG) private config: EnvironmentConfig) {
            this.baseUrlAPI = `${config.environment.baseUrlAPI}`;
    }
    
    listAll():Observable<Client[]>{
        return this.http.get<Client[]>(`${this.baseUrlAPI}/api/client`);
    }

    delete(id:number){
        return this.http.delete<Client[]>(`${this.baseUrlAPI}/api/client/${id}`);
    }

}