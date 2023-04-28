import 'jest';
import { ProductionCompany } from '../ProductionCompany';

describe('Product Company', () => {
  it('Should return a product company', async () => {
    const productionCompany = new ProductionCompany();
    const id = 711;

    const response = await productionCompany.getProductionCompany({ id });

    expect(response).toHaveProperty('id');
    expect(response).toHaveProperty('name');
    expect(response).toHaveProperty('homepage');
  });
});