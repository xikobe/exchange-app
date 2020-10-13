import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import PocketsProvider, { usePocketsContext } from './index';

describe('PocketsProvider', () => {
  const wrapper = ({ children }) => <PocketsProvider>{children}</PocketsProvider>;

  it('should return the correct initial values', () => {
    const { result } = renderHook(() => usePocketsContext(), { wrapper });

    expect(result.current).toEqual({
      getBalance: expect.any(Function),
      makeExchange: expect.any(Function),
      pocket: {
        EUR: 90,
        USD: 100,
        GBP: 70,
      },
    });
  });

  describe('getBalance method', () => {
    it('returns the correct value for an existing currency', () => {
      const { result } = renderHook(() => usePocketsContext(), { wrapper });

      expect(result.current.getBalance('EUR')).toEqual(90);
    });

    it('handles an incorrect currency by returning undefined', () => {
      const { result } = renderHook(() => usePocketsContext(), { wrapper });

      expect(result.current.getBalance('foo')).toBeUndefined();
    });
  });

  describe('makeExchange method', () => {
    it('makes an exchange correctly given correct params', () => {
      const { result } = renderHook(() => usePocketsContext(), { wrapper });

      expect(result.current.pocket).toEqual(
        {
          EUR: 90,
          USD: 100,
          GBP: 70,
        },
      );

      act(() => {
        result.current.makeExchange({
          activeCurrency: 'USD', tradeCurrency: 'EUR', inputValue: 10, tradeValue: 20,
        });
      });

      expect(result.current.pocket).toEqual(
        {
          EUR: 110,
          USD: 90,
          GBP: 70,
        },
      );
    });
  });
});
