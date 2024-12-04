import { TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a successful response for valid API call', (done: DoneFn) => {
    const mockResponse = { success: true, data: {} }; // Simula una respuesta exitosa
    spyOn(service, 'post').and.returnValue(of(mockResponse)); // Simula el método `post`

    service.post('login', {}).subscribe(response => {
      expect(response.success).toBeTrue(); // Verifica que el éxito sea true
      done(); // Marca la prueba como completada
    });
  });

  it('should handle errors for invalid API call', (done: DoneFn) => {
    const mockError = { error: { message: 'Invalid request' } }; // Simula un error de la API
    spyOn(service, 'post').and.returnValue(throwError(mockError)); // Simula un error en el método `post`

    service.post('login', {}).subscribe({
      error: (err) => {
        expect(err.error.message).toBe('Invalid request'); // Verifica que el mensaje de error sea correcto
        done(); // Marca la prueba como completada
      }
    });
  });
});