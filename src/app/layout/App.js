import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import EventDasboard from '../../features/event/EventDashboard/EventDasboard';
import NavBar from '../../features/nav/NavBar/NavBar';

class App extends Component {
  render() {
    return ( 
      <Container className="main">
        <NavBar />
				<EventDasboard />
      </Container>
    );
  }
}

export default App;