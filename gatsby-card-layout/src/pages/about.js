import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import jBlake from '../assets/images/j-blake-old-headshot.webp'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'
import { logo } from '../assets/images/SmallLogo.png'

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

    <BannerLanding title="About" />

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <Link to="/generic" className="image">
              <img src={logo} alt="" />
            </Link>
            <h2>Sed amet aliquam</h2>
          </header>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            magna sed nunc rhoncus condimentum sem. In efficitur ligula tate
            urna. Maecenas massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Nullam et orci eu lorem consequat tincidunt vivamus et
            sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula
            tate urna.
          </p>
        </div>
      </section>
      <section id="two" className="spotlights">
        <section>
          <Link to="/generic" className="image">
            <img src={logo} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Jillian Blake</h3>
              </header>
              <p>
                Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
                magna sed nunc rhoncus condimentum sem. In efficitur ligula tate
                urna. Maecenas massa sed magna lacinia magna pellentesque lorem
                ipsum dolor. Nullam et orci eu lorem consequat tincidunt.
                Vivamus et sagittis tempus.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn more
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <div>{/* Blank On Purpose For Layout */}</div>
        <section>
          <Link to="/generic" className="image">
            <img src={pic09} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Ami Patel</h3>
              </header>
              <p>
                Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
                magna sed nunc rhoncus condimentum sem. In efficitur ligula tate
                urna. Maecenas massa sed magna lacinia magna pellentesque lorem
                ipsum dolor. Nullam et orci eu lorem consequat tincidunt.
                Vivamus et sagittis tempus.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn more
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <div>{/* Blank On Purpose for Layout */}</div>
        <section>
          <Link to="/generic" className="image">
            <img src={pic10} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Jennifer Araujo</h3>
              </header>
              <p>
                Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
                magna sed nunc rhoncus condimentum sem. In efficitur ligula tate
                urna. Maecenas massa sed magna lacinia magna pellentesque lorem
                ipsum dolor. Nullam et orci eu lorem consequat tincidunt.
                Vivamus et sagittis tempus.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn more
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <div>{/* Blank On Purpose For Layout */}</div>
        <section>
          <Link to="/generic" className="image">
            <img src={pic09} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Karina Merchant</h3>
              </header>
              <p>
                Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
                magna sed nunc rhoncus condimentum sem. In efficitur ligula tate
                urna. Maecenas massa sed magna lacinia magna pellentesque lorem
                ipsum dolor. Nullam et orci eu lorem consequat tincidunt.
                Vivamus et sagittis tempus.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn more
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </div>
  </Layout>
)

export default About
