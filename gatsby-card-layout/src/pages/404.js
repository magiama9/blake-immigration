import React from 'react'
import Layout from '../components/layout'
import { Translation, Trans } from 'react-i18next'

const NotFoundPage = () => (
  <Layout>
    <Translation>
      {t => (
        <div id="main" className="alt">
          <section id="one">
            <div className="inner">
              <h1>{t('PAGE NOT FOUND')}</h1>
              <p>{t("We're sorry, that page doesn't seem to exist.")}</p>
            </div>
          </section>
        </div>
      )}
    </Translation>
  </Layout>
)

export default NotFoundPage
