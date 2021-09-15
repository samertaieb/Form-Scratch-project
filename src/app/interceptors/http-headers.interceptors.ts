import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class headersInerceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone(
            {
                setHeaders: {
                    'Application Key': 'ba3ecf76d7msh95698e2f5a79840p13ed2fjsn928678d41d84',
                    'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',

                },
                setParams: {
                    key: '1df053a0848542ee9ba566d518f5314d',
                }
            }
        )
        return next.handle(req);
    }
}