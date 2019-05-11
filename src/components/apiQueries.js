import { graphql } from "gatsby";

  export const query = graphql`
  fragment ApiQueriesFragment on Query {
    productsSection: allMarkdownRemark(
      filter: { fields: { slug: { eq: "/tpv-products/" } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            slogan
            slogan_sub
            product_claim
            abgebende_eltern {
              heading
              subheading
              abgebende_eltern_left_columns {
                headline
                contents
              }
              abgebende_eltern_right_columns {
                headline
                contents
              }
            }
            tagesfamilien {
              heading
              subheading
              tagesfamilien_left_columns {
                headline
                contents
              }
              tagesfamilien_right_columns {
                headline
                contents
              }
            }
          }
        }
      }
    }
    infoSections: allMarkdownRemark(
      filter: { fields: { slug: { ne: "/tpv-products/" } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
  `;