import React from 'react';
import Container from '../Container/Container';
import { pageContents,pageData} from '../../data/dataStore';
import Hero from './../Hero/Hero';

const Faq = () => (
  <Container>
    <h2>Faq</h2>
    <p>Kilka Pytań bez odpowiedzi.....</p>
    <Hero titleText={pageData.faqTitle} title={pageContents.subtitle} image={pageData.faqImage} />
  </Container>
);

export default Faq;