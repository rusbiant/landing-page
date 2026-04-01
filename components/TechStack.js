import styles from './TechStack.module.css';

const techs = [
  { name: 'Node.js', icon: '🟢', desc: 'Runtime Environment' },
  { name: 'Express.js', icon: '🚂', desc: 'Backend Framework' },
  { name: 'PostgreSQL', icon: '🐘', desc: 'Relational Database' },
  { name: 'AWS', icon: '☁️', desc: 'Cloud Infrastructure' },
  { name: 'Alibaba Cloud', icon: '🌩️', desc: 'Enterprise Cloud' }
];

export default function TechStack() {
  return (
    <section id="tech-stack" className={styles.techSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Powered By Next-Gen Technologies</h2>
          <p className={styles.subtitle}>We utilize industry-leading tools to ensure scalability, security, and performance.</p>
        </div>
        <div className={styles.grid}>
          {techs.map((tech) => (
            <div key={tech.name} className={styles.card}>
              <div className={styles.icon}>{tech.icon}</div>
              <h3 className={styles.cardTitle}>{tech.name}</h3>
              <p className={styles.cardDesc}>{tech.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
