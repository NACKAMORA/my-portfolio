import styles from './About.module.css'

const supportSkills = ['Technical Support','Customer Service','Troubleshooting','Help Desk','Ticketing Systems','Documentation']
const cyberSkills = ['Network Security','Linux','CTF Challenges','SIEM Basics','Threat Analysis','Security+']

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.label}> about me</div>
      <h2>Who I Am</h2>
      <div className={styles.grid}>
        <div className={styles.text}>
          <p>I&apos;m a tech-passionate professional with hands-on experience in technical and customer support. I enjoy solving problems whether that&apos;s walking a user through a tough issue or digging into a system to find what&apos;s wrong.</p>
          <p>Alongside my support work, I&apos;ve been on an internship journey that&apos;s sharpening my professional skills, and I&apos;m actively studying cybersecurity to build a long-term career in digital defense.</p>
          <p>I believe great tech careers are built on curiosity, consistency, community and I&apos;m here for all three.</p>
        </div>
        <div>
          <p className={styles.skillLabel}>CORE SKILLS</p>
          <div className={styles.tags}>
            {supportSkills.map(s => <span key={s} className={styles.tag}>{s}</span>)}
          </div>
          <p className={styles.skillLabel} style={{marginTop:'1.5rem'}}>CYBERSECURITY</p>
          <div className={styles.tags}>
            {cyberSkills.map(s => <span key={s} className={`${styles.tag} ${styles.tagBlue}`}>{s}</span>)}
          </div>
        </div>
      </div>
    </section>
  )
}