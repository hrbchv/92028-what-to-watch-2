import {reducer} from "./reducer";

describe(`Business logic is correct`, () => {
  it(`Reducer should change genre correctly`, () => {
    expect(reducer({
      currentGenre: `All genres`,
    }, {
      type: `CHANGE_GENRE`,
      payload: `Dramas`,
    })).toEqual({
      currentGenre: `Dramas`,
    });
  });
});
