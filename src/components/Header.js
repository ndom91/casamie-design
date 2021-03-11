import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-plane"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Maison Mie</h1>
        <p>by Jülide Demirtas</p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            style={{ margin: '0 auto' }}
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Intro
          </button>
        </li>
        <li>
          <button
            style={{ margin: '0 auto' }}
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Work
          </button>
        </li>
        <li>
          <button
            style={{ margin: '0 auto' }}
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            style={{ margin: '0 auto' }}
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
        <li>
          <button
            style={{ margin: '0 auto', fontWeight: '900' }}
            onClick={() => {
              props.onOpenArticle('join')
            }}
          >
            Become a member
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
