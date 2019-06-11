import React, { Component } from 'react';
import Layout from '../components/layout';
import { graphql, Link } from 'gatsby';

//Static query can be used anywhere
//Does not accept variables
//can't use context

//Page Query
//Must be used on pages

export default class postLayout extends Component {
  render() {
    const { markdownRemark } = this.props.data;
    return (
      <Layout>
        <div>
          <h1>{markdownRemark.frontmatter.title}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: markdownRemark.html,
            }}
          />
        </div>
        <Link to={`/`}>Back to Front</Link>
      </Layout>
    );
  }
}

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        slug
      }
    }
  }
`;
