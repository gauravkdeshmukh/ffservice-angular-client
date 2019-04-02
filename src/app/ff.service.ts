import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class FfService {
  constructor(private http: HttpClient) {}

  get(): Observable<any> {
    let apiURL = "http://localhost:8080/api/v1/featureflags";
    return this.http.get(apiURL).pipe(map((flags: any) => flags));
  }

  post(flag: any): Observable<any> {
    let apiURL = "http://localhost:8080/api/v1/featureflags";
    let httpHeaders = new HttpHeaders({
      "Content-Type": "application/json;charset=UTF-8",
      "Cache-Control": "no-cache"
    });
    let options = {
      headers: httpHeaders
    };
    return this.http.post(apiURL, flag, options).pipe(
      map((flags: any) => {
        console.log(flags);
        return flags;
      }),
      catchError((err: any) => of([]))
    );
  }
}
