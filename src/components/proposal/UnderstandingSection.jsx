import Section from '../ui/Section.jsx';
import SectionHeader from '../ui/SectionHeader.jsx';
import { Fade } from '../ui/Reveal.jsx';
import { pad } from '../../utils/format.js';
import styles from './UnderstandingSection.module.css';

/** Quiet Editorial: tipografía, espacio y separadores. Sin espectáculo. */
export default function UnderstandingSection({ data }) {
  const {
    eyebrow,
    title,
    lead,
    paragraphs = [],
    highlights = [],
    development,
    observations = [],
    disclaimer,
  } = data.understanding;

  const hasEditorialDevelopment = development?.origin && development?.findings && development?.rationale;

  return (
    <Section id="entendimiento" labelledBy="entendimiento-title">
      {hasEditorialDevelopment ? (
        <>
          <SectionHeader
            id="entendimiento-title"
            eyebrow={eyebrow}
            title={title}
            lead={lead}
            className={styles.opening}
          />

          <div className={styles.development}>
            <Fade className={styles.origin}>
              <h3 className={styles.developmentLabel}>{development.origin.label}</h3>
              <div className={styles.developmentCopy}>
                {development.origin.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Fade>

            <div className={styles.analysis}>
              {[development.findings, development.rationale].map((block, index) => (
                <Fade className={styles.analysisBlock} key={block.label} delay={0.08 + index * 0.08}>
                  <h3 className={styles.developmentLabel}>{block.label}</h3>
                  <p>{block.text}</p>
                </Fade>
              ))}
            </div>

            {disclaimer && <p className={`${styles.disclaimer} ${styles.editorialDisclaimer}`}>{disclaimer}</p>}
          </div>
        </>
      ) : (
        <>
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
              {disclaimer && <p className={styles.disclaimer}>{disclaimer}</p>}
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
        </>
      )}

      {observations.length > 0 && (
        <div className={styles.observations}>
          <div className={styles.obsHead}>
            <h3 className={styles.obsTitle}>{data.understanding.observationsLabel ?? 'Lo que observé'}</h3>
            <p className={styles.obsKicker}>
              {data.understanding.observationsKicker ?? `${pad(observations.length)} hallazgos que orientan esta propuesta`}
            </p>
          </div>
          <ol className={styles.obsList}>
            {observations.map((o, i) => (
              <Fade as="li" key={i} className={styles.obsItem} delay={i * 0.14} y={22}>
                <span className={styles.obsNumber}>{pad(i + 1)}</span>
                <p>{o}</p>
              </Fade>
            ))}
          </ol>
        </div>
      )}

    </Section>
  );
}
