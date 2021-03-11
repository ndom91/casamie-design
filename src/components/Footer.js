import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <p className="copyright">
      &copy;{' '}
      <a
        alt="ndom91"
        target="_blank"
        href="https://github.com/ndom91/casamie-design"
      >
        ndom91
      </a>{' '}
      /{' '}
      <a
        alt="GatsbyJS"
        target="_blank"
        rel="noopener noreferer"
        href="https://www.gatsbyjs.org/"
      >
        Gatsby
      </a>
    </p>
  </footer>
)

Footer.propTypes = {
  timeout: PropTypes.bool,
}

export default Footer
