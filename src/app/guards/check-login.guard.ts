import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';


export const checkLoginGuard: CanActivateFn = (): Observable<boolean> => {
  const router = inject(Router)
  const auth = inject(AuthService)

  return new Observable<boolean>(observer => {
    auth.getUserLogged().subscribe(res => {
      if (res) {
        observer.next(true);
        observer.complete();
      } else {
        router.navigate(['/login']);
        observer.next(false);
        observer.complete();
      }
    });
  });
};
