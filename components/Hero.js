import styles from './Hero.module.css';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Enterprise-Grade <span className={styles.highlight}>API & Cloud Solutions</span>
          </h1>
          <p className={styles.description}>
            We build scalable, high-performance backend systems using Node.js and Express.js, seamlessly deployed to AWS and Alibaba Cloud. Empower your business with robust architecture.
          </p>
          <div className={styles.ctaGroup}>
            <Link href="#contact" className={styles.primaryCta}>Get Started</Link>
            <Link href="#services" className={styles.secondaryCta}>Explore Services</Link>
          </div>
        </div>
        
        <div className={styles.visual}>
          <div className={styles.codeWindow}>
            <div className={styles.windowHeader}>
              <span className={styles.dot}></span>
              <span className={styles.dot}></span>
              <span className={styles.dot}></span>
            </div>
            <div className={styles.codeContent}>
              <pre>
                <code>
{`// Express.js API Gateway Setup
const express = require('express');
const app = express();

app.get('/api/v1/cloud-status', (req, res) => {
  res.json({
    status: 'optimal',
    provider: 'AWS / Alibaba Cloud',
    latency: '12ms'
  });
});

app.listen(8080, () => {
  console.log('Server running on port 8080');
});`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
