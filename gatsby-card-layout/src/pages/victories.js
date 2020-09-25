import React from 'react'
import { Link } from 'gatsby'
import '../assets/locales/i18n'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import { Translation, Trans } from 'react-i18next'

class Victories extends React.Component {
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
              <BannerLanding title={t('Victories')} />

              <div id="main" className="alt">
                <section id="one">
                  <div className="inner">
                    <div className="grid-wrapper">
                      <div className="col-12">
                        <h3>{t('2020')}</h3>
                        <p>
                          <ul>
                            <li>
                              {t(
                                'Violence Against Women Act (VAWA) petition approved by U.S. Citizenship and Immigration Services (USCIS) for Honduran client who was abused by her U.S. lawful permanent resident husband (2020).'
                              )}
                            </li>
                          </ul>
                        </p>
                      </div>
                      <div className="col-6">
                        <h3>{t('2019')}</h3>
                        <p>
                          <ul>
                            <li>
                              {t(
                                'Obtained custody and Special Immigrant Juvenile Status (SIJS) order in Charles County, Maryland Circuit Court for minor El Salvadoran client.'
                              )}
                            </li>
                            <li>
                              {t(
                                'Cancellation of Removal for Non-Legal Permanent Residents granted for detained Honduran client in Arlington Immigration Court based on the hardship his removal would cause his three U.S. citizen daughters.'
                              )}
                            </li>
                            <li>
                              {t(
                                'Asylum granted for Honduran client in Arlington Immigration Court based on domestic violence she suffered from her former partner including a violent stabbing and attempted murder.'
                              )}
                            </li>
                            <li>
                              {t(
                                'Affirmative application for asylum approved at the Arlington Asylum Office for Turkish client based on her fear of political persecution.'
                              )}
                            </li>
                          </ul>
                        </p>
                      </div>
                      <div className="col-6">
                        <h3>{t('2018')}</h3>
                        <p>
                          <ul>
                            <li>
                              {t(
                                'Cancellation of Removal for Non-Legal Permanent Residents granted in Arlington Immigration Court for Honduran client based on the "exceptional and extremely unusual" hardship his U.S. citizen children, including a son who suffers from muscular dystrophy, would face if he were removed from the United States.'
                              )}
                            </li>
                            <li>
                              {t(
                                'Application for adjustment of status (green card) approved by U.S. Citizenship and Immigration Services (USCIS) for South Korean client based on her marriage to a U.S. citizen.'
                              )}
                            </li>
                            <li>
                              {t(
                                'Humanitarian asylum granted for Guatemalan client in Baltimore Immigration Court based on the severity of past persecution she suffered in her home country including child abuse and rape.'
                              )}
                            </li>
                          </ul>
                        </p>
                      </div>
                      <div className="col-6">
                        <h3>{t('2017')}</h3>
                        <li>{t('Secured lowest possible bond for detained client from Immigration Judge in Arlington Immigration Court.')}</li>
                        <li>{t("Obtained custody and Special Immigrant Juvenile Status (SIJS) orders for two minor El Salvadoran clients in Prince George's County, Maryland Circuit Court.")}</li>
                        
                      </div>
                      <div className="col-6">
                        <h3>{t('2016')}</h3>
                        <li>{t('Asylum granted in Arlington Immigration Court for El Salvadoran mother and child clients based on their fear of domestic violence.')}</li>
                        <li>{t('Registered a foreign custody order and obtained Special Immigrant Juvenile Status (SIJS) orders for three minor Guatemalan clients in Montgomery County, Maryland Circuit Court.')}</li>
                        <li>{t('Motion to Reopen a removal order granted by Baltimore Immigration Court for Honduran client who was not given notice of her removal hearing.')}</li>
                      </div>
                      <div className="col-6">
                        <h3>{t('2015')}</h3>
                        <li>{t('Legal Permanent Resident (LPR) Cancellation of Removal granted for detained Nicaraguan client in Arlington Immigration Court.')}</li>
                        <li>{t('Violence Against Women Act (VAWA) petition approved by U.S. Citizenship and Immigration Services (USCIS) for Filipina client who was abused by her U.S. citizen husband.')}</li>
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

export default Victories
