import 'jest';
import { Movies } from '../Movies';

describe('Movies', () => {
  it('Should return a movie list with popular movies', async () => {
    const movies = new Movies();
    const page = 1;

    const response = await movies.getMoviesList({ page });

    expect(response[0]).toHaveProperty('id');
    expect(response[0]).toHaveProperty('title');
  });

  it('Should return a movie', async () => {
    const movies = new Movies();
    const id = 297761;

    const response = await movies.getMovie({ id });

    expect(response).toHaveProperty('id');
    expect(response).toHaveProperty('title');
    expect(response).toHaveProperty('production_companies');
  });
});