import styles from './Journey.module.css'

const items = [
   {
    date: 'Earlier',
    title: 'The Beginning',
    role: 'Education & Discovery',
    desc: 'Developed a passion for technology and how it shapes everyday life. This curiosity is what drives everything above.',
  },
  {
    date: '2023 – 2025',
    title: 'Internship Journey',
    role: 'Various Organisations',
    desc: 'Gained real-world exposure to professional environments, collaborative workflows, and industry tools. Each placement added a new layer of practical skills and professional growth.',
  },
  {
    date: '2024 – Present',
    title: 'Cybersecurity Self-Study',
    role: 'Independent Learning',
    desc: 'Pursuing certifications and hands-on labs in network security, ethical hacking fundamentals, and SIEM tools. Completing CTF challenges and building a home lab environment.',
  },
  
  {
    date: '2025 – Present',
    title: 'Technical & Customer Support Specialist',
    role: 'Support Operations',
    desc: 'Handling end-user issues across software, hardware, connectivity, diagnosis, maintaenance and reprairs of Point Of Sale(POS) machines. Built strong communication skills, a structured approach to problem-solving, and deep patience under pressure.',
  },
 
]

export default function Journey() {
  return (
    <section id="journey" className={styles.section}>
      <div className={styles.label}>my journey</div>
      <h2>Experience &amp; Growth</h2>
      <div className={styles.timeline}>
        {items.map((item) => (
          <div key={item.title} className={styles.item}>
            <div className={styles.date}>{item.date}</div>
            <div className={styles.title}>{item.title}</div>
            <div className={styles.role}>{item.role}</div>
            <div className={styles.desc}>{item.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}