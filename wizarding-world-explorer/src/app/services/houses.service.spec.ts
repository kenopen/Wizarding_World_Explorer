import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HousesService } from './houses.service';

describe('HousesService', () => {
  let service: HousesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HousesService],
    });
    service = TestBed.inject(HousesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve houses from the API via GET', () => {
    const mockHouses = [
      { id: 1, name: 'House 1' },
      { id: 2, name: 'House 2' },
    ];

    service.getHouses().subscribe((data) => {
      expect(data).toEqual(mockHouses);
    });

    const req = httpMock.expectOne(service['apiUrl']);
    expect(req.request.method).toBe('GET');
    req.flush(mockHouses);
  });

  it('should retrieve a house by ID from the API via GET', () => {
    const houseId = '1';
    const mockHouse = { id: 1, name: 'House 1' };

    service.getHouseById(houseId).subscribe((data) => {
      expect(data).toEqual(mockHouse);
    });

    const req = httpMock.expectOne(`${service['apiUrl']}/${houseId}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockHouse);
  });
});
