const request = require('supertest');

const createApp = require('../src/app');

describe('Test for / endpoint', () => {
  let app = null;
  let server = null;
  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  });

  afterAll(() => {
    server.close();
  });

  describe('test for [GET] /', () => {
    test('should return "Hello World!"', async () => {
      const response = await request(app).get('/').expect(200);
      expect(response.text).toEqual('Hello World!');
    });
  });
});
