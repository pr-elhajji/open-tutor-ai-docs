import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const SmartLearning = require('@site/static/img/smart-learning.svg').default;
const RichContent = require('@site/static/img/rich-content.svg').default;
const Collaborative = require('@site/static/img/collaborative.svg').default;
const Students = require('@site/static/img/students.svg').default;
const Teachers = require('@site/static/img/teachers.svg').default;
const Parents = require('@site/static/img/parents.svg').default;

const FEATURES = [
  {
    kicker: 'Personalized learning',
    title: 'Student-built Supports',
    description:
      'Learners create their own AI-guided tutoring sessions through a step-by-step wizard — subject, course, objectives, level, and details — so every session fits their goals.',
    link: { to: '/docs/features/student-features', label: 'Explore student features' },
    Svg: Collaborative,
    reverse: false,
  },
  {
    kicker: 'Knowledge',
    title: 'Learn from your own materials',
    description:
      'Bring your textbooks, lecture notes, and trusted online sources right into the conversation — so every answer stays grounded in what you are actually studying.',
    link: { to: '/docs/features', label: 'Browse all features' },
    Svg: RichContent,
    reverse: true,
  },
  {
    kicker: 'Engagement',
    title: 'Avatar Discussion Mode',
    description:
      'Go beyond text: an avatar-powered tutor with integrated voice and video brings a face-to-face style of tutoring to every learner.',
    link: { to: '/docs/features', label: 'Browse all features' },
    Svg: SmartLearning,
    reverse: false,
  },
];

const ROLES = [
  {
    title: 'Students',
    Svg: Students,
    to: '/docs/features/student-features',
    text: 'Join classrooms, build your own tutoring supports, and learn with an avatar tutor.',
  },
  {
    title: 'Teachers',
    Svg: Teachers,
    to: '/docs/features/teacher-features',
    text: 'Create classrooms and courses, share resources, and design personalized supports.',
  },
  {
    title: 'Parents',
    Svg: Parents,
    to: '/docs/features/parent-features',
    text: "Stay connected to your child's learning journey on the platform.",
  },
];

function AltFeature({ kicker, title, description, link, Svg, reverse }) {
  return (
    <div className={clsx(styles.altRow, reverse && styles.altRowReverse)}>
      <div className={styles.altText}>
        <span className={styles.kicker}>{kicker}</span>
        <Heading as="h3" className={styles.altTitle}>{title}</Heading>
        <p className={styles.altDesc}>{description}</p>
        <Link className={styles.altLink} to={link.to}>{link.label} →</Link>
      </div>
      <div className={styles.altMedia}>
        <Svg className={styles.altSvg} role="img" aria-label={title} />
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHead}>
          <Heading as="h2" className={styles.sectionTitle}>
            Everything you need to teach with AI
          </Heading>
          <p className={styles.sectionSub}>
            Self-hosted, open-source, and purpose-built for education.
          </p>
        </div>

        {FEATURES.map((f, i) => (
          <AltFeature key={i} {...f} />
        ))}

        <div className={styles.sectionHead}>
          <Heading as="h2" className={styles.sectionTitle}>
            Built for everyone in the classroom
          </Heading>
        </div>
        <div className={styles.roleGrid}>
          {ROLES.map((r, i) => (
            <Link key={i} to={r.to} className={styles.roleCard}>
              <r.Svg className={styles.roleCardSvg} role="img" aria-label={r.title} />
              <Heading as="h3" className={styles.roleCardTitle}>{r.title}</Heading>
              <p className={styles.roleCardText}>{r.text}</p>
              <span className={styles.roleCardLink}>Learn more →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
