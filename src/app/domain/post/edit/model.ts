import gql from 'graphql-tag';

export const getPostBySlug = gql`
  query post($where: post_bool_exp) {
    post(where: $where) {
      cover_imag
      title
      body
      created_on
      user {
        name
      }
    }
  }
`;
