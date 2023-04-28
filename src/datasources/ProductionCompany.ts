import axios from 'axios';

export class ProductionCompany {
  private URL = 'https://api.themoviedb.org/3';
  private TOKEN = '16d5d710a1d2df0d971d0f77f928af7e';

  constructor() {}

  async getProductionCompany({ id }) {
    const response = await axios.get(`${this.URL}/company/${id}?api_key=${this.TOKEN}`);
    return response.data;
  }
}