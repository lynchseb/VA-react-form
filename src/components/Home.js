import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
// import { spacing } from '@material-ui/system';

export default function Home(props) {

  const { account, register } = props;
  
  return (
    
        <Jumbotron fluid={true}>
          <Button onClick={() => account()}>Account</Button>
          <Button onClick={() => register()}>Register</Button>
        </Jumbotron>
    
  );
}