import React from 'react';
import { shallow } from 'enzyme';
import SwitchCurrency from './index';
import { useExchangeContext } from '../../contexts/exchange';

jest.mock('../../contexts/exchange');

useExchangeContext.mockImplementation(() => ({}));

describe('SwitchCurrency', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    const wrapper = shallow(<SwitchCurrency />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('Button').prop('isLoading')).toBeFalsy();
  });

  it('renders loading state correctly', () => {
    useExchangeContext.mockImplementation(() => ({
      isLoadingRate: true,
    }));

    const wrapper = shallow(<SwitchCurrency />);

    expect(wrapper.find('Button').prop('isLoading')).toBe(true);
  });

  it('triggers the handleSwitchCurrency method on button click', () => {
    const mockHandleSwitchCurrency = jest.fn();
    useExchangeContext.mockImplementation(() => ({
      handleSwitchCurrency: mockHandleSwitchCurrency,
    }));

    const wrapper = shallow(<SwitchCurrency />);
    wrapper.find('Button').simulate('click');
    expect(mockHandleSwitchCurrency).toHaveBeenCalled();
  });
});
