import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {StorageService} from "../services/storage.service";
import {Injectable} from "@angular/core";

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
    constructor(private storage: StorageService) {
        console.log('se llamo el interceptor');
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.storage.getToken();
        if (!token) {
            return next.handle(req);
        }
        const headers = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${token}`)
        });
        return next.handle(headers);
    }
}
