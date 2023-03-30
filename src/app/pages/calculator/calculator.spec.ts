import {ComponentFixture, TestBed} from "@angular/core/testing";
import {CalculatorComponent} from "@pages/calculator/calculator.component";
import {StoreService} from "@services/store.service";
import {ResourceService} from "@services/resource.service";
import {BehaviorSubject} from "rxjs";
import {CryptoItem} from "@pages/crypto-rates/interfaces";
import {DebugElement, NO_ERRORS_SCHEMA} from "@angular/core";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  FAKE_CALCULATOR_ARRAY_MORE_THEN_TWO,
  FAKE_CALCULATOR_INPUT_NAMES_MORE_THEN_TWO, FAKE_CALCULATOR_AVERAGE_SUM, FAKE_INVALID_CALCULATOR_ARRAY_MORE_THEN_TWO
} from "@pages/calculator/calculator.constants";
import {By} from "@angular/platform-browser";

describe('CalculatorComponent', () => {
  let fixture: ComponentFixture<CalculatorComponent>;
  let component: CalculatorComponent;
  let fakeStoreService: StoreService;
  let fakeResourceService: ResourceService;
  let debugElement: DebugElement;

  beforeEach(() => {
    fakeStoreService = {
      cryptoList$: new BehaviorSubject<CryptoItem[]>([]),
    }
    fakeResourceService = jasmine.createSpyObj('ResourceService', ['getImageLink']);

    TestBed.configureTestingModule({
      declarations: [CalculatorComponent],
      imports: [MatAutocompleteModule, MatInputModule, BrowserAnimationsModule,],
      providers: [
        {provide: StoreService, useValue: fakeStoreService},
        {provide: ResourceService, useValue: fakeResourceService},
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(CalculatorComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
  })

  beforeEach(() => {
    component.fieldsArray = JSON.parse(JSON.stringify(FAKE_CALCULATOR_ARRAY_MORE_THEN_TWO));
    component.inputNames = JSON.parse(JSON.stringify(FAKE_CALCULATOR_INPUT_NAMES_MORE_THEN_TWO));
    fixture.detectChanges();
  })

  it('create', () => {
    expect(component).toBeTruthy();
  })

  describe('removeLastField', () => {
    it('remove last line and refresh values', () => {
      component.removeLastField();
      fixture.detectChanges();
      expect(debugElement.queryAll(By.css('#dataLine')).length).toBe(4);
      expect(component.fieldsArray.length).toBe(4);
      expect(component.inputNames.length).toBe(4);
      expect(component.average).toBe(FAKE_CALCULATOR_AVERAGE_SUM);
    })

    it('remove last line lower then two and refresh values', () => {
      component.fieldsArray = component.fieldsArray.slice(0, 2);
      component.inputNames = component.inputNames.slice(0, 2);
      component.refreshValues();
      component.removeLastField();
      fixture.detectChanges();
      expect(debugElement.queryAll(By.css('#dataLine')).length).toBe(2);
      expect(component.fieldsArray.length).toBe(2);
      expect(component.inputNames.length).toBe(2);
      expect(component.average).toBe(FAKE_CALCULATOR_AVERAGE_SUM);
    })
  })

  describe('refreshValues', () => {
    it ('refresh values with invalid data', () => {
      component.fieldsArray = JSON.parse(JSON.stringify(FAKE_INVALID_CALCULATOR_ARRAY_MORE_THEN_TWO));
      component.refreshValues();
      fixture.detectChanges();
      expect(component.fieldsArray.length).toBe(5);
      expect(component.inputNames.length).toBe(5);
      expect(debugElement.queryAll(By.css('#dataLine')).length).toBe(5);
      expect(component.average).toBe(0);
    })
  })

  describe('addNewField', () => {
    it('add new field', () => {
      component.addNewField();
      fixture.detectChanges();
      expect(debugElement.queryAll(By.css('#dataLine')).length).toBe(6);
      expect(component.fieldsArray.length).toBe(6);
      expect(component.inputNames.length).toBe(6);
    })
  })

})
