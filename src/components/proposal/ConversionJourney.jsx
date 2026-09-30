import Section from '../ui/Section.jsx';
import SectionHeader from '../ui/SectionHeader.jsx';
import { Fade } from '../ui/Reveal.jsx';
import JourneyMap from './JourneyMap.jsx';
import styles from './ConversionJourney.module.css';

/** Momento principal de storytelling visual: la hipótesis del recorrido como mapa estratégico. */
export default function ConversionJourney({ data }) {
  const { journey } = data;

  return (
    <Section
      id="recorrido"
      labelledBy="recorrido-title"
      style={{ paddingTop: 'calc(var(--section-pad) * 1.1)', paddingBottom: 'calc(var(--section-pad) * 0.8)' }}
    >
      <SectionHeader id="recorrido-title" eyebrow={journey.eyebrow} title={journey.title} lead={journey.lead} />

      <div className={styles.mapWrap}>
        <JourneyMap journey={journey} />
      </div>

      {journey.note && (
        <Fade as="aside" className={styles.note}>
          <span className={styles.noteLabel}>Hipótesis</span>
          <p>{journey.note}</p>
        </Fade>
      )}
    </Section>
  );
}
