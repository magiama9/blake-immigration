import React from 'react'
import { Translation, Trans } from 'react-i18next'

const Contact = props => (
  <Translation>
    {t => (
      <section id="contact">
        <div className="inner">
          <section>
            <form
              method="post"
              netlify-honeypot="bot-field"
              data-netlify="true"
              name="contact"
            >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />
              <div className="field half first">
                <label htmlFor="name">{t('Name')}</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="field half">
                <label htmlFor="email">{t('Email')}</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="field">
                <label htmlFor="message">{t('Message')}</label>
                <textarea name="message" id="message" rows="6"></textarea>
              </div>
              <ul className="actions">
                <li>
                  <input
                    type="submit"
                    value={t('Send Message')}
                    className="special"
                  />
                </li>
                <li>
                  <input type="reset" value={t('Clear')} />
                </li>
              </ul>
            </form>
          </section>
          <section className="split">
            <section>
              <div className="contact-method">
                <span className="icon alt fa-envelope"></span>
                <h3>Email</h3>
                <a href="mailto:jillian@blakeimmigration.com">jillian@blakeimmigration.com</a>
              </div>
            </section>
            <section>
              <div className="contact-method">
                <span className="icon alt fa-phone"></span>
                <h3>{t('Phone')}</h3>
                <a href="tel:703-594-7857">
                  {' '}
                  <span>(703) 594-7857</span>
                </a>
              </div>
            </section>
            <section>
              <div className="contact-method">
                <span className="icon alt fa-home"></span>
                <h3>Addresses</h3>
                <span>
                  <b>Mailing Address</b> <br />
                  1727 King Street, Suite 300
                  <br />
                  Alexandria, VA 22314
                  <br />
                </span>
                <span>
                  <b>Physical Address - Alexandria</b> <br />
                  1517 King Street
                  <br />
                  Alexandria, VA 22314
                  <br />
                </span>

                <span>
                  <b>Physical Address - Baltimore</b> <br />
                  10 E. North Avenue
                  <br />
                  Baltimore, MD 21218
                  <br />
                </span>
              </div>
            </section>
          </section>
        </div>
      </section>
    )}
  </Translation>
)

export default Contact
