import React from 'react';
import { graphql } from 'gatsby';

import FaqItem from '../components/faqItem';
import SEO from '../components/SEO';

const FaqPage = ({ data }) => {
  const {
    allSanityFaqs: { nodes },
  } = data;

  const { title, content, faqArr } = nodes[0];

  return (
    <>
      <SEO title="FAQS" />
      <h1>{title}</h1>
      <p>{content}</p>
      {faqArr.map(({ question, answer }, i) => (
        <FaqItem key={i} question={question} answer={answer} />
      ))}
    </>
  );
};

export default FaqPage;

export const query = graphql`
  query AllFaqs {
    allSanityFaqs {
      nodes {
        title
        content
        faqArr {
          question
          answer
        }
      }
    }
  }
`;
