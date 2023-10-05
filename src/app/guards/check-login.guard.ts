import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


export const checkLoginGuard: CanActivateChildFn = (route, state) => {
  const router = inject(Router)
  const auth = inject(AuthService)

  auth.getUserLogged().subscribe(res => {
    if (res) {
      return true;
    } else {
      router.navigate(['/login']);
      return false;
    }
  });

  return true;
};
