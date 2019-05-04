import gql from 'graphql-tag';

export const allPost = gql`
  query post {
    post {
      id
      cover_imag
      intro
      title
      slug
    }
  }
`;
