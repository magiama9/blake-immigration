import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
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
            { name: 'keywords', content: 'immigration, law, asylum, Jillian Blake, removal defense, removal, defense, family, immigration' },
          ]}
        ></Helmet>

        <Banner />

        <div id="main">
          <section id="one" className="tiles">
            <article style={{ backgroundImage: `url(${pic01})` }}>
              <header className="major">
                <h3>Services</h3>
                <p>
                  Removal Defense, Humanitarian Visas, Family-based Immigration,
                  Naturalization
                </p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic02})` }}>
              <header className="major">
                <h3>Servicios</h3>
                <p>
                  Defensa de Deportación, Visas Humanitarias, Peticiones
                  Familiares, Naturalización
                </p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic03})` }}>
              <header className="major">
                <h3>About Us/Acerca De</h3>
                <p>Meet our team.</p>
                <p>Conozca a nuestro equipo.</p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic04})` }}>
              <header className="major">
                <h3>Social Media</h3>
                <p>Stay Up To Date</p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic05})` }}>
              <header className="major">
                <h3>Victories/Victorias</h3>
                <p>See what we've done</p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic06})` }}>
              <header className="major">
                <h3>Testimonials/Testimonios</h3>
                <p>Hear from people we've helped</p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
          </section>
          <section id="two">
            <div className="inner">
              <header className="major">
                <h2>Mission/Misión</h2>
              </header>
              <p>
                Our law firm is dedicated to offering excellent, affordable
                legal services to immigrants and refugees in the Washington, DC
                area. We represent our clients before the Arlington and
                Baltimore Immigration Courts, the Board of Immigration Appeals
                (BIA) and U.S. Citizenship and Immigration Services (USCIS) with
                a focus on removal (deportation) defense, asylum and
                family-based immigrant petitions. Our office is conveniently
                located in Old Town Alexandria, Virginia.
              </p>
              <p>
                Nuestro bufete se dedica a ofrecer servicios legales excelentes
                y económicos a inmigrantes y refugiados en el área de
                Washington, DC. Representamos a nuestros clientes ante los
                Tribunales de Inmigración de Arlington y Baltimore, la Junta de
                Apelaciones de Inmigración y los Servicios de Ciudadanía e
                Inmigración de los Estados Unidos con un enfoque en defensa de
                deportación, asilo y peticiones de inmigrantes familiares.
                Nuestra oficina está convenientemente ubicada en Old Town
                Alexandria, Virginia.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/landing" className="button next">
                    Get Started
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
