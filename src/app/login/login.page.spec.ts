import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { LoginPage } from './login.page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(() => {
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [LoginPage],
      providers: [{ provide: Router, useValue: mockRouter }],
    });

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display error message for invalid credentials', () => {
    component.username = 'wrong';
    component.password = 'wrong';
    component.login();
    expect(component.errorMessage).toBe('Usuario o contraseña incorrectos.');
  });

  it('should navigate to home page on successful login', () => {
    component.username = 'validUser';
    component.password = 'validPass';
    component.login();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/home']);
  });
});