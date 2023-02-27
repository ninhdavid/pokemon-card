import { render } from '@testing-library/react';

import LiveSearch from './live-search';

describe('LiveSearch', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LiveSearch />);
    expect(baseElement).toBeTruthy();
  });
});
