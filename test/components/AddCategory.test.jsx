import { render, screen, fireEvent } from "@testing-library/react";
import AddCategory from "../../src/components/AddCategory";

describe('Tests on <AddCategory /> component', () => {

  test('should change value in input ', () => {
    render(<AddCategory addCategory={ ()=>{} } />);
    const input = screen.getByRole('textbox');
    fireEvent.input(input, { target: { value: 'Halo' } });
    // screen.debug();
    expect(input.value).toBe('Halo');
  });

  test('should call addCategory if input has a correct value', () => {
    const inputValue = 'Halo';
    const addCategory = jest.fn()
    render(<AddCategory addCategory={ addCategory } />);
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');
    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    expect(input.value).toBe('');
    expect(addCategory).toHaveBeenCalled();
    expect(addCategory).toHaveBeenCalledTimes(1);
    expect(addCategory).toHaveBeenCalledWith(inputValue);
  });

  test('should not call addCategory if input is empty', () => {
    const addCategory = jest.fn()
    render(<AddCategory addCategory={ addCategory } />);
    const form = screen.getByRole('form');
    fireEvent.submit(form);
    expect(addCategory).toHaveBeenCalledTimes(0);
    expect(addCategory).not.toHaveBeenCalled();
  });

});