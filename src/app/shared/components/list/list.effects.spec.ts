import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ListEffects } from './list.effects';

describe('ListEffects', () => {
  let actions$: Observable<any>;
  let effects: ListEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ListEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(ListEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
