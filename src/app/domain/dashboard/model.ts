import gql from 'graphql-tag';

export const myPost = gql`
  query post($where: post_bool_exp) {
    post(where: $where) {
      id
      cover_imag
      intro
      title
    }
  }
`;
