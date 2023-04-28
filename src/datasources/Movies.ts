import axios from 'axios';

export class Movies {
  private URL = 'https://api.themoviedb.org/3';
  private TOKEN = '16d5d710a1d2df0d971d0f77f928af7e';

  constructor() {}

  async getMoviesList({ page }) {
    const response = await axios.get(`${this.URL}/movie/popular?page=${page}&api_key=${this.TOKEN}`);
    return response.data.results;
  }

  async getMovie({ id }) {
    const response = await axios.get(`${this.URL}/movie/${id}?api_key=${this.TOKEN}`);
    return response.data;
  }
}