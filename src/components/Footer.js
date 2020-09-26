import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <p className="copyright">
      &copy;{' '}
      <a alt="ndom91" href="https://github.com/ndom91">
        ndom91
      </a>{' '}
      /{' '}
      <a alt="html5up" href="https://html5up.net">
        HTML5UP
      </a>{' '}
      /{' '}
      <a alt="GatsbyJS" href="https://www.gatsbyjs.org/">
        Gatsby.js
      </a>
    </p>
  </footer>
)

Footer.propTypes = {
  timeout: PropTypes.bool,
}

export default Footer
