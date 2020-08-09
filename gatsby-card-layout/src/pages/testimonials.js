import React from 'react'
import { Link } from 'gatsby'
import '../assets/locales/i18n'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

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
              <BannerLanding title={t('Testimonials')} />

              <div id="main" className="alt">
                <section id="one">
                  <div className="inner">
                    <header className="major">
                      <h1>Elements</h1>
                    </header>

                    <h2 id="content">Sample Content</h2>
                    <p>
                      Praesent ac adipiscing ullamcorper semper ut amet ac
                      risus. Lorem sapien ut odio odio nunc. Ac adipiscing nibh
                      porttitor erat risus justo adipiscing adipiscing amet
                      placerat accumsan. Vis. Faucibus odio magna tempus
                      adipiscing a non. In mi primis arcu ut non accumsan
                      vivamus ac blandit adipiscing adipiscing arcu metus
                      praesent turpis eu ac lacinia nunc ac commodo gravida
                      adipiscing eget accumsan ac nunc adipiscing adipiscing.
                    </p>
                    <div className="grid-wrapper">
                      <div className="col-6">
                        <h3>{t('Removal Defense')}</h3>
                        <p>
                          Nunc lacinia ante nunc ac lobortis. Interdum
                          adipiscing gravida odio porttitor sem non mi integer
                          non faucibus ornare mi ut ante amet placerat aliquet.
                          Volutpat commodo eu sed ante lacinia. Sapien a lorem
                          in integer ornare praesent commodo adipiscing arcu in
                          massa commodo lorem accumsan at odio massa ac ac.
                          Semper adipiscing varius montes viverra nibh in
                          adipiscing blandit tempus accumsan.
                        </p>
                      </div>
                      <div className="col-6">
                        <h3>{t('Humanitarian Visas')}</h3>
                        <p>
                          In arcu accumsan arcu adipiscing accumsan orci ac.
                          Felis id enim aliquet. Accumsan ac integer lobortis
                          commodo ornare aliquet accumsan erat tempus amet
                          porttitor. Ante commodo blandit adipiscing integer
                          semper orci eget. Faucibus commodo adipiscing mi eu
                          nullam accumsan morbi arcu ornare odio mi adipiscing
                          nascetur lacus ac interdum morbi accumsan vis mi
                          accumsan ac praesent.
                        </p>
                      </div>
                      <div className="col-6">
                        <h3>{t('Family-based Immigration')}</h3>
                        <p>
                          Nunc lacinia ante nunc ac lobortis. Interdum
                          adipiscing gravida odio porttitor sem non mi integer
                          non faucibus ornare mi ut ante amet placerat aliquet.
                          Volutpat eu sed ante lacinia sapien lorem accumsan
                          varius montes viverra nibh in adipiscing blandit
                          tempus accumsan.
                        </p>
                      </div>
                      <div className="col-6">
                        <h3>{t('Naturalization')}</h3>
                        <p>
                          Nunc lacinia ante nunc ac lobortis. Interdum
                          adipiscing gravida odio porttitor sem non mi integer
                          non faucibus ornare mi ut ante amet placerat aliquet.
                          Volutpat eu sed ante lacinia sapien lorem accumsan
                          varius montes viverra nibh in adipiscing blandit
                          tempus accumsan.
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
