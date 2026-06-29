import styles from './Projects.module.css'

const projects = [
  {
    icon: '🛡️',
    title: 'Home Security Lab',
    desc: 'Set up a virtual network to practice threat detection, log analysis, and basic penetration testing safely.',
    tags: ['Kali Linux', 'VirtualBox', 'Wireshark'],
    blue: true,
  },
  {
    icon: '🎯',
    title: 'CTF Challenges',
    desc: 'Participated in beginner-to-intermediate Capture The Flag competitions to sharpen offensive security thinking.',
    tags: ['TryHackMe', 'HackTheBox', 'OSINT'],
    blue: true,
  },
  {
    icon: '📋',
    title: 'Support Knowledge Base',
    desc: 'Documented recurring customer issues and resolutions into a structured internal knowledge base.',
    tags: ['Documentation', 'Notion', 'Help Desk'],
    blue: false,
  },
  {
    icon: '📊',
    title: 'Internship Projects',
    desc: 'Delivered real work during internship placements, process improvement, technical ops, and reporting.',
    tags: ['Operations', 'Reporting', 'Collaboration'],
    blue: false,
  },
]

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.label}>projects &amp; work</div>
      <h2>Things I&apos;ve Built &amp; Done</h2>
      <div className={styles.grid}>
        {projects.map((p) => (
          <div key={p.title} className={styles.card}>
            <div className={styles.icon}>{p.icon}</div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <div className={styles.tags}>
              {p.tags.map(t => (
                <span key={t} className={`${styles.tag} ${p.blue ? styles.tagBlue : ''}`}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}