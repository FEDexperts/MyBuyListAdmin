import { recipesReducer, initialState } from './recipes.reducer';

describe('Recipes Reducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;

      const result = recipesReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
