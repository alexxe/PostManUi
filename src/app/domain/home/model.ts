import gql from 'graphql-tag';

export const allPost = gql`
  query post {
    post {
      body
      cover_imag
      created_on
      id
      intro
      slug
      title
    }
  }
`;
