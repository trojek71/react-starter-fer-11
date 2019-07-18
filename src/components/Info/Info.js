import React from 'react';
import Container from '../Container/Container';
import { pageContents,pageData} from '../../data/dataStore';
import Hero from '../Hero/Hero';


const Info = () => (
     
     
    
  <Container >
   
    <h2>Info</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <Hero titleText={pageData.infoTitle} title={pageContents.subtitle} image={pageData.infoImage} />
  </Container>

  
);


  


export default Info;