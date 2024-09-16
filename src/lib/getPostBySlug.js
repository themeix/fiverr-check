import { GraphQLClient, gql } from 'graphql-request';

const GET_POST_BY_SLUG = gql`
  query PostBySlug($slug: String!) {
    postBy(slug: $slug) {
      id
      title
      content
      featuredImage {
        node {
          sourceUrl
        }
      }
      author {
        node {
          name
        }
      }
      categories {
        nodes {
          name
        }
      }
    }
  }
`;

const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT);

export async function getPostBySlug(slug) {
  try {
    const data = await client.request(GET_POST_BY_SLUG, { slug });
    return data.postBy;
  } catch (error) {
    console.error('Error fetching post by slug:', error);
    return null;
  }
}
