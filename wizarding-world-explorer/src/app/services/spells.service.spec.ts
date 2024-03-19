import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { SpellsService } from './spells.service';

describe('SpellsService', () => {
  let service: SpellsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SpellsService],
    });
    service = TestBed.inject(SpellsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve spells from the API via GET', () => {
    const mockSpells = [
      { id: 1, name: 'Spell 1' },
      { id: 2, name: 'Spell 2' },
    ];

    service.getSpells().subscribe((data) => {
      expect(data).toEqual(mockSpells);
    });

    const req = httpMock.expectOne(
      (req) => req.method === 'GET' && req.url === service['apiUrl']
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockSpells);
  });

  it('should retrieve a spell by ID from the API via GET', () => {
    const spellId = '1';
    const mockSpell = { id: 1, name: 'Spell 1' };

    const request = service.getSpellById(spellId);
    request.subscribe((data) => {
      expect(data).toEqual(mockSpell);
    });

    const req = httpMock.expectOne(`${service['apiUrl']}/${spellId}`);
    expect(req.request.method).toBe('GET');

    req.flush(mockSpell);
  });
});
