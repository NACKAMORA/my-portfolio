import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.eyebrow}>Available for opportunities</div>
      <h1 className={styles.heading}>
        Hi, I&apos;m<br />
        <span className={styles.name}>Okeke Chinedu</span>
        <span className={styles.sub}>Technical Support Specialist· Cybersecurity Enthusiast · Problem Solver</span>
      </h1>
      <p className={styles.desc}>
        I bridge the gap between users and technology, from resolving complex support issues
        to exploring offensive and defensive security. Currently building skills, gaining
        experience, and growing fast.
      </p>
      <div className={styles.ctas}>
        <a href="#journey" className={`${styles.btn} ${styles.btnPrimary}`}>View My Journey</a>
        <a href="#contact" className={`${styles.btn} ${styles.btnOutline}`}>Get In Touch</a>
      </div>
    </section>
  )
}