import { renderHook } from '@testing-library/react-hooks';
import { useDateFormat, useDateRelative } from '.';

describe('test useDateFormat hook', () => {
  it('should format date', () => {
    const mockHook = jest.fn(useDateFormat);
    mockHook.mockReturnValue('12:00 AM - 31 Jan, 2022 GMT');
    const { result } = renderHook(() => mockHook(new Date('2022-01-31')));
    expect(result.current).toBe('12:00 AM - 31 Jan, 2022 GMT');
  });
});

describe('test useDateRelative hook', () => {
  it('should get relative time', () => {
    const mockHook = jest.fn(useDateRelative);
    mockHook.mockReturnValue({
      from: '2 months ago',
      fromNow: 'in 2 months',
      to: 'in 2 months',
      toNow: '2 months ago',
    });
    const { result } = renderHook(() => mockHook(new Date('2022-01-31')));
    expect(result.current.to).toBe('in 2 months');
  });
});
