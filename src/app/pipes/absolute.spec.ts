import {AbsolutePipe} from "@pipes/absolute.pipe";

describe('AbsolutePipe', () => {
  let absolutePipe: AbsolutePipe;

  beforeAll(() => {
    absolutePipe = new AbsolutePipe();
  })

  

  it('was created', () => {
    expect(absolutePipe).toBeTruthy();
  })

  it('transform negative number value to absolute', () => {
    const value = -35.0211;
    expect(absolutePipe.transform(-35.0211)).toBe(35.0211);
  })
})
