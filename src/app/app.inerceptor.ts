import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from 'rxjs/operators';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.body) {
            const result = req.clone({ body: req.body.results });
            return next.handle(result);
        }
        return next.handle(req);
    }

}