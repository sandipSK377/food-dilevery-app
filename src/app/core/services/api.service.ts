import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import {catchError} from 'rxjs/operators'
import { ShareService } from './share.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient,private shareService:ShareService) { }

  formatError(error:any){
    this.shareService.changeMessage({error:true});
    return throwError(error);
  }

  get(url: string): Observable<any>{
    return this.http.get(url).pipe(catchError(this.formatError));
  }
  post(url: string,body: any | null): Observable<any>{
    return this.http.post(url,body).pipe(catchError(this.formatError));
  }
}
