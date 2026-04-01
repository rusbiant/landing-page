import styles from './Footer.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brandInfo}>
            <Link href="/" className={styles.logo}>CloudForge</Link>
            <p className={styles.desc}>Enterprise API and Cloud Solutions Provider.</p>
          </div>
          <div className={styles.linksBlock}>
            <h4>Company</h4>
            <Link href="#about">About Us</Link>
            <Link href="#careers">Careers</Link>
          </div>
          <div className={styles.linksBlock}>
            <h4>Services</h4>
            <Link href="#services">API Development</Link>
            <Link href="#services">Cloud Migration</Link>
          </div>
          <div className={styles.linksBlock}>
            <h4>Contact</h4>
            <a href="mailto:hello@cloudforge.app" className={styles.link}>hello@cloudforge.app</a>
            <p>1-800-CLOUDFORGE</p>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} CloudForge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
