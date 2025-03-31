import { describe, it, expect } from 'vitest';

import { render } from '../../tests/test-utils';

import { Loader } from './';

describe('components/Loader', () => {
  it('should accept classNames', () => {
    const result = render(<Loader className="loader-className" />);

    expect(
      result.container.querySelector('.loader-className')
    ).toBeInTheDocument();
  });

  it('should render the Loader Component', () => {
    const result = render(<Loader className="loader-className" />);

    expect(result).toMatchSnapshot();
  });
});
