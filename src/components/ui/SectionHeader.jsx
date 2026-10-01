import { RevealText, Fade } from './Reveal.jsx';
import styles from './SectionHeader.module.css';

export default function SectionHeader({ number, eyebrow, title, lead, id, className = '' }) {
  const leadParagraphs = Array.isArray(lead) ? lead : lead ? [lead] : [];
  const titleLines = Array.isArray(title) ? title : [title];

  return (
    <header className={`${styles.header} ${className}`}>
      {eyebrow ? (
        <p className={styles.eyebrow}>
          {number ? <span className={styles.number}>{number}</span> : null}
          {eyebrow}
        </p>
      ) : null}
      <h2 className={styles.title} id={id}>
        {titleLines.map((line) => <RevealText className={styles.titleLine} key={line}>{line}</RevealText>)}
      </h2>
      {leadParagraphs.length > 0 ? (
        <Fade className={leadParagraphs.length > 1 ? styles.leadGroup : ''} delay={0.25}>
          {leadParagraphs.map((paragraph) => (
            <p className={styles.lead} key={paragraph}>{paragraph}</p>
          ))}
        </Fade>
      ) : null}
    </header>
  );
}
