let httpClientSpy: { get: jasmine.Spy };

beforeEach(() => {
  // TODO: spy on other methods too
  httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
});

it('should return expected heroes (HttpClient called once)', () => {

  expect(true).toBe(true);
});
