import { describe, it, expect } from 'vitest';

import { render } from '../../tests/test-utils';

import { Header } from './';

describe('components/Header', () => {
  it('should render the Header Component', () => {
    const result = render(<Header />);

    expect(result).toMatchSnapshot();
  });
});
