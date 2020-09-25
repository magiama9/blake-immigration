import React from 'react'
import { Link } from 'gatsby'
import '../assets/locales/i18n'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import { Translation, Trans } from 'react-i18next'

class Testimonials extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="Blake Immigration Law"
          meta={[
            {
              name: 'description',
              content:
                'Blake Immigration Law -- Specializing in Removal Defense, Asylum, and Family-based Immigration',
            },
            {
              name: 'keywords',
              content:
                'immigration, law, asylum, Jillian Blake, removal defense, removal, defense, family, immigration',
            },
          ]}
        ></Helmet>
        <Translation>
          {t => (
            <div>
              <BannerLanding
                title={t('Testimonials')}
                subheader={t("Hear from the people we've helped")}
              />

              <div id="main" className="alt">
                <section id="one">
                  <div className="inner">
                   
                    <div className="grid-wrapper">
                      <div className="col-6">
                        <p>
                          {t(
                            '“The lawyer I had in Miami when I got out of the detention center recommended [Blake] Immigration Law. My experience with the firm has always been very good even from the consult when Jillian explained to me the process of my case. Jillian is a great lawyer, the fact that she speaks to me in Spanish is huge and helped me feel comfortable. In my case, it was favorable, and I owe that Jillian’s dedication and the fact that’s she’s always been nothing but a professional. My outcome was favorable I was granted asylum. The best thing about my case is that I am now legally here in the United States and also having my family able to be legally in the U.S."'
                          )}
                        </p>
                        <h3>- N.B.</h3>
                      </div>
                      <div className="col-6">
                        <p>
                          {t(
                            '"I was volunteering at a community center when Jillian came to give some information for immigrants. After hearing what she had to say there, I made an appointment because I was eager to have my case reopened and go before a judge. Jillian was able to reopen my case and after the whole process the judge granted me Cancellation of Removal. My experience with the firm has been great. I’ve always been given a full explanation of my immigration processes with patience. They’re aware and vigilant. Anything I needed to know about my case and court like any updates or courts – I was made aware immediately. My life has been affected positively. Thanks to her I feel confident to come out of the shadows."'
                          )}
                          <h3>- C.M.</h3>
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          )}
        </Translation>
      </Layout>
    )
  }
}

export default Testimonials
