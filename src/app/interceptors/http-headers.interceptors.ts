import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class headersInerceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req=req.clone(
            {
                setHeaders:{
                    'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
                    'x-rapidapi-key': '42170af444mshab4ef6bcd7b0a39p1bbcebjsn5a217a860006'
                },
                setParams:{
                    key: '706368c0916347c296a6d06332ffd370',
                }
            }
        )
        return next.handle(req);
    }
}