import {ComponentFixture, TestBed} from "@angular/core/testing";
import {CryptoRatesComponent} from "@pages/crypto-rates/crypto-rates.component";
import {BehaviorSubject} from "rxjs";
import {CryptoItem} from "@pages/crypto-rates/interfaces";
import {StoreService} from "@services/store.service";
import {ResourceService} from "@services/resource.service";
import {fakeCryptoDataInfo, fakeCryptoDataPreparedItems} from "../../fakeData/fakeCryptoDataInfo";
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {By} from "@angular/platform-browser";
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('CryptoRatesComponent', () => {
  let fixture: ComponentFixture<CryptoRatesComponent>;
  let component: CryptoRatesComponent;
  let fakeStoreService: StoreService;
  let fakeResourceService: ResourceService;
  let fakeMatTableDataSource: MatTableDataSource<CryptoItem>;

  beforeEach(() => {
    fakeStoreService = {
      cryptoList$: new BehaviorSubject<CryptoItem[]>(fakeCryptoDataInfo)
    }
    fakeMatTableDataSource = jasmine.createSpyObj('MatTableDataSource', ['data']);
    fakeResourceService = jasmine.createSpyObj('ResourceService',['getImageLink']);

    TestBed.configureTestingModule({
      declarations: [CryptoRatesComponent],
      imports: [MatTableModule],
      providers: [
        {provide: StoreService, useValue: fakeStoreService},
        {provide: ResourceService, useValue: fakeResourceService},
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(CryptoRatesComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
  })

  afterEach(() => {
    fixture.destroy();
  });

  describe('onInit works', () => {
    it ('create', () => {
      expect(component).toBeTruthy();
    });

    it ('get data from list after create', () => {
      expect(component.data.data).toEqual(fakeCryptoDataPreparedItems);
    });

    it ('show mat-spinner if no data', () => {
      component.data = new MatTableDataSource()
      fixture.detectChanges();
      const spinnerElem = fixture.debugElement.query(By.css('mat-spinner'));
      expect(spinnerElem).toBeTruthy();
    })
  })

  describe('get arrow resource path', () => {
    it('get green arrow path', () => {
      const arrowPath = component.arrowPath(100);
      expect(arrowPath).toEqual('assets/icons/arrow_green.svg');
    })

    it('get red arrow path', () => {
      const arrowPath = component.arrowPath(-2);
      expect(arrowPath).toEqual('assets/icons/arrow_red.svg');
    })
  })

  describe('get rotate for arrow', () => {
    it('get rotate for green arrow', () => {
      const rotate = component.getRotate(100);
      expect(rotate).toEqual('rotate');
    })

    it('get rotate for red arrow', () => {
      const rotate = component.getRotate(-2);
      expect(rotate).toEqual('');
    })
  })

  describe('get color for number value', () => {
    it('get color for positive value', () => {
      const color = component.getColor(100);
      expect(color).toEqual('green');
    })

    it('get color for negative value', () => {
      const color = component.getColor(-2);
      expect(color).toEqual('red');
    })
  })
})
