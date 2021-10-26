import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import StyledLink from './components/styledLink';


function App() {
  return (
    <Router>
    <StyledLink to="/">
      We are getting started.
    </StyledLink>
    </Router>
  );
}

export default App;
