import { render, screen } from "@testing-library/react";
import GifItem from "../../src/components/GifItem";

describe('Tests on <GifItem /> component', () => {

  const title = "Master Chief Halo GIF by Xbox";
  const url = "https://media2.giphy.com/media/b4ab9TBk9Ornvrt9W8/giphy-downsized-medium.gif?cid=8c7595b4vldb5u0mu6eldps3w7w0hcatlqsudgtzz74uuwox&rid=giphy-downsized-medium.gif&ct=g";

  test('should be match with the snapshot', () => {
    const { container } = render(
      <GifItem title={title} url={url} />
    );
    expect(container).toMatchSnapshot();
  });

  test('should be show rhe image with url and alt', () => {
    render(<GifItem title={title} url={url} />);
    // screen.debug();
    
    // expect(screen.getByRole('img').src).toBe(url);
    // expect(screen.getByRole('img').alt).toBe(title);

    const {src, alt} = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(title);

  });

  test('should be show the title', () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });

});