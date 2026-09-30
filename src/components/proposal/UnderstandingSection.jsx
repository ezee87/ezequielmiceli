import Section from '../ui/Section.jsx';
import SectionHeader from '../ui/SectionHeader.jsx';
import { Fade } from '../ui/Reveal.jsx';
import { pad } from '../../utils/format.js';
import styles from './UnderstandingSection.module.css';

/** Quiet Editorial: tipografía, espacio y separadores. Sin espectáculo. */
export default function UnderstandingSection({ data }) {
  const { eyebrow, title, lead, paragraphs = [], highlights = [], observations = [], disclaimer } = data.understanding;

  return (
    <Section id="entendimiento" labelledBy="entendimiento-title">
      <SectionHeader id="entendimiento-title" eyebrow={eyebrow} title={title} />

      <div className={styles.body}>
        <div className={styles.text}>
          <Fade as="p" className={styles.lead}>
            {lead}
          </Fade>
          {paragraphs.map((p, i) => (
            <Fade as="p" className={styles.paragraph} key={i} delay={0.05}>
              {p}
            </Fade>
          ))}
        </div>

        <dl className={styles.highlights}>
          {highlights.map((h) => (
            <Fade className={styles.highlight} key={h.label}>
              <dt>{h.label}</dt>
              <dd>{h.text}</dd>
            </Fade>
          ))}
        </dl>
      </div>

      {observations.length > 0 && (
        <div className={styles.observations}>
          <h3 className={styles.obsTitle}>Lo que observé</h3>
          <ol className={styles.obsList}>
            {observations.map((o, i) => (
              <Fade as="li" key={i} className={styles.obsItem} delay={i * 0.06}>
                <span className={styles.obsNumber}>{pad(i + 1)}</span>
                <p>{o}</p>
              </Fade>
            ))}
          </ol>
        </div>
      )}

      {disclaimer && <p className={styles.disclaimer}>{disclaimer}</p>}
    </Section>
  );
}
