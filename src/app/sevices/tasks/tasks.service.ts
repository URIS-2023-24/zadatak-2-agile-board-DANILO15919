import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  baseURL="https://app.microenv.com/backend/key/f54d928cf81432d22cff58/rest/api/tasks/";
  constructor(private http:HttpClient) { }

  public getTasks():Observable<any>{
    return this.http.get(this.getURL()).pipe(map((response:Response) => response));
  }

  private getURL(){
    return `${this.baseURL}`
  }
}
