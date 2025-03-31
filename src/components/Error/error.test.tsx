import { describe, it, expect, vi } from 'vitest';

import { render } from '../../tests/test-utils';

import { Error } from './';

describe('components/Error', () => {
  it('should accept classNames', () => {
    const result = render(<Error className="error-className" />);

    expect(
      result.container.querySelector('.error-className')
    ).toBeInTheDocument();
  });

  it('should handle Button click', async () => {
    const onRetry = vi.fn();
    const result = render(<Error onRetry={onRetry} />);

    await result.getByRole('button').click();

    expect(onRetry).toHaveBeenCalledTimes(1);
  });

  it('should render the Error Component', () => {
    const result = render(<Error className="error-className" />);

    expect(result).toMatchSnapshot();
  });
});
