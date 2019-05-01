import gql from 'graphql-tag';

export const myPost = gql`
  query post($where: post_bool_exp) {
    post(where: $where) {
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
