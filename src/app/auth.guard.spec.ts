import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LocalStorageService } from './services/local-storage.service';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockLocalStorageService: jasmine.SpyObj<LocalStorageService>;

  beforeEach(() => {
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    mockLocalStorageService = jasmine.createSpyObj('LocalStorageService', ['getItem']);

    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: Router, useValue: mockRouter },
        { provide: LocalStorageService, useValue: mockLocalStorageService },
      ],
    });

    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should return true if user is authenticated', () => {
    mockLocalStorageService.getItem.and.returnValue('sample-token');
    expect(guard.canActivate()).toBeTrue();
  });

  it('should navigate to login if user is not authenticated', () => {
    mockLocalStorageService.getItem.and.returnValue(null);
    expect(guard.canActivate()).toBeFalse();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/login']);
  });
});