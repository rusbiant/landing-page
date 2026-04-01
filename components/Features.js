import styles from './Features.module.css';

const features = [
  {
    title: 'Custom API Development',
    desc: 'Bespoke RESTful and GraphQL APIs built with Express.js to perfectly align with your business logic and integrate seamlessly with your frontend apps.'
  },
  {
    title: 'Cloud Architecture & Migration',
    desc: 'Expertise in architecting scalable infrastructure on AWS and Alibaba Cloud, ensuring high availability, fault tolerance, and cost efficiency.'
  },
  {
    title: 'Database Optimization',
    desc: 'Advanced PostgreSQL schema design, indexing strategies, and query optimization to handle massive data loads with lightning speed.'
  },
  {
    title: 'Secure by Default',
    desc: 'Implementation of industry standard authentication algorithms, rate limiting, data encryption and compliance-ready architectures.'
  }
];

export default function Features() {
  return (
    <section id="services" className={styles.featureSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.content}>
            <h2 className={styles.title}>Why Choose CloudForge?</h2>
            <p className={styles.subtitle}>
              We are a team of expert engineers dedicated to providing world-class backend and cloud solutions tailored for enterprise scale. 
            </p>
          </div>
          <div className={styles.featuresList}>
            {features.map((feature, i) => (
              <div key={i} className={styles.featureItem}>
                <div className={styles.featureMarker}>0{i+1}</div>
                <div>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDesc}>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
