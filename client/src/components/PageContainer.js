import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import MainNav from './Navigation/MainNav';

class PageContainer extends Component {
 render () {
   return (
    <Container maxWidth="lg">
      <MainNav />
    </Container>
    );
  }
}

export default PageContainer;