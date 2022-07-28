import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Tests on useFetchGifs hook', () => {

  test('should return initial state', () => {
    const { result } = renderHook( () =>  useFetchGifs('Halo'));
    const { gifs, isLoading } = result.current;
    expect(gifs.length).toBe(0);
    expect(isLoading).toBe(true);
  });

  test('should return gifs and isLoading = false', async () => {
    const { result } = renderHook( () =>  useFetchGifs('Halo'));
    await waitFor(
      () => expect(result.current.gifs.length).toBeGreaterThan(0),
      // {
      //   timeout: 5000
      // }
    );
    const { gifs, isLoading } = result.current;
    expect(gifs.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });

});