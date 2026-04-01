import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.logo}>
          <Link href="/">CloudForge</Link>
        </div>
        <div className={styles.navLinks}>
          <Link href="services">Services</Link>
          <Link href="tech-stack">Tech Stack</Link>
          <Link href="about">About Us</Link>
        </div>
        <div className={styles.navActions}>
          <Link href="contact" className={styles.primaryBtn}>Contact Us</Link>
        </div>
      </div>
    </nav>
  );
}
