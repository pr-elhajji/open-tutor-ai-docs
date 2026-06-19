import { useState, type ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

// Import the SVG using the same pattern as in your example
const HeroSvg = require('@site/static/img/banner.svg').default;

const GITHUB_URL = 'https://github.com/Open-TutorAi/open-tutor-ai-CE';
const DISCORD_URL = 'https://discord.gg/BTQtE2deEm';

const QUICK_START_COMMANDS = [
  'git clone https://github.com/Open-TutorAi/open-tutor-ai-CE.git && cd open-tutor-ai-CE',
  'cp .env.example .env',
  'docker compose --env-file .env -f devops/docker/docker-compose.yaml up --build',
];

function HomepageHeader() {
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty('--mx', `${x}%`);
    e.currentTarget.style.setProperty('--my', `${y}%`);
  };

  return (
    <header className={styles.heroBanner} onMouseMove={handleMouseMove}>
      <div className={styles.heroGrid} aria-hidden="true" />
      <div className={styles.heroBlobs} aria-hidden="true">
        <span className={clsx(styles.heroBlob, styles.heroBlob1)} />
        <span className={clsx(styles.heroBlob, styles.heroBlob2)} />
      </div>
      <div className={styles.heroSpotlight} aria-hidden="true" />
      <div className="container">
        <div className={styles.heroContent}>
          {/* Left — copy + actions */}
          <div className={styles.leftSection}>
            <span className={styles.heroEyebrow}>Open-source AI tutoring platform</span>
            <Heading as="h1" className={styles.heroTitle}>
              Personalized AI tutoring,
              <br />
              built for the classroom
            </Heading>
            <p className={styles.heroSubtitle}>
              An open-source project designed to provide an educational and
              collaborative AI-powered platform.
            </p>

            <div className={styles.buttons}>
              <Link
                className={clsx('button button--lg', styles.buttonPrimary)}
                to="/docs/getting-started"
              >
                Get Started
              </Link>
              <Link
                className={clsx('button button--lg', styles.buttonSecondary)}
                to="/docs/intro"
              >
                Documentation
              </Link>
            </div>

            <div className={styles.heroMeta}>
              <a
                className={styles.metaBadge}
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://img.shields.io/github/stars/Open-TutorAi/open-tutor-ai-CE?style=social"
                  alt="Star Open TutorAI on GitHub"
                />
              </a>
              <a
                className={styles.metaLink}
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 Join our Discord
              </a>
            </div>
          </div>

          {/* Right — illustration */}
          <div className={styles.rightSection}>
            <HeroSvg
              className={styles.heroSvg}
              role="img"
              aria-label="Open TutorAI — collaborative AI tutoring illustration"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

function Terminal() {
  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    navigator.clipboard?.writeText(QUICK_START_COMMANDS.join('\n')).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className={styles.terminal}>
      <div className={styles.terminalBar}>
        <span className={clsx(styles.dot, styles.dotRed)} />
        <span className={clsx(styles.dot, styles.dotYellow)} />
        <span className={clsx(styles.dot, styles.dotGreen)} />
        <span className={styles.terminalTitle}>bash — open-tutor-ai-CE</span>
        <button type="button" className={styles.terminalCopy} onClick={onCopy}>
          {copied ? '✓ Copied' : 'Copy'}
        </button>
      </div>
      <div className={styles.terminalBody}>
        {QUICK_START_COMMANDS.map((cmd, i) => (
          <div key={i} className={styles.terminalLine}>
            <span className={styles.prompt}>$</span>
            <span className={styles.cmd}>{cmd}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function QuickStart() {
  return (
    <section className={styles.quickStart}>
      <div className="container">
        <Heading as="h2" className={styles.quickStartTitle}>
          ⚡ Up and running in minutes
        </Heading>
        <p className={styles.quickStartSubtitle}>
          Spin up the full stack with Docker — API, realtime, and frontend in a single command.
        </p>
        <Terminal />
        <p className={styles.quickStartHint}>
          Prefer a manual setup? Follow the{' '}
          <Link to="/docs/getting-started">Getting Started guide</Link>.
        </p>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className={styles.ctaBand}>
      <div className="container">
        <Heading as="h2" className={styles.ctaTitle}>
          Ready to bring AI tutoring to your classroom?
        </Heading>
        <p className={styles.ctaSubtitle}>
          Open-source, self-hosted, and built for education.
        </p>
        <div className={styles.ctaButtons}>
          <Link
            className={clsx('button button--lg', styles.buttonPrimary)}
            to="/docs/getting-started"
          >
            Get Started
          </Link>
          <Link
            className={clsx('button button--lg', styles.buttonSecondary)}
            to="/docs/architecture"
          >
            Explore the Architecture
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title="Open TutorAI — Open-source AI tutoring platform"
      description={siteConfig.tagline}
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <QuickStart />
        <CallToAction />
      </main>
    </Layout>
  );
}
