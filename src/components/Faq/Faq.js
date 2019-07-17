import React from 'react';
import Container from '../Container/Container';
import { pageContents, listData} from '../../data/dataStore';
import Hero from './../Hero/Hero';

const Faq = () => (
  <Container>
    <h2>Faq</h2>
    <p>Kilka Pytań bez odpowiedzi.....</p>
    <Hero titleText={pageContents.title} title={pageContents.subtitle} image={listData.image} />
  </Container>
);

export default Faq;