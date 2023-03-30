import {BehaviorSubject} from "rxjs";
import {HttpClientTestingModule, HttpTestingController, TestRequest} from "@angular/common/http/testing";
import {ApiService} from "@services/api.service";
import {fakeCryptoDataInfo} from "../fakeData/fakeCryptoDataInfo";
import {StoreService} from "@services/store.service";
import {CryptoItem} from "@pages/crypto-rates/interfaces";
import {TestBed} from "@angular/core/testing";
import {environment} from "../../environments/environment";
import {MatSnackBar} from "@angular/material/snack-bar";
import {SnackBarService} from "@services/snack-bar.service";
describe('ApiService', () => {
  const errorMessage = 'Not Found';
  const errorDetails = {
    status: 404,
    statusText: 'Not Found',
  };

  let fakeStoreService: StoreService;
  let apiService: ApiService;
  let controller: HttpTestingController;
  let request: TestRequest;
  let fakeSnackBarService: SnackBarService;


  beforeEach(() => {
    fakeStoreService = {
      cryptoList$: new BehaviorSubject<CryptoItem[]>([])
    }

    fakeSnackBarService = jasmine.createSpyObj('SnackBarService', ['openSnackBar']);


    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ApiService,
        {provide: StoreService, useValue:  fakeStoreService },
        { provide: SnackBarService, useValue: fakeSnackBarService }
      ]
    })

    apiService = TestBed.inject(ApiService);
    controller = TestBed.inject(HttpTestingController);
  })

  describe('GetCryptoInfo method', () => {
    beforeEach(() => {
      apiService.getCryptoInfo();
      request = controller.expectOne((req) => req.url.includes(`${environment.backendLink}/crypto/top`));
    })

    it('get crypto data', () => {
      request.flush(fakeCryptoDataInfo);
      expect(fakeStoreService.cryptoList$.getValue()).toEqual(fakeCryptoDataInfo);
    });

    it('get error from crypto data request ', () => {
      request.flush(errorMessage, errorDetails);
      expect(fakeStoreService.cryptoList$.getValue()).toEqual([]);
      expect(fakeSnackBarService.openSnackBar).toHaveBeenCalledWith("Can't get crypto info", 'OK');
    });
  })

})
