import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import jBlake from '../assets/images/j-blake-old-headshot.webp'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'
import { logo } from '../assets/images/SmallLogo.png'

const Contact = props => (
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

    <BannerLanding title="Contact Us" />

    <div id="main">
      
    </div>
  </Layout>
)

export default Contact