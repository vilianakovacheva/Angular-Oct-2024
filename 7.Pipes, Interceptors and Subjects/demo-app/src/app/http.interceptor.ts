import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { API_URL } from './constants';
import { EMPTY, catchError, tap } from 'rxjs';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.startsWith('/api')) {
    req = req.clone({
      url: req.url.replace('/api', API_URL)
    })
  };
  return next(req).pipe(
    //Reads the data-tap
    tap((req) => {
      if(req instanceof HttpRequest) {
        console.log(`[${req.url}]`, req); //Advanced Loging Mechanism
      }
    }
    // Handles the error- catchError
    ), catchError((err) => {
      if(err.status === 0) {
        console.error('Error from interceptor: ', err)
        return EMPTY;
      }

      return [err];
    })
  );
};

