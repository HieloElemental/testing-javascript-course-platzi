const request = require('supertest');
const { generateManyBooks } = require('../src/fakes/book.fake');

const mockGetAll = jest.fn();

jest.mock('../src/lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => [],
})));

const createApp = require('../src/app');

describe('Test for books endpoint', () => {
  let app = null;
  let server = null;
  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  });
  afterAll(() => {
    server.close();
  });

  describe('test for [GET] /api/v1/books', () => {
    test('should return a book list', async () => {
      const fakeBooks = generateManyBooks(3);
      mockGetAll.mockResolvedValue(fakeBooks);
      const { body } = await request(app).get('/api/v1/books').expect(200);
      expect(body.length).toEqual(fakeBooks.length);
    });
  });
});
