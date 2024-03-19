import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { HousesComponent } from './houses.component';
import { HousesService } from 'src/app/services/houses.service';

describe('HousesComponent', () => {
  let component: HousesComponent;
  let fixture: ComponentFixture<HousesComponent>;
  let housesServiceSpy: jasmine.SpyObj<HousesService>;
  let mockMatDialog: jasmine.SpyObj<MatDialog>;

  beforeEach(async () => {
    const housesServiceSpyObj = jasmine.createSpyObj('HousesService', [
      'getHouses',
      'getHouseById',
    ]);
    const matDialogSpyObj = jasmine.createSpyObj('MatDialog', ['open']);

    await TestBed.configureTestingModule({
      declarations: [HousesComponent],
      providers: [
        { provide: HousesService, useValue: housesServiceSpyObj },
        { provide: MatDialog, useValue: matDialogSpyObj },
      ],
      imports: [MatGridListModule],
    }).compileComponents();

    housesServiceSpy = TestBed.inject(
      HousesService
    ) as jasmine.SpyObj<HousesService>;
    mockMatDialog = TestBed.inject(MatDialog) as jasmine.SpyObj<MatDialog>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should set data property of dialog configuration when openDialog method is called', () => {
    const houseId = '1';
    const mockHouseData = { id: 1, name: 'House 1' };

    housesServiceSpy.getHouseById.and.returnValue(of(mockHouseData));
    component.openDialog(houseId);

    const dialogConfig: any = mockMatDialog.open.calls.mostRecent().args[1];
    expect(dialogConfig.data).toEqual(mockHouseData);
  });
});
