import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import StyledLink from './styledLink';

describe('Button', () => {
    it('should match snapshot', () => {
        const { container } = render(
        <Router>
        <StyledLink to="/">Take a Break</StyledLink>
        </Router>
        )
        expect(container).toMatchSnapshot()
    })

})