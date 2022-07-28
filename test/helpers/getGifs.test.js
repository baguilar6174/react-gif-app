import { getGifsByCategory } from "../../src/helpers/getGifs";

describe('Tests on getGifs file', () => {

  const category = "Halo";

  test('should return a gifs array', async () => {
    const gifs = await getGifsByCategory(category);
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    })
  });

});