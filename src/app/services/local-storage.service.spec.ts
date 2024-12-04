import { TestBed } from '@angular/core/testing';

import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let service: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should store and retrieve data correctly', () => {
    service.setItem('testKey', 'testValue'); // Guarda un valor
    const retrievedValue = service.getItem('testKey'); // Recupera el valor
    expect(retrievedValue).toBe('testValue'); // Verifica que el valor recuperado sea el correcto
  });

  it('should remove data correctly', () => {
    service.setItem('testKey', 'testValue'); // Guarda un valor
    service.removeItem('testKey'); // Elimina el valor
    const retrievedValue = service.getItem('testKey'); // Intenta recuperar el valor eliminado
    expect(retrievedValue).toBeNull(); // Verifica que el valor sea nulo
  });

  it('should clear all data correctly', () => {
    service.setItem('key1', 'value1'); // Guarda un primer valor
    service.setItem('key2', 'value2'); // Guarda un segundo valor
    service.clear(); // Limpia todos los datos
    expect(service.getItem('key1')).toBeNull(); // Verifica que el primer valor sea nulo
    expect(service.getItem('key2')).toBeNull(); // Verifica que el segundo valor sea nulo
  });
});