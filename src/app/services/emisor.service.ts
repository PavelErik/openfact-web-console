import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Emisor } from '../models/emisor';
import { Headers, RequestOptions } from '@angular/http';

import { EMISOR } from './emisor-mock';

@Injectable()
export class EmisorService {
    public urlEmisor = 'URLLL'
    public ruc1 = 'string111';

    constructor(private http: Http) { }

    buildEmisor() {
        return '';
    }
    editEmisor() {
        return '';
    }
    deleteEmisor() {
        return '';
    }

    private emisoresUrl = 'app/emisor.json';  // URL to web API
    /*METODOS GET ------------------------------------------*/
    getEmisores() {
        return this.http.get(this.emisoresUrl)
            .map(res => res.json());
        //.catch(this.handleError);//
    }
    getEmisoresPromise(): Promise<Emisor[]> {
        return this.http.get(this.emisoresUrl)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleErrorPro);
    }

    getEmisoresObservable(): Observable<Emisor[]> {
        return this.http.get(this.emisoresUrl)
            .map(this.extractData)
            .catch(this.handleErrorObs);
    }
    /*METODOS GET ----------------------------------------FIN*/

    /*METODOS PUT ------------------------------------------*/
    addEmisorPromise(name: string): Promise<Emisor> {
        let body = JSON.stringify({ name });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.emisoresUrl, body, options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleErrorPro);

    }
    addEmisorObservable(name: string): Observable<Emisor> {
        let body = JSON.stringify({ name });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.emisoresUrl, body, options)
            .map(this.extractData)
            .catch(this.handleErrorObs);
    }

    /*METODOS GET ----------------------------------------FIN*/

    /*METODOS MANEJADORES DE ERROR -----------------------------------*/
    private handleErrorObs(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
    private handleErrorPro(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Promise.reject(errMsg);
    }
    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }
    /*METODOS MANEJADORES DE ERROR --------------------------------FIN*/
}