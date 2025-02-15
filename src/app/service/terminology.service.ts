import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {MessageService} from "./message.service";
import {Observable} from "rxjs";
// @ts-ignore
import ValueSet = fhir.ValueSet;
import {environment} from "../../environments/environment";


export enum Formats {
  JsonFormatted = 'jsonf',
  Json = 'json',
  Xml = 'xml',
  EprView = 'epr'
}

@Injectable({
  providedIn: 'root'
})
export class TerminologyService {


  private format: Formats = Formats.JsonFormatted;

  private nameChange: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient, private messageService: MessageService) {

  }

  setDrugName(drugName : string) {
     this.nameChange.emit(drugName);
  }
  getDrugNameChange() {
    return this.nameChange;
  }

  getMedicationValueSet() {
    var encodedUri = encodeURIComponent('https://fhir.hl7.org.uk/ValueSet/UKCore-MedicationCode');
    console.log(encodedUri)
     return encodedUri;
  }

/*
  getSNOMEDVersionRaw() {
    return 'http://snomed.info/sct/999000031000000106/version/20190807';
  }
  getSNOMEDVersion() {
    var encodedUri = encodeURIComponent(this.getSNOMEDVersionRaw());
    console.log(encodedUri)
    return encodedUri;
  }
*/
  getHeaders(contentType: boolean = true): HttpHeaders {

    let headers = new HttpHeaders(
    );
    if (contentType) {
      headers = headers.append('Content-Type', 'application/fhir+json');
      headers = headers.append('Accept', 'application/fhir+json');
    }
    return headers;
  }

  public getResource(search: string): Observable<any> {

    const url = environment.config.baseUrl + search;
    let headers = new HttpHeaders(
    );

    if (this.format === 'xml') {
      headers = headers.append('Content-Type', 'application/fhir+xml');
      headers = headers.append('Accept', 'application/fhir+xml');

      return this.http.get(url, {headers, responseType: 'blob' as 'blob'});
    } else {
      return this.http.get<any>(url, {'headers': headers});
    }
  }

  public get(search: string): Observable<ValueSet> {

    const url: string = environment.config.baseUrl + search;
    let headers = new HttpHeaders(
    );

    if (this.format === 'xml') {
      headers = headers.append('Content-Type', 'application/fhir+xml');
      headers = headers.append('Accept', 'application/fhir+xml');

      return this.http.get(url, {headers, responseType: 'blob' as 'blob'});
    } else {
      return this.http.get<any>(url, {'headers': headers});
    }
  }

  public post(resource: string, body: any): Observable<any> {

    let headers: HttpHeaders = this.getHeaders(false);

    headers = headers.append('Content-Type', 'application/fhir+json');
    headers = headers.append('Accept', 'application/fhir+json');

    return this.http.post<any>(environment.config.baseUrl + resource, body, {headers: headers});
  }





}
