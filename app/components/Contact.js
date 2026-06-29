import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.label}>// contact</div>
      <h2>Let&apos;s Connect</h2>
      <div className={styles.grid}>
        <div className={styles.text}>
          <p>Whether you&apos;re a recruiter, a fellow learner, or someone building something interesting in tech, I&apos;d love to hear from you.</p>
          <p>I&apos;m open to internships, entry-level roles, collaborations, and mentorship.</p>
          <a href="https://mail.google.com/mail/?view=cm&to=okekechinedu516@gmail.com" className={styles.emailBtn}>✉ Send an Email</a>
        </div>
        <div className={styles.links}>
          <a href="https://www.linkedin.com/in/okeke-chinedu-7b3435248" className={styles.link} target="_blank" rel="noreferrer">
            <span className={styles.linkIcon}>in</span>
            <span>LinkedIn —okeke-chinedu</span>
          </a>
          <a href="https://x.com/EDUDIA11" className={styles.link} target="_blank" rel="noreferrer">
            <span className={styles.linkIcon}>𝕏</span>
            <span>X / Twitter — @edudia11</span>
          </a>
          <a href="https://github.com/yourusername" className={styles.link} target="_blank" rel="noreferrer">
            <span className={styles.linkIcon}>⌥</span>
            <span>GitHub — /yourusername</span>
          </a>
          <a href="#" className={styles.link}>
            <span className={styles.linkIcon}>📄</span>
            <span>Download CV / Resume</span>
          </a>
        </div>
      </div>
    </section>
  )
}