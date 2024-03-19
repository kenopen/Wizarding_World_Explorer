import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ElixirsService } from './elixirs.service';

describe('ElixirsService', () => {
  let service: ElixirsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ElixirsService],
    });
    service = TestBed.inject(ElixirsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve elixirs from the API via GET', () => {
    const mockElixirs = [
      { id: 1, name: 'Elixir 1' },
      { id: 2, name: 'Elixir 2' },
    ];

    service.getElixirs().subscribe((data) => {
      expect(data).toEqual(mockElixirs);
    });

    const req = httpMock.expectOne(
      (req) => req.method === 'GET' && req.url === service['apiUrl']
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockElixirs);
  });
});
