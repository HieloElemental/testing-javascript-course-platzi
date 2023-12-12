/* matchers */
test('test obj', () => {
  const data = { name: 'Hielo' };
  data.lastname = 'Elemental';
  expect(data).toEqual({ name: 'Hielo', lastname: 'Elemental' });
});

test('null', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test('booleans', () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);

  expect('').toBeFalsy();
  expect(false).toBeFalsy();
  expect(0).toBeFalsy();

  expect(true).toBeTruthy();
  expect('asdf').toBeTruthy();
  expect(1).toBeTruthy();
});

test('null', () => {
  expect('Christian').toMatch(/tian/);
});

test('list / arrays', () => {
  const numbres = [1, 2, 3, 4];
  expect(numbres).toContain(3);
});
