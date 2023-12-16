const request = require('supertest');
const { MongoClient } = require('mongodb');

const createApp = require('../src/app');
const { config } = require('../src/config');

const DB_NAME = config.dbName;
const MONGO_URI = config.dbUrl;

describe('Test for books endpoint', () => {
  let app = null;
  let server = null;
  let database = null;
  beforeAll(async () => {
    app = createApp();
    server = app.listen(3001);
    const client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    database = client.db(DB_NAME);
  });

  afterEach(async () => {
    await database.dropDatabase();
  });

  afterAll(async () => {
    await server.close();
  });

  describe('test for [GET] /api/v1/books', () => {
    test('should return a book list', async () => {
      const seedData = await database.collection('books').insertMany([{
        name: 'Hielo Eléctrico Adventures',
        year: 2015,
        author: 'Hielo Elemental',
      }, {
        name: 'La Vida Secreta de Hielo',
        year: 2016,
        author: 'Hielo Elemental',
      }]);
      const { body } = await request(app).get('/api/v1/books').expect(200);
      expect(body.length).toEqual(seedData.insertedCount);
    });
  });
});
