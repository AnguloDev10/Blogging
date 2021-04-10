import React, { Component } from 'react';
import Posts from './containers/Posts';
import styled from 'styled-components';
const Container = styled.div`
  max-width: 980px;
  margin: 0 auto;
`;
class App extends Component {
  render() {
    return (
      <Container>
        <h1>React blog</h1>
        <h2>Posts: </h2>
        <Posts />
      </Container>
    );
  }
}

export default App;

