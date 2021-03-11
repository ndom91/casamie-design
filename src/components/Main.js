import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        role="button"
        tabIndex={0}
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            This is a placeholder page for my past, present, and future work!
          </p>
          <div>
            Including:
            <ul>
              <li>Fashion Design</li>
              <li>Photography</li>
              <li>
                <a
                  href="https://www.modelmanagement.com/model/julide-demirtas/"
                  alt="Model Management"
                >
                  Modeling
                </a>
              </li>
            </ul>
          </div>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            Coming Soon! Promise{' '}
            <span aria-label="praying hands" role="img">
              🙏
            </span>
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About Mie</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            I am a young professional from Hanover, currently living in
            Frankfurt. I am a flight attendant by day, fashion design student by
            night, and my hobbies include photography, Netflix, and cheetos{' '}
            <span aria-label="tiger" role="img">
              🐯
            </span>
          </p>
          {close}
        </article>

        <article
          id="join"
          className={`${this.props.article === 'join' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Become a Member</h2>
          <form
            method="post"
            name="join"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="join" />
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="zodiac">Zodiac sign?</label>
              <input type="text" name="zodiac" id="zodiac" />
            </div>
            <div className="field first">
              <label htmlFor="super">Super power?</label>
              <input type="text" name="super" id="super" />
            </div>
            <div className="field">
              <label htmlFor="note">Anything else..?</label>
              <textarea name="note" id="note" rows="2"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Join Us!" className="special" />
              </li>
            </ul>
          </form>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form
            method="post"
            name="contact"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href=" https://www.facebook.com/julide.demirtas "
                className="icon fa-facebook"
              >
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/mieherself/"
                className="icon fa-instagram"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/ndom91" className="icon fa-github">
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
