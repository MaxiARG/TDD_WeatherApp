import { render, screen, fireEvent } from '@testing-library/react-native';
import {it} from '@jest/globals';
import renderer from 'react-test-renderer';
import { _forEach } from '../../src/metodos/_forEach';
import axios from 'axios';

it('test _forEach', () => {
    const mockCallback = jest.fn(x => 42 + x);

    _forEach([0, 1], mockCallback);

    // The mock function was called twice
    expect(mockCallback.mock.calls).toHaveLength(2);

    // The first argument of the first call to the function was 0
    expect(mockCallback.mock.calls[0][0]).toBe(0);

    // The first argument of the second call to the function was 1
    expect(mockCallback.mock.calls[1][0]).toBe(1);

    // The return value of the first call to the function was 42
    expect(mockCallback.mock.results[0].value).toBe(42);

    // The function was called exactly once
    expect(mockCallback.mock.calls).toHaveLength(2);

});

it('Mock valores de retorno _forEach', () => {
    const mockCallback = jest.fn();

    mockCallback
    .mockReturnValueOnce(12)

    _forEach([0, 1], mockCallback);

    const filterTestFn = jest.fn();

    // Make the mock return `true` for the first call,
    // and `false` for the second call
    filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

    const result = [11, 12].filter(num => filterTestFn(num));

});




