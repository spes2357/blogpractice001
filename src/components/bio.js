/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { SocialIcon } from 'react-social-icons';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  const avatar = data?.avatar?.childImageSharp?.fixed

  return (
    // <div className="bio">
    <React.Fragment>
      <Container>
        <Row style={{padding :"15px"}}>
          <div>
            {avatar && (
              <Image
                fixed={avatar}
                alt={author?.name || ``}
                className="bio-avatar"
                imgStyle={{
                  borderRadius: `10%`,
                }}
              />
            )}
          </div>
        </Row>
        <Row style={{padding :"15px"}}>
          <div>
            {author?.name && (
              <p>
                <strong>{author.name}</strong> {author?.summary || null}
                {` `}
                <a>
                </a>
              </p>
            )}
            <p>
              ellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu.
            </p>
          </div>
        </Row>
        <Row style={{padding :"15px"}}>
          <div style={{margin: "5px 5px 5px 5px"}}>
            <SocialIcon url="http://facebook.com/jaketrent" />
          </div>
          <div style={{margin: "5px 5px 5px 5px"}}>
            
            <SocialIcon url="http://instagram.com/jaketrent" />
          </div>
        </Row>
      </Container>
    </React.Fragment>
  )
}

export default Bio
