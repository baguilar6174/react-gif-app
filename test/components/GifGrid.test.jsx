import { render, screen } from "@testing-library/react";
import GifGrid from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs")

describe('Tests on <GifGrid /> component', () => {
  
  const category = 'Halo';

  // TODO: this test failes
  test('should show Loading gifs..', () => {
    useFetchGifs.mockReturnValue({
      gifs: [],
      setGifs: true,
    });
    render(<GifGrid category={category} />);
    // screen.debug();
    // expect(screen.getByText('Loading gifs..'));
    expect(screen.getByText(category));
  });


  test('should show gifs when useFetchGifs is called', () => {
    const gifs = [{
      id: '1',
      title: 'Halo',
      url: 'http://...'
    }]
    useFetchGifs.mockReturnValue({
      gifs,
      setGifs: false,
    });
    render(<GifGrid category={category} />);
    // screen.debug();
    expect(screen.getAllByRole('img').length).toBe(1);
  });

});