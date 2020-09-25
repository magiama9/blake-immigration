import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import jBlake from '../assets/images/jillian_blake_headshot.png'
import kMerchant from '../assets/images/karina_merchant_headshot.jpg'
import jAraujo from '../assets/images/jennifer_araujo_headshot.jpg'
import aPatel from '../assets/images/ami_patel_headshot.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'
import { logo } from '../assets/images/SmallLogo.png'
import { Translation, Trans } from 'react-i18next'

const About = props => (
  <Layout>
    <Helmet
      title="Blake Immigration Law - About Us"
      meta={[
        {
          name: 'description',
          content:
            'Blake Immigration Law -- Specializing in Removal Defense, Asylum, and Family-based Immigration',
        },
        {
          name: 'keywords',
          content:
            'immigration, law, asylum, Jillian Blake, removal defense, removal, defense, family, immigration, about, us, about us',
        },
      ]}
    ></Helmet>
    <Translation>
      {t => (
        <div>
          <BannerLanding
            title={t('About Us')}
            subheader={t(
              'We are a group of hard-working legal professionals who handle each case with compassion, diligence, and integrity.'
            )}
          />

          <div id="main">
            <section id="two" className="spotlights">
              <section>
                <Link to="/generic" className="image">
                  <img src={jBlake} alt="" />
                </Link>
                <div className="content">
                  <div className="inner">
                    <header className="major">
                      <h3>Jillian Blake</h3>
                      <h4>{t('Attorney/Owner')}</h4>
                    </header>
                    <p>
                      {t(
                        'Jillian Blake is an attorney and owner of Blake Immigration Law since 2015. She grew up in San Francisco, California and earned her bachelor’s degree in international studies from Johns Hopkins University and master’s degree in international relations from the Johns Hopkins School of Advanced International Studies (SAIS). She then obtained her law degree from the University of Michigan Law School. During law school she discovered her passion for immigration and asylum law while interning at Asylum Access—Ecuador and Capital Area Immigrants’ Rights (CAIR) Coalition. Jillian is a member of the Maryland State Bar and the American Immigration Lawyers Association (AILA). She is also currently an adjunct professor of immigration law at George Mason University Law School in Arlington, Virginia. In her free time Jillian enjoys watching movies, writing, watching Cleveland Browns football and Nationals baseball, and spending time with her dog, Cha Cha.'
                      )}
                    </p>
                  </div>
                </div>
              </section>
              <div>{/* Blank On Purpose For Layout */}</div>
              <section>
                <Link to="/generic" className="image">
                  <img src={aPatel} alt="Ami Patel" />
                </Link>
                <div className="content">
                  <div className="inner">
                    <header className="major">
                      <h3>Ami Patel</h3>
                      <h4>{t('Associate Attorney')}</h4>
                    </header>
                    <p>
                      {t(
                        'Ami Patel is an associate attorney at Blake Immigration Law. She has worked at the firm since 2018, starting as a law graduate clerk and becoming an associate attorney in 2019. Ami grew up in Louisville, Kentucky and earned her bachelor’s degree in international relations and affairs from American University. She then obtained her law degree from George Washington University Law School. During law school she participated in the George Washington University Law School Immigration Clinic. She also interned at the Open Society Institute in Cambodia, the American Immigration Council, and the American Bar Association. As the daughter of immigrants, Ami loves that her work helps others find safety in the United States. Ami is a member of the California State Bar and the American Immigration Lawyers Association (AILA). In her free time Ami likes to read, hike, and seek out new restaurants.'
                      )}
                    </p>
                  </div>
                </div>
              </section>
              <div>{/* Blank On Purpose for Layout */}</div>
              <section>
                <img src={jAraujo} alt="Jennifer Araujo" />
                <div className="content">
                  <div className="inner">
                    <header className="major">
                      <h3>Jennifer Araujo</h3>
                      <h4>{t('Senior Paralegal')}</h4>
                    </header>
                    <p>
                      {t(
                        'Jennifer is a senior paralegal at Blake Immigration Law and has worked at the firm since 2017. She was born and raised in northern Virginia and earned her bachelor’s degree in political science from the Pennsylvania State University. During college she studied abroad in Barcelona, Spain. Jennifer currently attends law school part-time at the University of the District of Columbia (UDC) David A. Clarke School of Law. Jennifer also volunteers at the UDC Immigration and Human Rights Legal Clinic processing applications for adjustment of status and conducting legal research. She is passionate about helping immigrants obtain legal status in the United States and likes interacting with people from different cultural backgrounds. In her free time Jennifer enjoys spending time with her family and baking cakes.'
                      )}
                    </p>
                  </div>
                </div>
              </section>
              <div>{/* Blank On Purpose For Layout */}</div>
              <section>
                <img src={kMerchant} alt="Karina Merchant" />

                <div className="content">
                  <div className="inner">
                    <header className="major">
                      <h3>Karina Merchant</h3>
                    </header>
                    <p>
                      {t(
                        'Karina is a senior paralegal at Blake Immigration Law and has worked at the firm since 2017. She was born in Chihuahua, Mexico and immigrated to the United States with her family at the age of five. She then grew up in northern Virginia. Karina obtained her an associate’s degree from Northern Virginia Community College and is working towards her bachelor’s degree at George Mason University. Karina became interested in immigration law when she worked as an administrative assistant at another immigration law office and volunteered for the CARA Family Detention Protect. She feels humbled by the trust immigrants put in her to share their stories, especially about hardships they have endured. She enjoys the moment when she can see the direct impact her work has had on a client’s life because they have been able to gain legal status. She also really enjoys spending time with her dog, Stella.'
                      )}
                    </p>
                  </div>
                </div>
              </section>
              <section>
                {/* <img src={kMerchant} alt="Karina Merchant" /> */}

                <div className="content">
                  <div className="inner">
                    <header className="major">
                      <h3>Jose</h3>
                    </header>
                    <p>
                      {t(
                        'Jose is a paralegal at Blake Immigration Law and recently joined the firm in 2020. Jose was born in El Salvador and came to the United States with his family when he was eight years old. Jose earned his associate’s degree from Northern Virginia Community College and graduated with his bachelor’s degree in public administration from George Mason University. Jose interned at Just Neighbors, a non-profit organization that provides legal services to immigrants and worked at Grace Ministries, another non-profit organization that provides low-income immigrants with food and clothing. During college he was a member of Mason DREAMers, a student group that aids undocumented students in reaching their educational goals. Jose enjoys working in immigration law because he wants to help immigrants achieve their goals without fear of deportation. As a DACA recipient and first-generation college graduate himself, he knows how hard immigrants work to achieve their ambitions even with the obstacles they face. In his free time Jose likes to read, dance, and spend time with his pets. He and his family care for four dogs, one cat, and four birds.'
                      )}
                    </p>
                  </div>
                </div>
              </section>
            </section>
          </div>
        </div>
      )}
    </Translation>
  </Layout>
)

export default About
