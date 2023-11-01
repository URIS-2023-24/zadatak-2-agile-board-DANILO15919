import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContributorsService {

  baseURL="https://app.microenv.com/backend/key/f54d928cf81432d22cff58/rest/api/contributors/";
  constructor(private http:HttpClient) { }

  public getContributors():Observable<any>{
    return this.http.get(this.getURL()).pipe(map((response:Response) => response));
  }

  private getURL(){
    return `${this.baseURL}`
  }
}


