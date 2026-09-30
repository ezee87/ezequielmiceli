import { RevealText, Fade } from './Reveal.jsx';
import styles from './SectionHeader.module.css';

export default function SectionHeader({ number, eyebrow, title, lead, id, className = '' }) {
  return (
    <header className={`${styles.header} ${className}`}>
      <p className={styles.eyebrow}>
        {number ? <span className={styles.number}>{number}</span> : null}
        {eyebrow}
      </p>
      <h2 className={styles.title} id={id}>
        <RevealText>{title}</RevealText>
      </h2>
      {lead ? (
        <Fade as="p" className={styles.lead} delay={0.25}>
          {lead}
        </Fade>
      ) : null}
    </header>
  );
}
