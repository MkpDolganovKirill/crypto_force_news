import {GetDatePipe} from "@pipes/get-date.pipe";

describe('GetDatePipe', () => {1
  let getDatePipe: GetDatePipe;

  beforeAll(() => {
    getDatePipe = new GetDatePipe();
  })

  it('was created', () => {
    expect(getDatePipe).toBeTruthy();
  })

  it('transform date to simple format', () => {
    const exampleDate = new Date(2023, 2, 21);
    expect(getDatePipe.transform(exampleDate)).toBe('Мар 21');
  })
})
