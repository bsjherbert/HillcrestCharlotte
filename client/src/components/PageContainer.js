import React from 'react'
import Container from '@material-ui/core/Container';

function PageContainer(props) {
  return (
    <Container maxWidth="xl" className="page-container">
      {props.children}
    </Container>
  );
}

export default PageContainer;