import { IngrediantsModule } from './ingrediants.module';

describe('IngrediantsModule', () => {
  let ingrediantsModule: IngrediantsModule;

  beforeEach(() => {
    ingrediantsModule = new IngrediantsModule();
  });

  it('should create an instance', () => {
    expect(ingrediantsModule).toBeTruthy();
  });
});
