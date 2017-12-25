import { TruncatePipe } from './limit-to.pipe';

describe('LimitToPipe', () => {
  it('should cut strings', () => {
    const pipe = new LimitToPipe();
    expect(pipe).toBeTruthy();
  });
});
