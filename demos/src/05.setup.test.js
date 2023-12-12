describe('Group 1', () => {
  beforeAll(() => {
    // setup a db
  });

  afterAll(() => {
    // setdown a db
  });

  beforeEach(() => {});

  afterEach(() => {});

  test('Case 1', () => {
    expect(1 + 1).toBe(2);
  });
  test('Case 2', () => {
    expect(1 + 3).toBe(4);
  });

  describe('Group 2', () => {
    beforeAll(() => {});

    test('Case 3', () => {
      expect(1 + 1).toBe(2);
    });
    test('Case 4', () => {
      expect(1 + 3).toBe(4);
    });
  });
});
