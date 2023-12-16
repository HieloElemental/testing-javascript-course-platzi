const BooksServices = require('./books.service');
const { generateManyBooks } = require('../fakes/book.fake');

const mockGetAll = jest.fn();

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => [],
})));

describe('Test for BookService', () => {
  let service;

  beforeEach(() => {
    service = new BooksServices();
    jest.clearAllMocks();
  });

  describe('Test for getBooks', () => {
    test('Should return a book list', async () => {
      // Arrange
      const fakeBooks = generateManyBooks(20);
      mockGetAll.mockResolvedValue(fakeBooks);
      // Act
      const books = await service.getBooks({});
      // Assert
      expect(books.length).toEqual(fakeBooks.length);
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
    });

    test('Should return a book list', async () => {
      // Arrange
      const fakeBooks = generateManyBooks(4);
      mockGetAll.mockResolvedValue(fakeBooks);
      // Act
      const books = await service.getBooks({});
      // Assert
      expect(books[0].name).toEqual(fakeBooks[0].name);
    });
  });
});
