import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title" style={{ color: 'white' }}>
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://flowagent.nu"
            target="_blank"
            rel="noopener noreferrer"
            style={{marginRight: '1rem'}}>
            Website
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="https://app.flowagent.nu"
            target="_blank"
            rel="noopener noreferrer">
            App
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Tilpas FlowAgent til dine dine arbejdsgange`}
      description="FlowAgent skære dine arbejdsgange helt ind til benet. Væk med alt det overflødige. Goddag til en platform du kan trimme og tune til dit behov.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
