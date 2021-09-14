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
                    'x-rapidapi-key': '911c1e5b43mshc582fe97228b94cp17c5f8jsn1f1003bb9d8c'
                },
                setParams:{
                    key: '911c1e5b43mshc582fe97228b94cp17c5f8jsn1f1003bb9d8c',
                }
            }
        )
        return next.handle(req);
    }
}