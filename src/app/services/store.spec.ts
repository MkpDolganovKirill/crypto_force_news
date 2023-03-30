import {StoreService} from "@services/store.service";
import {TestBed} from "@angular/core/testing";

describe('StoreService', () => {
  let storeService: StoreService;
  beforeAll(() => {
    storeService = TestBed.inject(StoreService);
  })

  it('should be truthy', () => {
    expect(storeService).toBeTruthy();
  });
})
