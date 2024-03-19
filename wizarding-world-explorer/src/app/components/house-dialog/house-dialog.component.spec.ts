import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HouseDialogComponent } from './house-dialog.component';

describe('HouseDialogComponent', () => {
  let component: HouseDialogComponent;
  let fixture: ComponentFixture<HouseDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HouseDialogComponent],
      imports: [MatDialogModule],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: {
            id: 1,
            name: 'House 1',
            traits: ['Trait 1', 'Trait 2'],
            members: [],
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle showMoreInfo property', () => {
    const event = new MouseEvent('click');
    component.toggleMoreInfo(event);
    expect(component.showMoreInfo).toBe(true);
    component.toggleMoreInfo(event);
    expect(component.showMoreInfo).toBe(false);
  });

  it('should return house crest image URL', () => {
    const houseName = 'Gryffindor';
    const expectedUrl = 'assets/house-crests/gryffindor.png';
    expect(component.getHouseCrestImageUrl(houseName)).toBe(expectedUrl);
  });

  it('should return traits as a string', () => {
    const traits = [{ name: 'Trait 1' }, { name: 'Trait 2' }];
    const expectedTraits = 'Trait 1, Trait 2';
    expect(component.getTraits(traits)).toBe(expectedTraits);
  });

  it('should return notable members as a string', () => {
    const members = [
      { firstName: 'Harry', lastName: 'Potter' },
      { firstName: 'Hermione', lastName: 'Granger' },
    ];
    const expectedMembers = 'Harry Potter, Hermione Granger';
    expect(component.getNotableMembers(members)).toBe(expectedMembers);
  });

  it('should return "None" if members list is empty', () => {
    const members: any[] = [];
    const expectedMembers = 'None';
    expect(component.getNotableMembers(members)).toBe(expectedMembers);
  });

  it('should return dialog configuration', () => {
    const config = component.getDialogConfig();
    expect(config.width).toBe('auto');
    expect(config.minHeight).toBe('300px');
  });
});
